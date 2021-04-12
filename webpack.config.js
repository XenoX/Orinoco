const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
    entry: ['./src/index.js', './src/product.js', './src/basket.js', './src/order.js', './src/app.js'],
    plugins: [
        new Dotenv()
    ],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public'),
    },
};