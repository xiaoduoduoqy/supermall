// 配置别名
module.exports = {
  configureWebpack: {
    resolve: {
      //alias：别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        // 'router': '@/router',
        // 'store': '@/store',
        'views': '@/views',
      },
      //导入模块省略扩展名
      // extensions: ['.js', '.css', '.vue'],
    }
  }
}
