var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var package = require('../package.json')
var outputPath = '../static/dll'

module.exports = {
  output: {
    path: path.join(__dirname, outputPath),
    filename: 'dll.[name]_[hash:6].js',
    library: '[name]_[hash:6]', // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  },
  entry: {
  	//直接引用package里面的
    lib: Object.keys(package.dependencies),
    //也可以手动配置
    lib:[
	    'jquery',
	    'vue',
	    'vue-router',
	    'swiper'
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, outputPath, '[name]-manifest.json'), // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
      name: '[name]_[hash:6]',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与参数output.library保持一致
      context: __dirname, // 指定一个路径作为上下文环境，需要与DllReferencePlugin的context参数保持一致，建议统一设置为项目根目录
    }),
    new ExtractTextPlugin('[name].css'),
    /*全局库绑定不在此处配置
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),*/
  ],
  
};