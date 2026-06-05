/**
 * Application Initialization
 */

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.style.opacity = '0';
            splash.style.visibility = 'hidden';
            document.body.style.overflow = 'auto';
        }
    }, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Al-Haramain Digital Campus Loaded');
});