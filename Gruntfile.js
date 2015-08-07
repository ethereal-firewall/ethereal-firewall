module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'dist/<%= pkg.name %>.min.js'
    //   }
    // },

    concat: {
      options: {
        separator: '\n'
      },
      sass: {
        files: {
          'client/assets/styles/combined.scss': [
            'client/assets/styles/reset.scss',
            'client/assets/styles/main.scss',
          ]
        }
      }
    },

    sass: {
      dist: {
        options: {
          sourceMap: true,
        },
        files: {
          'client/dist/styles.css':'client/asets/styles/combined.scss',
        }
      }
    },

    watch: {
      css: {
        files: 'client/styles/**/*.scss',
        tasks: ['concat', 'sass']
      }
    },

    // jshint: {
    //   files: [
    //     'public/client/**/*.js'
    //   ],
    //   options: {
    //     force: 'true',
    //     jshintrc: '.jshintrc',
    //     ignores: [
    //       'public/lib/**/*.js',
    //       'public/dist/**/*.js'
    //     ]
    //   }
    // },

    nodemon: {
      dev: {
        script: 'server/server.js'
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-nodemon');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'sass', 'watch']);
  grunt.registerTask('start', ['nodemon']);
};