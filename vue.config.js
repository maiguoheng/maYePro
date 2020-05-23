const path = require('path');
const merge = require('webpack-merge')


module.exports = merge({
    // publicPath: '/test-route/',

    devServer: {
        disableHostCheck: true,
        // host: 'localhost',
        // port: 8081,
        proxy: {
            '^/api': {
                target: 'abc.com',
                ws: true,
                changeOrigin: true
            }
        }
    }
})
