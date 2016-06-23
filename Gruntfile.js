module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/js/jquery.all.min.js': ['build/js/jquery-1.9.1.js','build/js/jquery.validate.min.js', 'build/js/video.js', 'build/js/script.js']
                }
            }
        },
		
		cssmin: {
            target: {
                files: {
                    'dist/css/main.min.css': ['build/css/custom.css','build/css/lang.css','build/css/video-js.css']
                }
            }
        },
		
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'dist/index.html': 'build/index.html',
					'dist/test.html' : 'build/test.html'
				}
			}
		},
		
		copy: {
			main: {
				files: [
					{src: 'build/css/bootstrap.min.css', dest: 'dist/css/bootstrap.min.css'},
					{src: 'build/js/bootstrap.min.js', dest: 'dist/js/bootstrap.min.js'},
					{expand: true, cwd: 'build/img', src: '**', dest: 'dist/img/'},
					{expand: true, cwd: 'build/pdf', src: '**', dest: 'dist/pdf/'}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['uglify','cssmin','htmlmin','copy']);

};