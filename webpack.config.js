module.exports = {
  // ... other config
  devServer: {
    https: true, // Enable HTTPS in development
    host: '0.0.0.0', // Allow external access
    historyApiFallback: true, // Handle SPA routing
  }
} 