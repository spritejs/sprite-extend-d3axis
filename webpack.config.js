const path = require('path')
const fs = require('fs')

module.exports = function (env = {}) {
  let babelConf
  const babelRC = env.esnext ? './.es6.babelrc' : './.babelrc'
  if(fs.existsSync(babelRC)) {
    babelConf = JSON.parse(fs.readFileSync(babelRC))
    babelConf.babelrc = false
  }

  const externals = {}
  let filename = 'sprite-extend-d3axis.standalone.js'
  let library = ['spritejs']
  let entry = './src/standalone'

  if(!env.standalone) {
    externals.spritejs = 'spritejs'
    filename = env.esnext ? 'sprite-extend-d3axis.es6.js' : 'sprite-extend-d3axis.js'
    library = ['spritejs', 'Axis']
    entry = './src/entry'
  }

  return {
    mode: env.production ? 'production' : 'none',
    entry,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename,
      publicPath: '/js/',
      library,
      libraryTarget: 'umd',
    },
    // resolve: {
    //   aliasFields: ['wxapp'],
    // },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/(?!(spritejs)).*/,
          use: {
            loader: 'babel-loader',
            options: babelConf,
          },
        },
      ],

      /* Advanced module configuration (click to show) */
    },

    externals,
    // Don't follow/bundle these modules, but request them at runtime from the environment

    stats: 'errors-only',
    // lets you precisely control what bundle information gets displayed

    devServer: {
      contentBase: path.join(__dirname, 'example'),
      compress: true,
      port: 9090,
      // ...
    },

    plugins: [
      // ...
    ],
    // list of additional plugins


    /* Advanced configuration (click to show) */
  }
}