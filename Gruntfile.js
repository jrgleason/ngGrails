module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		html2js : {
			build : {
				src : [ 'src/main/partials/**/*.html', 
				        'src/main/partials/**/*.jade' ],
				dest : 'build/ng-grails-templates.js'
			}
		},
		concat : {
			core : {
				src : [ 'src/main/angular/**/app.js',
						'src/main/angular/**/*.js'],
				dest : 'build/ng-grails-core.js',
			},
		    combine: {
		    	src:['build/ng-grails-templates.js',
		    	     'build/ng-grails-core.js'],
		    	dest : 'build/ng-grails.js',     
		    }
		},
		clean: {
			  build: ["build",'web-app/js/ng-grails.js']
	    },
		watch : {
			html2js : {
				files : [ 'src/main/partials/**/*.html', 
				          'src/main/partials/**/*.jade' ],
				tasks : [ 'html2js' ]
			},
			concat : {
				files : ['src/main/angular/**/app.js',
							'src/main/angular/**/*.js',
							'build/ng-grails-templates.js'],
				tasks : [ 'concat' ]
			}
		},
		ngAnnotate: {
	        options: {
	        	remove: true
	        },
	        release: {
	        	files: {
	        	  'build/ng-grails-annotated.js': ['build/ng-grails.js']
	        	}
	        },
	    },
	    uglify: {
	        release: {
	          files: {
	            'build/ng-grails-min.js': ['build/ng-grails-annotated.js']
	          }
	        }
	    },
        copy: {
          release: {
              files: [
                  {src: ['build/ng-grails-min.js'], dest: 'web-app/js/ng-grails.js'},
              ],
          },
          build: {
        	  files: [
                  {src: ['build/ng-grails.js'], dest: 'web-app/js/ng-grails.js'},
              ],
          }
        },
	});
	grunt.registerTask('default', [ 'build' ]);
	grunt.registerTask('build', [ 'clean', 'html2js', 'concat', 'copy:build']);
	grunt.registerTask('release', [ 'clean', 'html2js', 'concat', 'ngAnnotate', 'uglify', 'copy:release' ]);
	return grunt;
}
