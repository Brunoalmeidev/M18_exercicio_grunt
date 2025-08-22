module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        files: {
          "dist/css/style.css": "src/less/style.less"
        }
      }
    },

    uglify: {
      build: {
        files: {
          "dist/js/app.min.js": ["src/js/app.js"]
        }
      }
    },

    watch: {
      styles: {
        files: ["src/less/*.less"],
        tasks: ["less"]
      },
      scripts: {
        files: ["src/js/*.js"],
        tasks: ["uglify"]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'uglify']);
};
