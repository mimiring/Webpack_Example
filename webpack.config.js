const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: "./source/index.js",
        about: "./source/about.js"
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: '[name]_bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.css$/, // 확장자가 css인 파일을 처리하는 방법을 알려주고 싶을 때
                use: [
                    'style-loader', // 가져온css 코드를 웹페이지 안에 주입
                    'css-loader' // css파일을 읽어옴
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/index.html',
            filename: './index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './source/about.html',
            filename: './about.html',
            chunks: ['about']
        })
    ]
}
