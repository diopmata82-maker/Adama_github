// ========================================
// SYSTÈME DYNAMIQUE POUR AFFICHER LES SPORTIFS
// Utilise l'API Wikipedia + Fallback local
// ========================================

// Base de données locale (fallback si API échoue)
const athletesDatabase = {
    "Sadio_Mané": {
        name: "Sadio Mané",
        sport: "Football",
        country: "Sénégal",
        description: "Footballeur sénégalais évoluant au poste d'attaquant. Champion d'Afrique 2022 et Ballon d'Or africain.",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
        achievements: ["Ballon d'Or africain 2022", "Champion d'Afrique 2022", "Vainqueur Ligue des Champions"]
    },
    "Joel_Embiid": {
        name: "Joel Embiid",
        sport: "Basketball",
        country: "Cameroun",
        description: "Pivot camerounais évoluant en NBA pour les Philadelphia 76ers. MVP de la saison 2022-2023.",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
        achievements: ["MVP NBA 2023", "7x All-Star", "Champion olympique 2024"]
    },
    "Ferdinand_Omanyala": {
        name: "Ferdinand Omanyala",
        sport: "Athlétisme",
        country: "Kenya",
        description: "Sprinteur kenyan, détenteur du record d'Afrique du 100 mètres avec un temps de 9.77 secondes.",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
        achievements: ["Record d'Afrique 100m (9.77s)", "Champion d'Afrique", "Champion du Commonwealth"]
    },
    "Eliud_Kipchoge": {
        name: "Eliud Kipchoge",
        sport: "Athlétisme",
        country: "Kenya",
        description: "Marathonien kenyan, double champion olympique et détenteur du record du monde du marathon.",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop",
        achievements: ["2x Champion olympique", "Record du monde marathon (2:01:09)", "Légende vivante"]
    }
};

/**
 * Récupère les informations d'un sportif depuis l'API Wikipedia
 * @param {string} name - Nom du sportif (format: "Sadio_Mané")
 * @returns {Promise<Object>} - Informations du sportif
 */
async function getAthleteFromWikipedia(name) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${name}`;
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        return {
            name: data.title,
            description: data.extract,
            image: data.thumbnail?.source || data.originalimage?.source || "",
            url: data.content_urls?.desktop?.page || "",
            source: "wikipedia"
        };
    } catch (error) {
        console.error(`Erreur lors de la récupération de ${name}:`, error);
        return null;
    }
}

/**
 * Récupère les informations d'un sportif (API + Fallback local)
 * @param {string} name - Nom du sportif
 * @returns {Promise<Object>} - Informations complètes du sportif
 */
async function getAthlete(name) {
    // Normaliser le nom (remplacer espaces par underscores)
    const normalizedName = name.replace(/ /g, '_');
    
    // Essayer d'abord l'API Wikipedia
    const wikiData = await getAthleteFromWikipedia(normalizedName);
    
    if (wikiData && wikiData.description) {
        // Enrichir avec les données locales si disponibles
        const localData = athletesDatabase[normalizedName];
        
        return {
            ...wikiData,
            sport: localData?.sport || "Sport",
            country: localData?.country || "",
            achievements: localData?.achievements || [],
            localImage: localData?.image || ""
        };
    }
    
    // Fallback: utiliser les données locales
    const localData = athletesDatabase[normalizedName];
    
    if (localData) {
        return {
            ...localData,
            source: "local"
        };
    }
    
    // Aucune donnée trouvée
    return {
        name: name,
        description: "Informations non disponibles",
        image: "",
        sport: "Sport",
        country: "",
        source: "none"
    };
}

/**
 * Affiche les informations d'un sportif dans le DOM
 * @param {string} name - Nom du sportif
 * @param {string} containerId - ID du conteneur HTML
 */
async function displayAthlete(name, containerId = 'athlete-info') {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error(`Conteneur #${containerId} non trouvé`);
        return;
    }
    
    // Afficher un loader
    container.innerHTML = '<div class="loading">Chargement...</div>';
    
    // Récupérer les données
    const athlete = await getAthlete(name);
    
    // Afficher les données
    container.innerHTML = `
        <div class="athlete-card">
            ${athlete.image ? `<img src="${athlete.image}" alt="${athlete.name}" class="athlete-image">` : ''}
            ${athlete.localImage ? `<img src="${athlete.localImage}" alt="${athlete.name}" class="athlete-image">` : ''}
            
            <div class="athlete-info">
                <h2 class="athlete-name">${athlete.name}</h2>
                
                ${athlete.sport ? `<p class="athlete-sport">🏆 ${athlete.sport}</p>` : ''}
                ${athlete.country ? `<p class="athlete-country">🌍 ${athlete.country}</p>` : ''}
                
                <p class="athlete-description">${athlete.description}</p>
                
                ${athlete.achievements && athlete.achievements.length > 0 ? `
                    <div class="athlete-achievements">
                        <h3>Palmarès</h3>
                        <ul>
                            ${athlete.achievements.map(achievement => `<li>✅ ${achievement}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${athlete.url ? `<a href="${athlete.url}" target="_blank" class="athlete-link">En savoir plus →</a>` : ''}
                
                <p class="athlete-source">Source: ${athlete.source === 'wikipedia' ? 'Wikipedia' : 'Base locale'}</p>
            </div>
        </div>
    `;
}

/**
 * Récupère plusieurs sportifs en parallèle
 * @param {Array<string>} names - Liste des noms
 * @returns {Promise<Array<Object>>} - Liste des sportifs
 */
async function getMultipleAthletes(names) {
    const promises = names.map(name => getAthlete(name));
    return await Promise.all(promises);
}

/**
 * Affiche une liste de sportifs
 * @param {Array<string>} names - Liste des noms
 * @param {string} containerId - ID du conteneur
 */
async function displayAthletesList(names, containerId = 'athletes-list') {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error(`Conteneur #${containerId} non trouvé`);
        return;
    }
    
    container.innerHTML = '<div class="loading">Chargement...</div>';
    
    const athletes = await getMultipleAthletes(names);
    
    container.innerHTML = athletes.map(athlete => `
        <div class="athlete-card-mini">
            ${athlete.image || athlete.localImage ? `
                <img src="${athlete.image || athlete.localImage}" alt="${athlete.name}" class="athlete-mini-image">
            ` : ''}
            <h3>${athlete.name}</h3>
            <p>${athlete.sport} - ${athlete.country}</p>
        </div>
    `).join('');
}

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getAthlete,
        displayAthlete,
        getMultipleAthletes,
        displayAthletesList,
        athletesDatabase
    };
}
