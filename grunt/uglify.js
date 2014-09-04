module.exports = {
  dist: {
    options: {
      compress: {
        drop_console: false
      }
    },
    files: {
      '<%= distPath %>/niwebsite.min.js': [
        '<%= distPath %>/app.js'
      ]
    }
  }
};