const path = require('path');
const merge = require('webpack-merge')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = merge({
    // publicPath: '/test-route/',
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
    },
    devServer: {
        disableHostCheck: true,
        // host: 'localhost',
        // port: 8081,
        proxy: {
            '^/api': {
                target: 'abccc2222c.com',
                ws: true,
                changeOrigin: true
            }
        }
    }
})
