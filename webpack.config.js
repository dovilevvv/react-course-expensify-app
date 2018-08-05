// entry (app.js) -> output

// node webpack.config.js
const path = require('path');
//console.log(path.join(__dirname, 'public'));

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    //loader
    module: {
        rules: [{
            loader: 'babel-loader',
            test:  /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

//prduction: yarn run bundle - to get phisical bundle.js file
//dev: yarn run dev-server