'use strict';

module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'app/js/plugins/*.js', 
                    'app/js/main.js' 
                ],
                dest: 'app/build/js/production.js',
            }
        },

        uglify: {
            build: {
                src: 'app/build/js/production.js',
                dest: 'app/build/js/production.min.js'
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'app/build/css/stylesheet.css': 'app/scss/stylesheet.scss',
                    'app/build/css/old-ie.css': 'app/scss/old-ie.scss',
                    'app/build/css/colors/blue.css': 'app/scss/theme/colors/blue.scss',
                    'app/build/css/colors/brown.css': 'app/scss/theme/colors/brown.scss',
                    'app/build/css/colors/dark-blue.css': 'app/scss/theme/colors/dark-blue.scss',
                    'app/build/css/colors/gold.css': 'app/scss/theme/colors/gold.scss',
                    'app/build/css/colors/green.css': 'app/scss/theme/colors/green.scss',
                    'app/build/css/colors/orange.css': 'app/scss/theme/colors/orange.scss',
                    'app/build/css/colors/pink.css': 'app/scss/theme/colors/pink.scss',
                    'app/build/css/colors/purple.css': 'app/scss/theme/colors/purple.scss',
                    'app/build/css/colors/red.css': 'app/scss/theme/colors/red.scss',
                    'app/build/css/colors/turquoise.css': 'app/scss/theme/colors/turquoise.scss'
                }
            } 
        },

        autoprefixer: {   
            options: {
              browsers: [
                'last 2 versions',
                'Explorer >= 9',
                'Android >= 2.3'
              ]
            },
            dist: {
              src: 'app/build/css/stylesheet.css'
            }
        },

        delete_sync : {
            dist : {
                cwd : 'app/build/images',
                src : ['**'],
                syncWith : 'app/images'
            }
        }, // end of delete sync

        imagemin : {
            all : {
                files : [{
                    expand : true, // Enable dynamic expansion
                    cwd: 'app/images/', // source images (not compressed)
                    src : ['**/*.{png,jpg,gif,svg}'], // Actual patterns to match
                    dest: 'app/build/images/' // Destination of compressed files
                }]
            }
        }, //end imagemin

        php: {
            dist: {
                options: {
                    hostname: '127.0.0.1',
                    port: 9000,
                    base: 'app', // Project root
                    keepalive: false,
                    open: false
                }
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'app/*.php',
                        'app/_includes/*.php',
                        'app/build/css/*.css'
                    ]
                },
                options: {
                    proxy: '<%= php.dist.options.hostname %>:<%= php.dist.options.port %>', //our PHP server
                    open: true,
                    notify: true,
                    watchTask: true
                }
            }
        },

        watch: {

            scripts: {
                files: ['app/js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                  spawn: false,
                },
            },

            css: {
                files: ['app/scss/*.scss', 'app/scss/**/*.scss'],
                tasks: ['sass','autoprefixer'],
                options: {
                  spawn: false,
                }
            },

            images: {
                files: ['app/images/*.{png,jpg,gif,svg}'],
                tasks: ['newer:imagemin']
            }, /* watch images added to src */

            deleting: {
                files: ['app/images/*.{png,jpg,gif,svg}'],
                tasks: ['delete_sync']
            }, /* end of delete sync*/

        },


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-delete-sync');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['php', 'browserSync', 'watch']);

};