import express from 'express'
import { resolve, join } from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../configuration/webpack/webpack.dev.config'

let server = express()
let webpackCompiler = webpack(webpackConfig)

server.use(webpackDevMiddleware(webpackCompiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  },
  noInfo: true
}))

server.use(webpackHotMiddleware(webpackCompiler))

server.get('*', (req, res) => res.sendFile(join(__dirname, 'index.html')))

server.listen(3000, () => console.log('Running app on localhost:3000'))