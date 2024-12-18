const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
    entry: {
        popup: path.resolve("./src/popup/index.jsx"),
        background: path.resolve("./src/background/background.js"),
        content:path.resolve("./src/content/content.js")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                tailwindcss,
                                autoprefixer
                            ],
                        },
                    },
                }]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve("./src/static/"),
                    to: path.resolve("dist")
                },
                {
                    from: path.resolve("./src/assets"),
                    to: path.resolve("dist/assets")
                }
            ]
        }),
        ...getHtmlPlugin(['popup'])
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    output: {
        filename: "[name].js",
    }
}

function getHtmlPlugin(chunks){
    return chunks.map((chunk)=>{
        return new HtmlWebpackPlugin({
            title:'React extension',
            filename: `${chunk}.html`,
            chunks: [chunk],
        })
    })
} 