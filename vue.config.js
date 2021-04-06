
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // target: process.env.VUE_APP_API_URL1,
                target: 'http://localhost:8088',
                // target: 'http://www.doubiekan.net',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
