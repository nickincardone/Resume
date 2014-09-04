module.exports = {
  scripts: {
    files: ['<%= jsPath %>/**/*.js'],
    tasks: ['concat:dev'],
    options: {

    }
  },
  styles: {
    files: [
      '<%= cssPath %>/**/*.scss',
      '!<%= cssPath %>/**/styles.css',
    ],
    tasks: ['sass:dev']
  },
  templates:  {
    files: [
      '<%= htmlPath %>/**/*.html'
    ],
    tasks: ['ngtemplates:dev']
  }
};