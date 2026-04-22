// Helper pour l'authentification admin
// Gestion du token JWT et des requêtes authentifiées

const API_URL = 'http://localhost:3000/api';

const AuthHelper = {
    // Connexion admin
    login: async (email, password) => {
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Erreur de connexion');
            }
            
            // Sauvegarder le token
            localStorage.setItem('adminToken', data.token);
            localStorage.setItem('adminData', JSON.stringify(data.admin));
            
            return data;
        } catch (error) {
            console.error('Erreur login:', error);
            throw error;
        }
    },

    // Déconnexion
    logout: () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminData');
        window.location.href = 'admin-login.html';
    },

    // Vérifier si l'admin est connecté
    isAuthenticated: () => {
        return !!localStorage.getItem('adminToken');
    },

    // Récupérer le token
    getToken: () => {
        return localStorage.getItem('adminToken');
    },

    // Récupérer les données admin
    getAdminData: () => {
        const data = localStorage.getItem('adminData');
        return data ? JSON.parse(data) : null;
    },

    // Vérifier le token auprès du serveur
    verifyToken: async () => {
        try {
            const token = AuthHelper.getToken();
            
            if (!token) {
                return false;
            }
            
            const response = await fetch(`${API_URL}/auth/verify`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            const data = await response.json();
            return data.valid;
        } catch (error) {
            console.error('Erreur vérification token:', error);
            return false;
        }
    },

    // Protéger une page (rediriger si non authentifié)
    protectPage: async () => {
        const isValid = await AuthHelper.verifyToken();
        
        if (!isValid) {
            AuthHelper.logout();
        }
    },

    // Faire une requête authentifiée
    authenticatedFetch: async (url, options = {}) => {
        const token = AuthHelper.getToken();
        
        if (!token) {
            throw new Error('Non authentifié');
        }
        
        const headers = {
            ...options.headers,
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        
        try {
            const response = await fetch(url, {
                ...options,
                headers
            });
            
            // Si le token est invalide, déconnecter
            if (response.status === 401) {
                AuthHelper.logout();
                throw new Error('Session expirée');
            }
            
            return response;
        } catch (error) {
            console.error('Erreur requête authentifiée:', error);
            throw error;
        }
    }
};

// API Admin avec authentification
const AdminAPI = {
    // Articles
    createArticle: async (articleData) => {
        const response = await AuthHelper.authenticatedFetch(
            `${API_URL}/articles`,
            {
                method: 'POST',
                body: JSON.stringify(articleData)
            }
        );
        return await response.json();
    },

    updateArticle: async (id, articleData) => {
        const response = await AuthHelper.authenticatedFetch(
            `${API_URL}/articles/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify(articleData)
            }
        );
        return await response.json();
    },

    deleteArticle: async (id) => {
        const response = await AuthHelper.authenticatedFetch(
            `${API_URL}/articles/${id}`,
            {
                method: 'DELETE'
            }
        );
        return await response.json();
    },

    // Athlètes
    createAthlete: async (athleteData) => {
        const response = await AuthHelper.authenticatedFetch(
            `${API_URL}/athletes`,
            {
                method: 'POST',
                body: JSON.stringify(athleteData)
            }
        );
        return await response.json();
    },

    updateAthlete: async (id, athleteData) => {
        const response = await AuthHelper.authenticatedFetch(
            `${API_URL}/athletes/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify(athleteData)
            }
        );
        return await response.json();
    },

    deleteAthlete: async (id) => {
        const response = await AuthHelper.authenticatedFetch(
            `${API_URL}/athletes/${id}`,
            {
                method: 'DELETE'
            }
        );
        return await response.json();
    }
};

// ========================================
// EXEMPLES D'UTILISATION
// ========================================

/*
// 1. Connexion admin
try {
    const result = await AuthHelper.login('admin@sportafricain.com', 'admin123');
    console.log('Connecté:', result);
    // Rediriger vers le dashboard
    window.location.href = 'admin-dashboard.html';
} catch (error) {
    alert('Erreur de connexion: ' + error.message);
}

// 2. Protéger une page admin
await AuthHelper.protectPage();

// 3. Créer un article (authentifié)
try {
    const article = await AdminAPI.createArticle({
        title: "Nouveau titre",
        sport: "Football",
        category: "football",
        discipline: "football",
        image: "https://example.com/image.jpg",
        author: "Auteur",
        content: "Contenu..."
    });
    console.log('Article créé:', article);
} catch (error) {
    alert('Erreur: ' + error.message);
}

// 4. Supprimer un article (authentifié)
try {
    await AdminAPI.deleteArticle('article-id');
    alert('Article supprimé');
} catch (error) {
    alert('Erreur: ' + error.message);
}

// 5. Déconnexion
AuthHelper.logout();
*/
