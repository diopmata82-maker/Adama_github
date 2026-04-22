// Script universel pour améliorer la navigation sur TOUTES les pages du site

document.addEventListener('DOMContentLoaded', function() {
    // Ajouter le bouton retour flottant
    addFloatingBackButton();
    
    // Gérer l'affichage du bouton flottant au scroll
    handleFloatingButtonVisibility();
    
    // Initialiser la navigation selon le type de page
    initUniversalNavigation();
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

// Détecter le type de page et générer le breadcrumb approprié
function detectPageType() {
    const url = window.location.pathname;
    const filename = url.substring(url.lastIndexOf('/') + 1);
    
    // Classements
    if (filename.includes('classement-football')) {
        return { type: 'classement', section: 'Classements', page: 'Football' };
    } else if (filename.includes('classement-basketball')) {
        return { type: 'classement', section: 'Classements', page: 'Basketball' };
    } else if (filename.includes('classement-athletisme')) {
        return { type: 'classement', section: 'Classements', page: 'Athlétisme' };
    } else if (filename.includes('classement-lutte')) {
        return { type: 'classement', section: 'Classements', page: 'Lutte' };
    } else if (filename.includes('classements')) {
        return { type: 'classement', section: 'Classements', page: null };
    }
    
    // Actualités
    else if (filename.includes('actualites-football')) {
        return { type: 'actualites', section: 'Actualités', page: 'Football' };
    } else if (filename.includes('actualites-basketball')) {
        return { type: 'actualites', section: 'Actualités', page: 'Basketball' };
    } else if (filename.includes('actualites-athletisme')) {
        return { type: 'actualites', section: 'Actualités', page: 'Athlétisme' };
    } else if (filename.includes('actualites-lutte')) {
        return { type: 'actualites', section: 'Actualités', page: 'Lutte' };
    } else if (filename.includes('actualites')) {
        return { type: 'actualites', section: 'Actualités', page: null };
    }
    
    // Article individuel
    else if (filename.includes('article')) {
        return { type: 'article', section: 'Actualités', page: 'Article' };
    }
    
    // Podcasts
    else if (filename.includes('podcast')) {
        return { type: 'podcast', section: 'Podcasts', page: null };
    }
    
    // Interviews
    else if (filename.includes('interview')) {
        return { type: 'interview', section: 'Interviews', page: null };
    }
    
    // Contact
    else if (filename.includes('contact')) {
        return { type: 'contact', section: 'Contact', page: null };
    }
    
    // À propos
    else if (filename.includes('about')) {
        return { type: 'about', section: 'À propos', page: null };
    }
    
    // Abonnement
    else if (filename.includes('abonnement')) {
        return { type: 'abonnement', section: 'Abonnement', page: null };
    }
    
    // Profil
    else if (filename.includes('profil')) {
        return { type: 'profil', section: 'Profil', page: null };
    }
    
    return null;
}

// Générer le breadcrumb selon le type de page
function generateBreadcrumb(pageInfo) {
    if (!pageInfo) return '';
    
    let breadcrumbHTML = `
        <nav class="breadcrumb" aria-label="Fil d'Ariane">
            <div class="breadcrumb-container">
                <a href="index.html" class="breadcrumb-link">Accueil</a>
    `;
    
    // Pour les pages de classement avec discipline, afficher seulement la discipline
    if (pageInfo.type === 'classement' && pageInfo.page) {
        breadcrumbHTML += `
                <span class="breadcrumb-separator">›</span>
                <span class="breadcrumb-current">${pageInfo.page}</span>
        `;
    }
    // Pour les autres pages
    else {
        // Ajouter la section
        if (pageInfo.section) {
            breadcrumbHTML += `
                <span class="breadcrumb-separator">›</span>
        `;
            
            // Si c'est une page avec sous-section, ajouter un lien vers la page principale
            if (pageInfo.page) {
                let sectionLink = '';
                if (pageInfo.type === 'actualites') {
                    sectionLink = 'actualites.html';
                }
                
                if (sectionLink) {
                    breadcrumbHTML += `<a href="${sectionLink}" class="breadcrumb-link">${pageInfo.section}</a>`;
                } else {
                    breadcrumbHTML += `<span class="breadcrumb-current">${pageInfo.section}</span>`;
                }
            } else {
                breadcrumbHTML += `<span class="breadcrumb-current">${pageInfo.section}</span>`;
            }
        }
        
        // Ajouter la page spécifique
        if (pageInfo.page) {
            breadcrumbHTML += `
                <span class="breadcrumb-separator">›</span>
                <span class="breadcrumb-current">${pageInfo.page}</span>
        `;
        }
    }
    
    breadcrumbHTML += `
            </div>
        </nav>
    `;
    
    return breadcrumbHTML;
}

// Générer le bouton retour
function generateBackButton() {
    return `
        <div class="page-navigation">
            <a href="index.html" class="back-to-home" aria-label="Retour à l'accueil" title="Retour à l'accueil">←</a>
        </div>
    `;
}

// Initialiser la navigation universelle
function initUniversalNavigation() {
    const pageInfo = detectPageType();
    
    // Ne pas ajouter sur la page d'accueil
    if (window.location.pathname.includes('index.html') || 
        window.location.pathname === '/' ||
        window.location.pathname.endsWith('/')) {
        return;
    }
    
    if (pageInfo) {
        // Ajouter le breadcrumb après la navbar
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.insertAdjacentHTML('afterend', generateBreadcrumb(pageInfo));
        }
        
        // Ajouter le bouton retour avant le contenu principal
        const mainContent = document.querySelector('.classement-page, .actualites-page, .article-page, .podcast-page, .interview-page, .contact-page, .about-page, main, .container');
        if (mainContent) {
            mainContent.insertAdjacentHTML('afterbegin', generateBackButton());
        }
    }
}

// Export pour utilisation dans d'autres scripts si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        detectPageType,
        generateBreadcrumb,
        generateBackButton
    };
}
