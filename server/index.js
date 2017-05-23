import express from "express"
import fallback from "connect-history-api-fallback"
import { join, resolve } from "path"
import webpack from "webpack"
import webpackConfig from "../configuration/webpack/webpack.dev.config"
import webpackDevMiddleware from "webpack-dev-middleware"
import webpackHotMiddleware from "webpack-hot-middleware"

let server          = express()
let webpackCompiler = webpack(webpackConfig)

//  History API fallback
server.use(fallback({ verbose: false }))

//  Webpack dev middleware
server.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true
    },
    noInfo: true
}))

// Webpack HRM
server.use(webpackHotMiddleware(webpackCompiler))

server.get('*', (req, res) => {
  res.send(join(__dirname, 'index.html'))
})

server.listen(3000, () => console.log('Running on localhost:3000'))