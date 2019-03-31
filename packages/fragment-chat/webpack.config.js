// var webpack = require('webpack')

// module.exports = {
//   entry: './app/index.js',
//   output: {
//     path: __dirname + '/public',
//     publicPath: 'http://localhost:8081/public/',
//     filename: 'bundle.js',
//     libraryTarget: 'amd'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader'
//       },
//       {
//         test: /\.scss$/,
//         loader: 'style-loader!css-loader!sass-loader'
//       }
//     ]
//   },
//   externals: {
//     'react': 'react',
//     'react-dom': 'react-dom',
//     'prop-types': 'prop-types',
//     'classnames': 'classnames'
//   }
// }

const path = require('path');

module.exports = {
  entry: './app/index.tsx',
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: __dirname + '/public',
    publicPath: 'http://localhost:8081/public/',
    filename: 'bundle.js',
    libraryTarget: 'amd'
  }
};