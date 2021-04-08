const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    mode: process.env.NODE_ENV,
    target: 'browserslist',
    devtool: 'source-map',
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@styles': path.resolve(__dirname, 'src', 'styles'),
            '@pages': path.resolve(__dirname, 'src', 'pages'),
            '@store': path.resolve(__dirname, 'src', 'store'),
            '@utils': path.resolve(__dirname, 'src', 'utils'),
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new ESLintPlugin({
            fix: true,
            context: path.resolve(__dirname, 'src'),
            extensions: ['.js', '.jsx'],
            lintDirtyModulesOnly: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: 'usage',
                                    corejs: 3,
                                },
                            ],
                            ['@babel/preset-react', {
                                development: isDev,
                                runtime: 'automatic',
                            }],
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ],
                    },
                },
            },
        ],
    }
};