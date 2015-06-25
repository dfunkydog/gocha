module.exports = function(grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({


    // compile SASS compress for production
    sass: {
        dev: {
          options: {
            sourceMap: true,
            outputStyle:'expanded'
          },
          files: {
              'style.css': 'scss/main.scss'
          }
        },
        dist: {
          options: {
            sourceMap: false,
            outputStyle:'compressed'
          },
          files: {
              'style.css': 'scss/main.scss'
          }
        }
    },

    // watch for changes
    watch: {
      scss:{
        files:[ 'scss/modules/*.scss','scss/base/*.scss','scss/main.scss',],
        tasks: [ 'sass:dev', ]
      },
      js:{
        files:[ 'js/*.js'],
        tasks: [ 'concat','autoprefixer:dist' ]
      }
    },

    // add prefixes on dist
    autoprefixer: {
      options: {
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
      },
      dist: {
        files: [{
          src: 'style.css',
          dest: 'style.css'
        }]
      }
    },

    //modernizr
    modernizr: {
      dist: {
        'devFile': 'js/modernizr-dev.js',
        'outputFile': 'js/modernizr.js',
        'extra' : {
            'shiv' : true,
            'printshiv' : false,
            'load' : true,
            'mq' : false,
            'cssclasses' : true
        },
        'uglify' : true,
        'parseFiles' : true,
        'files': {
          'src': ['js/*.js', 'style.css']
        }
      }
    },

    //uglify
    uglify: {
      dev:{
        options:{
          mangle:false,
          sourceMap:true,
          sourceMapName: ' js-min/sourcemap.map'
        },
        files:{
          'js-min/scripts.min.js':[
            'js/customizer.js',
            'js/navigation.js',
            'js/skip-link-focus.js',
            'js/site.js'
          ]
        }
      }
    },

    // concatenate for dev
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'js/vendor/customizer.js',
          'js/main.js',
          'js/plugins.js'
        ],
        dest: 'js-min/scripts.js',
      }
    }

  });



  grunt.registerTask('default', [
    'sass:dist',
    'autoprefixer:dist',
    'uglify'
    ]);

};
