
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // target: process.env.VUE_APP_API_URL1,
                target: 'http://www.doubiekan.net',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
