const path = require('path')
const webpack = require('webpack')
const buildDate = JSON.stringify(new Date().toLocaleString())

function resolve (dir) {
  return path.join(__dirname, dir)
}

const isProd = process.env.NODE_ENV === 'production'

/*
 // 引入CDN
 // 生产环境引入CDN， 开发环境不引入；
 // 目的减少打包资源
**/
const assetsCDN = {
  // webpack build externals
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios'
  },
  css: [],
  // https://unpkg.com/browse/vue@2.6.10/
  js: [
    // 'htpps://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
	'https://cdn.jsdelivr.net/npm/vue@2.6.11',
    '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js'
  ]
}

// vue.config.js
const vueConfig = {
  publicPath: isProd ? './' : '/' ,
  outputDir: 'testdist',
  assetsDir: 'static',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
	
	// 打包分析
	config
		.plugin('webpack-bundle-analyzer')
		.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
	// if prod is on
	// assets require on cdn
	if (isProd) {
	  // 生产环境下注入一个变量cdn 变量可以在html中通过htmlWebpackPlugin.options进行获取 
	  config.plugin('html').tap(args => {
	    args[0].cdn = assetsCDN
	    return args
	  })
	}
  },
  configureWebpack: {
    // webpack plugins
    plugins: [],
    // if prod, add externals
    externals: isProd ? assetsCDN.externals : {}
  },
  devServer: {
    // development server port 8000
    port: 8000,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    proxy: {
      '/base': {
        target: 'http://123.26:88/',
        ws: false,
        changeOrigin: true
      }
    }
  },

  // disable source map in production
  productionSourceMap: false,
  lintOnSave: undefined,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: [],
}

module.exports = vueConfig
