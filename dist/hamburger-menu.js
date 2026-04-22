/**
 * Hamburger Menu Manager
 * Gère l'ouverture/fermeture du menu mobile
 */

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu-link');
    const dropdownBtnsMobile = document.querySelectorAll('.dropdown-btn-mobile');
    
    // Toggle hamburger menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('show');
        });
    }
    
    // Close menu when clicking on a link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Handle dropdown menus in mobile
    dropdownBtnsMobile.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent && dropdownContent.classList.contains('dropdown-content-mobile')) {
                dropdownContent.classList.toggle('show');
                // Rotate arrow
                const arrow = this.querySelector('.arrow');
                if (arrow) {
                    arrow.style.transform = dropdownContent.classList.contains('show') 
                        ? 'rotate(180deg)' 
                        : 'rotate(0deg)';
                }
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar-container') && 
            !event.target.closest('.mobile-menu')) {
            closeMenu();
        }
    });
    
    // Close menu on window resize (tablet -> desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
    
    // Function to close menu
    function closeMenu() {
        if (hamburger && mobileMenu) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('show');
        }
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
