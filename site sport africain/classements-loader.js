// Script universel pour charger dynamiquement les classements
// Détecte automatiquement la discipline depuis l'URL ou le titre de la page

document.addEventListener('DOMContentLoaded', function() {
    // Détecter la discipline depuis l'URL
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
    
    // Si aucune discipline détectée, ne rien faire
    if (!discipline || !classementsData[discipline]) {
        return;
    }
    
    const data = classementsData[discipline];
    
    // Fonction pour générer les cartes de classement
    function generateRankingCards(athletes, containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;
        
        const grid = container.querySelector('.ranking-grid');
        if (!grid) return;
        
        grid.innerHTML = athletes.map(athlete => {
            const podiumClass = athlete.rang === 1 ? 'podium-1' : athlete.rang === 2 ? 'podium-2' : athlete.rang === 3 ? 'podium-3' : '';
            
            return `
                <div class="ranking-card ${podiumClass}">
                    <div class="ranking-image">
                        <div class="ranking-badge">${athlete.rang}</div>
                        <img src="${athlete.image}" alt="${athlete.nom}">
                        <div class="ranking-info">
                            <h3 class="player-name">${athlete.nom}</h3>
                            <p class="player-country">${athlete.pays}</p>
                            <p class="player-club">${athlete.club}</p>
                            ${athlete.stats && athlete.stats.length > 0 ? `
                                <div class="player-stats">
                                    ${athlete.stats.map(stat => `<span class="stat">${stat}</span>`).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    // Fonction pour générer le tableau de performance (Football)
    function generateFootballPerformanceTable(performances) {
        const tbody = document.querySelector('[data-section="performance"] .stats-table tbody');
        if (!tbody) return;
        
        tbody.innerHTML = performances.map(perf => {
            const badgeClass = perf.rang === 1 ? 'gold' : perf.rang === 2 ? 'silver' : perf.rang === 3 ? 'bronze' : '';
            const rowClass = perf.rang <= 3 ? 'top-performer' : '';
            
            return `
                <tr class="${rowClass}">
                    <td>${badgeClass ? `<span class="rank-badge ${badgeClass}">${perf.rang}</span>` : perf.rang}</td>
                    <td>${perf.rang <= 3 ? `<strong>${perf.joueur}</strong>` : perf.joueur}</td>
                    <td>${perf.pays}</td>
                    <td>${perf.buts}</td>
                    <td>${perf.passes}</td>
                    <td>${perf.matchs}</td>
                </tr>
            `;
        }).join('');
    }
    
    // Fonction pour générer le tableau de performance (Basketball)
    function generateBasketballPerformanceTable(performances) {
        const tbody = document.querySelector('[data-section="performance"] .stats-table tbody');
        if (!tbody) return;
        
        tbody.innerHTML = performances.map(perf => {
            const badgeClass = perf.rang === 1 ? 'gold' : perf.rang === 2 ? 'silver' : perf.rang === 3 ? 'bronze' : '';
            const rowClass = perf.rang <= 3 ? 'top-performer' : '';
            
            return `
                <tr class="${rowClass}">
                    <td>${badgeClass ? `<span class="rank-badge ${badgeClass}">${perf.rang}</span>` : perf.rang}</td>
                    <td>${perf.rang <= 3 ? `<strong>${perf.joueur}</strong>` : perf.joueur}</td>
                    <td>${perf.equipe}</td>
                    <td>${perf.points}</td>
                    <td>${perf.rebonds}</td>
                    <td>${perf.passes}</td>
                </tr>
            `;
        }).join('');
    }
    
    // Fonction pour générer le tableau de performance (Athlétisme)
    function generateAthletismePerformanceTable(performances) {
        const tbody = document.querySelector('[data-section="performance"] .stats-table tbody');
        if (!tbody) return;
        
        tbody.innerHTML = performances.map((perf, index) => {
            const rowClass = index < 3 ? 'top-performer' : '';
            
            return `
                <tr class="${rowClass}">
                    <td>${index < 3 ? `<strong>${perf.discipline}</strong>` : perf.discipline}</td>
                    <td>${perf.athlete}</td>
                    <td>${perf.pays}</td>
                    <td>${index < 3 ? `<span class="rank-badge gold">${perf.performance}</span>` : perf.performance}</td>
                    <td>${perf.annee}</td>
                </tr>
            `;
        }).join('');
    }
    
    // Fonction pour générer le tableau de performance (Lutte)
    function generateLuttePerformanceTable(performances) {
        const tbody = document.querySelector('[data-section="performance"] .stats-table tbody');
        if (!tbody) return;
        
        tbody.innerHTML = performances.map(perf => {
            const badgeClass = perf.rang === 1 ? 'gold' : perf.rang === 2 ? 'silver' : perf.rang === 3 ? 'bronze' : '';
            const rowClass = perf.rang <= 3 ? 'top-performer' : '';
            
            return `
                <tr class="${rowClass}">
                    <td>${badgeClass ? `<span class="rank-badge ${badgeClass}">${perf.rang}</span>` : perf.rang}</td>
                    <td>${perf.rang <= 3 ? `<strong>${perf.lutteur}</strong>` : perf.lutteur}</td>
                    <td>${perf.ecurie}</td>
                    <td>${perf.victoires}</td>
                    <td>${perf.defaites}</td>
                    <td>${perf.titres}</td>
                </tr>
            `;
        }).join('');
    }
    
    // Charger les données selon la discipline
    if (data.hommes) {
        generateRankingCards(data.hommes, '[data-section="hommes"]');
    }
    
    if (data.femmes) {
        generateRankingCards(data.femmes, '[data-section="femmes"]');
    }
    
    if (data.performance) {
        switch(discipline) {
            case 'football':
                generateFootballPerformanceTable(data.performance);
                break;
            case 'basketball':
                generateBasketballPerformanceTable(data.performance);
                break;
            case 'athletisme':
                generateAthletismePerformanceTable(data.performance);
                break;
            case 'lutte':
                generateLuttePerformanceTable(data.performance);
                break;
        }
    }
    
    console.log(`✅ Classement ${discipline} chargé dynamiquement`);
});
