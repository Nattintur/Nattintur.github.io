'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var config = {
    pkg: grunt.file.readJSON('package.json'),

    less: {
      style: {
        files: {
          'source/css/style.css': 'source/less/style.less'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'})
        ]
      },
      style: {
        src: 'css/*.css'
      }
    },

    watch: {
      style: {
        files: ['less/**/*.less'],
        tasks: ['less', 'postcss'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

clean:{
      build:["build"]
    },

    copy: {
      build: {
        files:[{ 
          expand: true,
          cwd: "source",
          src: [
          "img/**",
          "js/**",
          "index.html",
          "form.html"
          ],
          dest: "build"
        }]
      }
    },

    imagemin: {
        images: {
          options: {
            optimizationLevel: 3
          },
          files: [{
            expand: true,
            src: ["build/img/**/*.{png, jpg, gif, svg}"]
          }]
        }
    },

    cssmin: {
      options: {
        keepSpecialComments: 0,
        report: "gzip"
      },
      style: {
        files: {
          "build/css/style.min.css": ["source/css/style.css"]
        }
      }
    }

  };

  /*config = require('./.gosha')(grunt, config);*/

  grunt.initConfig(config);
    grunt.registerTask("build",[
    "clean",
    "copy",
    "less",
    "postcss",
    "cssmin",
    "imagemin"
    ])

};
