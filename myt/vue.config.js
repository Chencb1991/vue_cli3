
 // if(process.env.NODE_ENV==='production'){  // 生产环境
 //    target = 'http://47.98.155.157:8888/portal_app';
 //    };

module.exports = {
   baseUrl: process.env.NODE_ENV === "production" ? "/portal_app/channel/channel_1" : "/",
   //baseUrl: process.env.NODE_ENV === "production" ? "/portal_app/" : "/",
   //baseUrl: process.env.NODE_ENV === "production" ? "/app/" : "/",
   // outputDir: "/portal_app/channel/channel_1",
    //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    //assetsDir: "./",
    //指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
    //indexPath: "index.html",
    //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
    // filenameHashing: false,
    //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
 
  chainWebpack: config => {
    config.module
      .rule('images')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 1000240 }))
  },

  devServer: {
    // host: "http://47.98.155.157",
    //port: 8888,
    proxy: {
       '/api': {
                //target: 'http://192.168.0.222:8888/portal_app',
                target: 'http://datainterface.eastmoney.com/EM_DataCenter/JS.aspx',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                 
                }
            },
      '/comment': {
          //target: 'http://192.168.0.222:8888/portal_app',
          target: 'http://47.98.155.157:6666/portal_app_common',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/comment': ''
          }
      }
    }
  }
}