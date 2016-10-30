var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var getPath = function (pathToFile) { return path.resolve(__dirname, pathToFile); }

var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'build';

module.exports = (function makeWebpackConfig() {

    var config = {};

    config.entry = {
        'app': './src/app/index.ts',
        'vendor': './src/app/vendor.ts'
    };

    config.output = {
        path: getPath('./dist'),
        filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
        chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js',
        publicPath: isProd ? '/' : 'http://localhost:8080/'

    };

    config.devtool = 'source-map';
    config.resolve = {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    };
    config.module = {
        loaders: [
            {
                // TS LOADER
                test: /\.ts$/,
                loader: 'ng-annotate!awesome-typescript-loader',
                include: [
                    getPath("src/app")
                ]
            },
            {
                // JS LOADER
                test: /\.js$/,
                loader: 'babel',
                include: [
                    getPath("src/app")
                ]
            },
            {
                // SCSS LOADER - generates a separate CSS file, and adds the link to <head>
                test: /\.scss$/,
                loader: isProd ? ExtractTextPlugin.extract('style', 'css!postcss!sass') : 'style!css!sass'
            },
            /**
             * To keep CSS bundled in with the generated JS, uncomment this section
             */
            // {
            //     test: /\.scss$/,
            //     loader: 'style!css!sass'
            // },
            {
                // ASSET LOADER
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                // HTML LOADER
                test: /\.html$/,
                loader: 'raw',
                exclude: /(index)/
            }
        ]
    };

    config.postcss = [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ];


    config.plugins = [
        new CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity
        }),

        new HtmlWebpackPlugin({
            template: getPath('./src/index.html'),
            inject: 'body'
        })
    ];

    if (isProd) {
        config.plugins.push(
            // Create separate CSS file
            new ExtractTextPlugin('app.css'),

            // Dedupe modules in the output
            new webpack.optimize.DedupePlugin(),

            // Minifiy all JS, switch loaders to minimizing mode
            new webpack.optimize.UglifyJsPlugin()
        );
    }


    config.devServer = {
        contentBase: './src'
    }

    return config;
})();