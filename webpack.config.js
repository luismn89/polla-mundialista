var path = require('path')
var webpack = require('webpack')

const BUILD_PATH = ({
  'prod': '../src/static/polla/',
  'local': './dist'
})[process.env.PUBLIC_PATH_ENV || 'prod'];

module.exports = {
  entry: './src/front/init.js',
  output: {
    path: path.resolve(__dirname, BUILD_PATH),
    publicPath: '/mundial/polla/dist/polla/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          },
          template: {
            doctype: 'html',
            basedir: path.join(__dirname, './src/static')
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    proxy: {
      "/mundial/polla/api/v1": "https://elbocon.pe/mundial/",
      "/mundial/polla/dist/polla" : {
        target: 'http://localhost:8080/dist',
        pathRewrite: { '^/mundial/polla/dist/polla': '' }
      }
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
