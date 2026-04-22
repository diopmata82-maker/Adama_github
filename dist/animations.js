// ========================================
// ANIMATIONS ET EFFETS VISUELS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // 1. FADE IN AU SCROLL
    // ========================================
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(el => fadeObserver.observe(el));
    
    
    // ========================================
    // 2. AJOUTER CLASSE FADE-IN AUX SECTIONS
    // ========================================
    const sections = document.querySelectorAll('.actualites, .podcasts, .interviews, .profiles-section, .classement-home, .cta');
    sections.forEach(section => {
        section.classList.add('fade-in');
        fadeObserver.observe(section);
    });
    
    
    // ========================================
    // 3. SMOOTH SCROLL POUR LES ANCRES
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    
    // ========================================
    // 4. PARALLAX EFFECT SUR HERO
    // ========================================
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroImage = hero.querySelector('.hero-slide-image');
            if (heroImage) {
                heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
    
    
    // ========================================
    // 5. ANIMATION COMPTEUR POUR LES STATS
    // ========================================
    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statValue = entry.target.querySelector('.profil-stat-value');
                if (statValue && !statValue.dataset.animated) {
                    const value = parseInt(statValue.textContent);
                    if (!isNaN(value)) {
                        statValue.dataset.animated = 'true';
                        animateCounter(statValue, value);
                    }
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.profil-stat-card').forEach(card => {
        statsObserver.observe(card);
    });
    
    
    // ========================================
    // 6. LAZY LOADING IMAGES
    // ========================================
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    
    // ========================================
    // 7. NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Ajouter ombre au scroll
            if (currentScroll > 50) {
                navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
            
            lastScroll = currentScroll;
        });
    }
    
    
    // ========================================
    // 8. ANIMATION CARDS AU HOVER
    // ========================================
    const cards = document.querySelectorAll('.actualite-card, .interview-card, .profile-card, .podcast-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    
    // ========================================
    // 9. TYPING EFFECT POUR HERO TITLE (OPTIONNEL)
    // ========================================
    const typeWriter = (element, text, speed = 100) => {
        let i = 0;
        element.textContent = '';
        
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        
        type();
    };
    
    // Décommenter pour activer l'effet typing sur le hero
    // const heroTitle = document.querySelector('.hero-title');
    // if (heroTitle) {
    //     const originalText = heroTitle.textContent;
    //     typeWriter(heroTitle, originalText, 50);
    // }
    
    
    // ========================================
    // 10. BOUTON SCROLL TO TOP
    // ========================================
    const createScrollTopButton = () => {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.className = 'scroll-to-top';
        button.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #0F783C;
            color: white;
            border: none;
            font-size: 24px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        `;
        
        document.body.appendChild(button);
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            } else {
                button.style.opacity = '0';
                button.style.visibility = 'hidden';
            }
        });
        
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
            button.style.background = '#0a5a2d';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            button.style.background = '#0F783C';
        });
    };
    
    createScrollTopButton();
    
    
    // ========================================
    // 11. ANIMATION PROGRESS BAR AU SCROLL
    // ========================================
    const createProgressBar = () => {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #0F783C, #F4A300);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };
    
    createProgressBar();
    
    
    // ========================================
    // 12. CONSOLE MESSAGE
    // ========================================
    console.log('%c🎨 Animations chargées avec succès!', 'color: #0F783C; font-size: 16px; font-weight: bold;');
    console.log('%c⚡ Site Sport Africain - Version animée', 'color: #F4A300; font-size: 12px;');
});
