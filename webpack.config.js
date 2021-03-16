import path from "path";
const port = process.env.PORT || 3030;

import { default as HtmlWebpackPlugin } from "html-webpack-plugin";


const webpackConfig = {
    mode:"development",
    entry: './src/index.tsx',
    devtool:"source-map",

    // devServer: {
    //   contentBase: path.resolve("./build/"),
    //   port: port,
    //   inline: true,
    //   hot: true,
    //   host: "localhost",
    // },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/public/index.html', // 템플릿 경로
        hash: true, //핑거 프린트
      })
    ],

    output: {
      filename: "[name].bundle.js",
      path: path.resolve("./build/"),
    },

    resolve: {
      extensions:[".ts",".tsx", ".js", ".jsx"]
    },

    module: {
      rules: [
        { test: /\.ts(x?)$/, loader: "ts-loader" }
      ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
    

}

export default webpackConfig;