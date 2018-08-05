// entry (app.js) -> output

// node webpack.config.js
const path = require('path');
//console.log(path.join(__dirname, 'public'));

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtract= new ExtractTextPlugin('styles.css');

module.exports = (env) => {
    const isProduction = env === 'production';

    // console.log('env', env)
    return {
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
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
};

//prduction: yarn run bundle - to get phisical bundle.js file
//dev: yarn run dev-server