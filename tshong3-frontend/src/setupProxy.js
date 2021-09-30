const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "https://tshong3-osamhack2021-notice-wqwgrjvjfjw6-8080.githubpreview.dev",
            changeOrigin: true,
        })
    )
}