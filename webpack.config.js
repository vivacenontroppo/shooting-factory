const htmlWebpack = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry : ['./src/main.ts'],
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: (__dirname + '/dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new htmlWebpack({template: './src/index.html'}),
    new CopyWebpackPlugin([
      { from: './src/assets/*', to: './assets', flatten: true },
      { from: './src/*.css', to: './', flatten: true }
    ])
  ],
}
