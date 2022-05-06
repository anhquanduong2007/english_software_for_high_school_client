const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    plugins: [new HtmlWebpackPlugin({
        template: './build/index.html',
    })]
}