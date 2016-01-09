module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/main.css": "less/main.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};
// module.exports = function (grunt) {
// 	grunt.initConfig({
// 		less: {
// 			development: {
// 				options: {
// 					compress: true,
// 					yuicompress: true,
// 					optimizacion: 2
// 				},
// 				files: {
// 					"css/main.min.css": "less/main.less" //destination file and source file
// 				}
// 			}
// 		},
// 		watch: {
// 			styles: {
// 				files: ["app/css/main.css", "app/css/less/main.less"], //which files to watch
// 				task: ['less'],
// 				options: {
// 					nospawn: false,
// 					event:["added", "deleted","changed"]
// 				}
// 			}

// 		}
// 	});

// 	grunt.loadNpmTasks("grunt-contrib-less");
// 	grunt.loadNpmTasks("grunt-contrib-watch");
// 	grunt.registerTask('less', ['less', 'watch']);
// };