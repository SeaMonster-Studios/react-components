const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, './build/'),
    filename: 'index.js',
    library: '@seamonster-studios/react-components',
    libraryTarget: 'commonjs',
  },
  // externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react'],
        },
      },
    ],
  },
}
