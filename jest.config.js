const babelJest = require('babel-jest');

module.exports = {
  process: function(src, filename) {
    return babelJest.process(
      src.replace(/^require\(\'(?:(?:\.\/)|(?:\.\.\/)+)?[a-zA-Z0-9]+\.scss\'\);$/gm, '')
      , filename
      );
  }
};

