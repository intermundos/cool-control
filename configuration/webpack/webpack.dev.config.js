import webpack from 'webpack'
import { resolve, join } from 'path'

import babelConfig from '../babel/babel.dev.config'

const srcPath = resolve('client')
const excludeNode = /node_modules/


export default {
  devtool: 'eval',
  entry: [
    `webpack-hot-middleware/client`,
    './client/index'
  ],
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: excludeNode,
        include: srcPath,
        loader: 'babel-loader',
        query: babelConfig
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              data: '@import "../configuration/sass/sassutils";',
              includePaths: [
                srcPath
              ]
            }
          },
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ]
}
