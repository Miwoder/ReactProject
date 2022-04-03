const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
module.exports = {
    entry: __dirname + "/src/index.js",  // входная точка - исходный файл
    output: {
        path: __dirname + '/dist', // путь к каталогу выходных файлов // Folder to store generated bundle
        filename: 'bundle.js',  // Name of generated bundle after build // название создаваемого файла
        publicPath: '/' // public URL of the output directory when referenced in a browser
    },
    module: {  // where we defined file patterns and their loaders
        rules: [ //загрузчик для jsx
            {
                test: /\.js$/, // определяем тип файлов
                use: 'babel-loader', // определяем загрузчик
                exclude: [
                    /node_modules/  // исключаем из обработки папку
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
            {
                test: /\.(scss)$/,
                use: [{
                    loader: 'style-loader', // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [  // Array of plugins to apply to build chunk
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html",
            inject: 'body'
        })
    ],
    devServer: {  // configuration for webpack-dev-server
        contentBase: './src/public',  //source of static assets
        port: 7700, // port to run dev-server
    }
};