/**
 * Navigation Menu Toggle
 */

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('#mobileMenu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('mobileMenu').classList.add('hidden');
        });
    });
});