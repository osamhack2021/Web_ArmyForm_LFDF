const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/', {
          target: 'https://tshong3-osamhack2021-web-armyform-lfdf-9gpj7464h7wg6-3001.githubpreview.dev/',
          changeOrigin: true
      })
  )
};
