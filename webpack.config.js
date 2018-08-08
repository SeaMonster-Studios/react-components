const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'bundle.index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs',
  },
  // externals: [
  //   nodeExternals({
  //     whitelist: [/^bs-.*/, 'reason-react'],
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
