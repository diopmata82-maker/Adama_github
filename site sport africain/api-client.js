// Client API pour Sport Africain
// Connexion entre le frontend et le backend

const API_URL = 'http://localhost:3000/api';

// ========================================
// ARTICLES API
// ========================================

const ArticlesAPI = {
    // Récupérer tous les articles
    getAll: async (category = null, limit = null) => {
        try {
            let url = `${API_URL}/articles`;
            const params = new URLSearchParams();
            
            if (category && category !== 'tous') {
                params.append('category', category);
            }
            if (limit) {
                params.append('limit', limit);
            }
            
            if (params.toString()) {
                url += `?${params.toString()}`;
            }
            
            const response = await fetch(url);
            if (!response.ok) throw new Error('Erreur lors de la récupération des articles');
            return await response.json();
        } catch (error) {
            console.error('Erreur ArticlesAPI.getAll:', error);
            return [];
        }
    },

    // Récupérer un article par ID
    getById: async (id) => {
        try {
            const response = await fetch(`${API_URL}/articles/${id}`);
            if (!response.ok) throw new Error('Article non trouvé');
            return await response.json();
        } catch (error) {
            console.error('Erreur ArticlesAPI.getById:', error);
            return null;
        }
    },

    // Créer un nouvel article
    create: async (articleData) => {
        try {
            const response = await fetch(`${API_URL}/articles`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(articleData)
            });
            if (!response.ok) throw new Error('Erreur lors de la création de l\'article');
            return await response.json();
        } catch (error) {
            console.error('Erreur ArticlesAPI.create:', error);
            throw error;
        }
    },

    // Mettre à jour un article
    update: async (id, articleData) => {
        try {
            const response = await fetch(`${API_URL}/articles/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(articleData)
            });
            if (!response.ok) throw new Error('Erreur lors de la mise à jour de l\'article');
            return await response.json();
        } catch (error) {
            console.error('Erreur ArticlesAPI.update:', error);
            throw error;
        }
    },

    // Supprimer un article
    delete: async (id) => {
        try {
            const response = await fetch(`${API_URL}/articles/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Erreur lors de la suppression de l\'article');
            return await response.json();
        } catch (error) {
            console.error('Erreur ArticlesAPI.delete:', error);
            throw error;
        }
    }
};

// ========================================
// ATHLETES API
// ========================================

const AthletesAPI = {
    // Récupérer tous les athlètes
    getAll: async (discipline = null) => {
        try {
            let url = `${API_URL}/athletes`;
            
            if (discipline) {
                url += `?discipline=${discipline}`;
            }
            
            const response = await fetch(url);
            if (!response.ok) throw new Error('Erreur lors de la récupération des athlètes');
            return await response.json();
        } catch (error) {
            console.error('Erreur AthletesAPI.getAll:', error);
            return [];
        }
    },

    // Récupérer un athlète par ID
    getById: async (id) => {
        try {
            const response = await fetch(`${API_URL}/athletes/${id}`);
            if (!response.ok) throw new Error('Athlète non trouvé');
            return await response.json();
        } catch (error) {
            console.error('Erreur AthletesAPI.getById:', error);
            return null;
        }
    },

    // Créer un nouvel athlète
    create: async (athleteData) => {
        try {
            const response = await fetch(`${API_URL}/athletes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(athleteData)
            });
            if (!response.ok) throw new Error('Erreur lors de la création de l\'athlète');
            return await response.json();
        } catch (error) {
            console.error('Erreur AthletesAPI.create:', error);
            throw error;
        }
    },

    // Mettre à jour un athlète
    update: async (id, athleteData) => {
        try {
            const response = await fetch(`${API_URL}/athletes/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(athleteData)
            });
            if (!response.ok) throw new Error('Erreur lors de la mise à jour de l\'athlète');
            return await response.json();
        } catch (error) {
            console.error('Erreur AthletesAPI.update:', error);
            throw error;
        }
    },

    // Supprimer un athlète
    delete: async (id) => {
        try {
            const response = await fetch(`${API_URL}/athletes/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Erreur lors de la suppression de l\'athlète');
            return await response.json();
        } catch (error) {
            console.error('Erreur AthletesAPI.delete:', error);
            throw error;
        }
    }
};

// ========================================
// EXEMPLES D'UTILISATION
// ========================================

/*
// Récupérer tous les articles
const articles = await ArticlesAPI.getAll();

// Récupérer les articles de football
const footballArticles = await ArticlesAPI.getAll('football', 10);

// Récupérer un article spécifique
const article = await ArticlesAPI.getById('article-id');

// Créer un article
const newArticle = await ArticlesAPI.create({
    title: "Nouveau titre",
    sport: "Football",
    category: "football",
    discipline: "football",
    image: "https://example.com/image.jpg",
    author: "Auteur",
    content: "Contenu..."
});

// Mettre à jour un article
const updatedArticle = await ArticlesAPI.update('article-id', {
    title: "Titre modifié"
});

// Supprimer un article
await ArticlesAPI.delete('article-id');

// Récupérer tous les athlètes
const athletes = await AthletesAPI.getAll();

// Récupérer les athlètes de football
const footballAthletes = await AthletesAPI.getAll('football');

// Récupérer un athlète spécifique
const athlete = await AthletesAPI.getById('athlete-id');
*/
