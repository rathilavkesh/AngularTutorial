// Generated on 2015-03-07 using generator-angular 0.11.1
'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
  
  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'src/main/webapp/app',
    dist: 'dist',
    uiTest: require('./bower.json').testPath || 'uiTest'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    angularTutorial: appConfig,

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= angularTutorial.app %>/scripts/**/*.js'
        ]
      },
      test: {
        options: {
          jshintrc: '<%= angularTutorial.uiTest %>/.jshintrc'
        },
        src: ['<%= angularTutorial.uiTest %>/spec/**/*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= angularTutorial.dist %>/**/*',
            '!<%= angularTutorial.dist %>/.git**/*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Renames files for browser caching purposes
    rev: {
      files: {
        src: [
          '<%= angularTutorial.dist %>/scripts/**/*.js',
          '<%= angularTutorial.dist %>/styles/**/*.css',
          '<%= angularTutorial.dist %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= angularTutorial.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= angularTutorial.app %>/index.html',
      options: {
        dest: '<%= angularTutorial.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= angularTutorial.dist %>/**/*.html'],
      css: ['<%= angularTutorial.dist %>/styles/**/*.css'],
      options: {
        assetsDirs: [
          '<%= angularTutorial.dist %>',
          '<%= angularTutorial.dist %>/images',
          '<%= angularTutorial.dist %>/styles'
        ]
      }
    },
    
    uglify: {
        options: {
        	sourceMap : true,
            report: 'min',
            mangle: true
        }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= angularTutorial.app %>/images',
          src: '**/*.{png,jpg,jpeg,gif}',
          dest: '<%= angularTutorial.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= angularTutorial.app %>/images',
          src: '**/*.svg',
          dest: '<%= angularTutorial.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= angularTutorial.dist %>',
          src: ['*.html', 'views/**/*.html'],
          dest: '<%= angularTutorial.dist %>'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= angularTutorial.app %>',
          dest: '<%= angularTutorial.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/**/*.html',
            'images/**/*.{webp}',
            'styles/fonts/**/*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= angularTutorial.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '<%= angularTutorial.app %>/bower_components/bootstrap/dist',
          src: 'fonts/*',
          dest: '<%= angularTutorial.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= angularTutorial.app %>/styles',
        dest: '.tmp/styles/',
        src: '**/*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: '<%= angularTutorial.uiTest %>/karma.conf.js',
        singleRun: true
      }
    }
  });
  
  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cssmin',
    'uglify',
    'rev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
