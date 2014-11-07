module.exports = function(grunt) {

  grunt.initConfig({
    bower: grunt.file.readJSON('bower.json'),

    copy: {
      // copy pegasus.js to dist
      dist: {
        src:'src/<%= bower.name %>.js',
        dest: 'dist/<%= bower.name %>.js'
      },

      // copy pegasus(.min).js to example folder
      example: {
        expand: true,
        cwd: 'dist/',
        src: ['<%= bower.name %>.js', '<%= bower.name %>.min.js'],
        dest: 'example/scripts/'
      }
    },

    concat: {
      // create an AMD compatible version of pegasus
      'dist/<%= bower.name %>-amd.js': ['src/<%= bower.name %>.js', 'src/amd.js'],
      'dist/<%= bower.name %>-commonjs.js': ['src/<%= bower.name %>.js', 'src/commonjs.js']
    },

    uglify: {
      // minify everything in dist
      options: {
        banner: '//<%= bower.version %>\n'
      },
      dist: {
        files: {
          'dist/pegasus.min.js': 'dist/pegasus.js'
        }
      }
    },

    bytesize: {
      all: {
        src: [
          'dist/<%= bower.name %>.min.js'
        ]
      }
    },

    jshint: {
      files: ['src/*.js']
    },

    watch: {
      files: ['gruntfile.js', '<%= jshint.files %>'],
      tasks: 'build',
      options: {
        atBegin: true
      }
    },

    'gh-pages': {
      options: {
        base: 'example'
      },
      src: ['**']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-bytesize');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('build', ['jshint', 'copy:dist', 'concat', 'uglify', 'copy:example', 'bytesize']);
  grunt.registerTask('deploy', ['build', 'gh-pages'])
  grunt.registerTask('default', 'watch');

};