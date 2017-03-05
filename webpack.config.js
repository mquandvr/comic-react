module.exports = {
    context: __dirname + "/src",
    entry: [
      "./index.jsx"
    ],

    output: {
        path: __dirname + 'static',
        filename: 'bundle.js',
    },

    devServer: {
        contentBase : __dirname + "/src",
        historyApiFallback: true,
        port: 8080
    },

    module: {
      loaders: [
        { test: /\.css$/, loader: "file?name=[name].[ext]"},
        { test: /\.html$/, loader: "file?name=[name].[ext]"},
        { test: /\.jsx$/, loader: ['babel-loader', 'eslint-loader'], exclude: /node_modules/}
      ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    }
};
