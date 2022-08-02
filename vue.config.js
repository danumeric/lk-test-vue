// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'MyApp title';
        args[0].meta = { viewport: 'width=device-width,initial-scale=1,user-scalable=no' };

        return args;
      })
  }
}

// defineConfig({
//   transpileDependencies: true
// })
