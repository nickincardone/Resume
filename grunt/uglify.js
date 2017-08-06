module.exports = {
  dist: {
    options: {
      compress: {
        drop_console: false
      }
    },
    files: {
      '<%= distPath %>/site.min.js': [
        '<%= distPath %>/app.js'
      ]
    }
  }
};