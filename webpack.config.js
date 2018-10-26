const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/script.js'),

  output: {
    path: path.join(__dirname, '.'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [],
};
