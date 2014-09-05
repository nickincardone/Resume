module.exports = {
  dev: {
    options: {
      process: function(src, filepath) {
        return '\n// ' + filepath + '\n' + src;
      }
    },
    src: [
      '<%= jsPath %>/global/validator_module.js',
      '<%= jsPath %>/global/*.js',
      '<%= jsPath %>/global/bargraph/bargraph_module.js',
      '<%= jsPath %>/global/bargraph/*.js',
      '<%= jsPath %>/states/states_module.js',
      '<%= jsPath %>/states/*.js',
      '<%= jsPath %>/templates_module.js',
      '<%= jsPath %>/main_module.js',
      '<%= jsPath %>/**/*.js'
    ],
    dest: '<%= distPath %>/app.js'
  }
};
