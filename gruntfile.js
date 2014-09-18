module.exports = function(grunt) {

  grunt.initConfig({
    bower: grunt.file.readJSON('bower.json'),
    uglify: {
      options: {
        banner: '//<%= bower.version %>\n'
      },
      dist: {
        files: {
          '<%= bower.name %>.min.js': '<%= bower.name %>.js'
        }
      }
    },
    bytesize: {
      all: {
        src: [
          '<%= bower.name %>.min.js'
        ]
      }
    },
    jshint: {
      files: ['<%= bower.name %>.js']
    },
    watch: {
      files: ['gruntfile.js', '<%= jshint.files %>'],
      tasks: 'build',
      options: {
        atBegin: true
      }
    },
    copy: {
      main: {
        src: ['<%= bower.name %>.js', '<%= bower.name %>.min.js'],
        dest: 'example/scripts/'
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
  grunt.loadNpmTasks('grunt-bytesize');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('build', ['jshint', 'uglify', 'copy', 'bytesize']);
  grunt.registerTask('deploy', ['build', 'gh-pages'])
  grunt.registerTask('default', 'watch');

};