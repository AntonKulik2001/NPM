const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
     mode: 'development',
     devtool: 'inline-source-map',
     entry: './src/index.js',
     devServer: {
         static: './dist',
         port: 1093,
         hot: true,
         open: true,
     },
     output: {
        filename: 'dev.js'
    },
    plugins: [
        new MiniCssExtractPlugin({filename: 'styledev.css'}),
        new HtmlWebpackPlugin({template: './src/index.html', filename: 'dev.html', title: 'Development'})
    ],
    module: {
        rules: [
                {
                    test: /.html$/,
                    loader: 'pug-loader',
                    options: {
                    pretty: true
                             }
                },
                {
                    test: /.css$/,
                    use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                     }
                    },'css-loader'],
            }
        ]
    }
};