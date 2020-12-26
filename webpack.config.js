// basic vars

const path = require('path');

// module settings

module.exports = {
  // mode
  mode: 'production',

  // main js file
  entry: './#src/js/index.js',

  // point js file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  // watch mode
  watch: true,
};
