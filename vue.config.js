module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/meeting-room-reservation/' : '/',
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Adjust the target to your backend API
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};