module.exports = {
  productionSourceMap: false,
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8080,
    disableHostCheck: true,
    https: false,
    hotOnly: true,
    proxy: null, // string | Object
    before: app => {
      // app is an express instance
    }
  }
}
