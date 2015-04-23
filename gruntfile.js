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

    // Create AMD and CommonJS specific versions
    includereplace: {
      js: {
        files: {
          'dist/pegasus-amd.js': 'src/amd.js',
          'dist/pegasus-commonjs.js': 'src/commonjs.js',
        }
      }
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
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-include-replace')
  grunt.loadNpmTasks('grunt-bytesize');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('build', ['copy:dist', 'includereplace', 'uglify', 'copy:example', 'bytesize']);
  grunt.registerTask('deploy', ['build', 'gh-pages'])
  grunt.registerTask('default', 'watch');

};