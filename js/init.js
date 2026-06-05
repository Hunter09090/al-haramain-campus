/**
 * Application Initialization
 * Handles splash screen, DOMContentLoaded events
 */

// Remove splash screen after 2 seconds
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

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Additional initialization code can be added here
    console.log('Al-Haramain Digital Campus Loaded');
});