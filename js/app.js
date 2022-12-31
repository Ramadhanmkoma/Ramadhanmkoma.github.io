// implementing service worker
// checking if the browser support service workers
if ('serviceWorker' in navigator ) {

    // get the sw file and register it as a service worker
    navigator.serviceWorker.register('sw.js')
    .then((reg) => console.log('service worker registered', reg))
    .catch((err) => console.log('service worker not registered', err))
    // that is a promise syntax, a way to deal with asynchronous task
}