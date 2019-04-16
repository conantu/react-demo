const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // app.use(
  //   proxy("/api", {
  //     target: 'http://localhost:4000',
  //     changeOrigin: true
  //   })
  // );
  app.use(
    proxy("/api", {
      target: 'http://47.102.210.231:7117',
      changeOrigin: true
    })
  );
  app.use(
    proxy("/app", {
        target: 'http://39.100.34.8',
        changeOrigin: true
    })
  );

};