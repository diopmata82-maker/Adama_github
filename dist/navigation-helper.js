// Script pour améliorer la navigation sur les pages de classement

document.addEventListener('DOMContentLoaded', function() {
    // Ajouter le bouton retour flottant
    addFloatingBackButton();
    
    // Gérer l'affichage du bouton flottant au scroll
    handleFloatingButtonVisibility();
});

// Ajouter le bouton retour flottant
function addFloatingBackButton() {
    const floatingButton = document.createElement('a');
    floatingButton.href = '#top';
    floatingButton.className = 'floating-back-button';
    floatingButton.setAttribute('aria-label', 'Retour en haut');
    floatingButton.title = 'Retour en haut';
    
    document.body.appendChild(floatingButton);
    
    // Smooth scroll vers le haut
    floatingButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Gérer la visibilité du bouton flottant
function handleFloatingButtonVisibility() {
    const floatingButton = document.querySelector('.floating-back-button');
    if (!floatingButton) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            floatingButton.classList.add('visible');
        } else {
            floatingButton.classList.remove('visible');
        }
    });
}

// Fonction pour générer le breadcrumb dynamiquement
function generateBreadcrumb(discipline) {
    const disciplineNames = {
        'football': 'Football',
        'basketball': 'Basketball',
        'athletisme': 'Athlétisme',
        'lutte': 'Lutte'
    };
    
    const breadcrumbHTML = `
        <nav class="breadcrumb" aria-label="Fil d'Ariane">
            <div class="breadcrumb-container">
                <a href="index.html" class="breadcrumb-link">Accueil</a>
                <span class="breadcrumb-separator">›</span>
                <a href="classements.html" class="breadcrumb-link">Classements</a>
                <span class="breadcrumb-separator">›</span>
                <span class="breadcrumb-current">${disciplineNames[discipline] || 'Classement'}</span>
            </div>
        </nav>
    `;
    
    return breadcrumbHTML;
}

// Fonction pour ajouter le bouton retour en haut de page
function generateBackButton() {
    const backButtonHTML = `
        <div class="page-navigation">
            <a href="index.html" class="back-to-home">Retour à l'accueil</a>
        </div>
    `;
    
    return backButtonHTML;
}

// Détecter la discipline depuis l'URL et ajouter le breadcrumb
function initPageNavigation() {
    const url = window.location.pathname;
    let discipline = '';
    
    if (url.includes('football')) {
        discipline = 'football';
    } else if (url.includes('basketball')) {
        discipline = 'basketball';
    } else if (url.includes('athletisme')) {
        discipline = 'athletisme';
    } else if (url.includes('lutte')) {
        discipline = 'lutte';
    }
    
    if (discipline) {
        // Ajouter le breadcrumb après la navbar
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.insertAdjacentHTML('afterend', generateBreadcrumb(discipline));
        }
        
        // Ajouter le bouton retour avant la section classement
        const classementPage = document.querySelector('.classement-page');
        if (classementPage) {
            classementPage.insertAdjacentHTML('afterbegin', generateBackButton());
        }
    }
}

// Initialiser la navigation
initPageNavigation();
