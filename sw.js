// installing service worker
self.addEventListener('install', (event) => {
    console.log('service worker successfully installed');
});

// active service worker
self.addEventListener('activate', evt => {
    console.log('Service worker activated');
});

// fetch event
// getting something from a server
self.addEventListener('fetch', event => {
    console.log('fetch event');
});