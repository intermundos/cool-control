import express              from "express";
import {join, resolve}      from "path";
import webpack              from "webpack";
import webpackConfig        from "../configuration/webpack/webpack.dev.config";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

let server          = express()
let webpackCompiler = webpack(webpackConfig)

server.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true
    },
    noInfo: true
}))

server.use(webpackHotMiddleware(webpackCompiler))

server.get('*', (req, res, next) => {
    let htmlFile = join(webpackCompiler.outputPath, 'index.html')
    webpackCompiler.outputFileSystem.readFile(htmlFile, (err, result) => {
        if (err) {
            return next(err)
        }
        res.set('content-type', 'text/html')
        res.send(result)
        res.end()
    })
})

server.listen(3000, () => console.log('Running on localhost:3000'))