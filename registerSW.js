if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/admin_frontend/sw.js', { scope: '/admin_frontend/' })})}