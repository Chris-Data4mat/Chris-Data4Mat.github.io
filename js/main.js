window.onload = () => {
    if ('serviceWorker' in navigator) {
        console.log('main.js');
        navigator.serviceWorker
            .register('/serviceWorker.js');
    }
}