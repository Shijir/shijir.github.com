module.exports = function(grunt) {

  // Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        options: {
          sourceMap: true
        },
        src: [
          'js/script.js'
        ],
        dest: 'js/production.js'
      }
    },
    htmlmin: { // Task
      dist: { // Target
        options: { // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: { // Dictionary of files
          './index.html': './index-main.html'
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'js/script.js']
    },
    uglify: {
      my_target: {
        files: {
          'js/production.min.js': ['js/production.js'],
          'libs/domReady/domReady.min.js': ['libs/domReady/domReady.js'],
          'libs/requirejs/require.min.js': ['libs/requirejs/require.js']
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/main.css': 'css/main.scss',
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: './'
        }
      }
    },
    autoprefixer: {
      dist: {
        files: {
          'css/main.css': 'css/main.css'
        }
      }
    },
    compass: {
      dist: { // Target
        options: { // Target options
          sassDir: 'css',
          cssDir: 'css'
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          './css/main.min.css': ['./css/main.css']
        }
      }
    },
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      html: {
        files: ['index-main.html'],
        tasks: ['htmlmin']
      },
      scripts: {
        files: ['Gruntfile.js', 'js/*.js'],
        tasks: ['concat', 'jshint', 'uglify']
      },
      scss: {
        files: ['css/*.scss'],
        tasks: ['compass']
      },
      css: {
        files: ['css/*.css'],
        tasks: ['autoprefixer', 'cssmin']
      }
    }
  });

  // Plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-shell');
  // Tasks
  grunt.registerTask('default', ['concat', 'htmlmin', 'jshint', 'uglify', 'autoprefixer', 'compass', 'cssmin', 'connect', 'watch']);
};
