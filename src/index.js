if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js', {
      scope: '/'
    }).then(registration => {
      console.log('SW registered: ', registration);
    }).catch(error => {
      console.log('SW registration failed: ', error);
    });
  });
} 