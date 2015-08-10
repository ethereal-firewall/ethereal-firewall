module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: 'client/dist/main.js',
        dest: 'client/dist/main.js'
      }
    },

    concat: {
      options: {
        separator: '\n'
      },
      clientjs: {
        src: [
          './client/app/app.js',
          './client/app/route.js',
          './client/app/controllers/**/*.js',
          './client/app/services/**/*.js'
        ],
        dest: './client/dist/main.js'
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
      serverjs: {
        files: ['server/**/*.js'],
        tasks: ['jshint']
      },
      clientjs: {
        files: ['client/**/*.js', '!client/dist/**/*.*'],
        tasks: ['jshint', 'build']
      }
    },

    jshint: {
      files: [
        'client/**/*.js',
        'server/**/*.js',
      ],
      options: {
        force: 'true',
        ignores: [
          'client/dist/**/*.js'
        ]
      }
    },

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

  // Dev Env //////////////////////////////////////////////////////////////
  grunt.registerTask('server-dev', function(target) {
    var nodemon = grunt.util.spawn({
      cmd: 'grunt',
      grunt: true,
      args: 'nodemon'
    });

    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run(['watch']);
  })

  // Helper Tasks /////////////////////////////////////////////////////////
  grunt.registerTask('default', ['concat', 'sass', 'watch']);
  grunt.registerTask('build', [ 
    'concat', 
    'sass',
    'uglify'
  ]);
  grunt.registerTask('start', ['nodemon']);

  grunt.registerTask('test', [
    'jshint'
  ]);

  grunt.registerTask('upload', function(n) {
    if (grunt.option('prod')) {
      // Do production server upload/deployment tasks
    }
    else {
      grunt.task.run(['build']);
      grunt.task.run(['server-dev']);
    }
  })

  // Grunt Tasks ///////////////////////////////////////////////////////////////
  grunt.registerTask('deploy', [
    'test',
    'upload'
  ]);
};