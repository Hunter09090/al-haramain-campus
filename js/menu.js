/**
 * Navigation Menu Toggle
 * Handles mobile menu open/close
 */

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Close menu when a link is clicked
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('#mobileMenu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('mobileMenu').classList.add('hidden');
        });
    });
});