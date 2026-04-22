// ========================================
// SCRIPT DROPDOWN MENU OPTIMISÉ
// ========================================

// Fonction pour ouvrir/fermer un menu spécifique
function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    if (menu) {
        // Fermer tous les autres menus avant d'ouvrir celui-ci
        const allDropdowns = document.querySelectorAll('.dropdown-content.show');
        allDropdowns.forEach(dropdown => {
            if (dropdown.id !== menuId) {
                dropdown.classList.remove('show');
            }
        });
        
        // Toggle le menu actuel
        menu.classList.toggle('show');
    }
}

// Fermer les dropdowns quand on clique en dehors
window.addEventListener('click', function(event) {
    // Vérifier si le clic est à l'intérieur d'un dropdown
    const clickedInsideDropdown = event.target.closest('.dropdown');
    
    // Si le clic est en dehors de tous les dropdowns
    if (!clickedInsideDropdown) {
        const dropdowns = document.querySelectorAll('.dropdown-content.show');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    }
});

// Alternative: Fermer en cliquant sur un lien du dropdown
document.addEventListener('DOMContentLoaded', function() {
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Fermer le dropdown parent après le clic
            const dropdown = this.closest('.dropdown-content');
            if (dropdown) {
                dropdown.classList.remove('show');
            }
        });
    });
});
