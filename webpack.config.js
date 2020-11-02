var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};


const Dotenv = require('dotenv-webpack');

plugins: [
  new Dotenv()
],

// なんか言われたら
node: {
  fs: 'empty'
}