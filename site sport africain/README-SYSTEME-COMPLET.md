# 🏆 Sport Africain - Système Complet

## Vue d'ensemble

Sport Africain est une plateforme web complète dédiée au sport africain, avec un système de gestion de contenu (CMS) intégré. Le projet comprend :

- **Frontend** : Site web public avec articles, profils d'athlètes, classements
- **Backend** : API REST avec Node.js, Express et MongoDB
- **Admin** : Interface d'administration sécurisée pour gérer le contenu

## Architecture

```
sport-africain/
├── backend/                    # API Backend
│   ├── models/                # Modèles MongoDB
│   │   ├── Admin.js          # Modèle administrateur
│   │   ├── Article.js        # Modèle article
│   │   └── Athlete.js        # Modèle athlète
│   ├── routes/               # Routes API
│   │   ├── auth.js          # Authentification
│   │   ├── articles.js      # CRUD articles
│   │   └── athletes.js      # CRUD athlètes
│   ├── middleware/          # Middlewares
│   │   └── auth.js         # JWT & isAdmin
│   ├── server.js           # Point d'entrée
│   ├── migrate-data.js     # Script de migration
│   ├── package.json        # Dépendances
│   ├── .env               # Variables d'environnement
│   └── DEMARRAGE.md       # Guide de démarrage
│
├── Frontend Public/
│   ├── index.html          # Page d'accueil
│   ├── actualites.html     # Liste des actualités
│   ├── article.html        # Page article dynamique
│   ├── profil.html         # Page profil dynamique
│   ├── about.html          # À propos
│   ├── abonnement.html     # Page d'abonnement
│   └── classement-*.html   # Pages de classements
│
├── Admin/
│   ├── admin-login.html         # Connexion admin
│   ├── admin-dashboard.html     # Tableau de bord
│   ├── admin-articles.html      # Gestion articles
│   ├── admin-create-article.html # Création article
│   └── admin-profiles.html      # Gestion profils
│
├── API Clients/
│   ├── api-client.js       # Client API public
│   └── auth-helper.js      # Helper authentification
│
└── Data/
    ├── articles-data.js    # Données articles (legacy)
    └── athletes-data.js    # Données athlètes (legacy)
```

## Technologies utilisées

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **MongoDB** - Base de données NoSQL
- **Mongoose** - ODM pour MongoDB
- **JWT** - Authentification par token
- **bcryptjs** - Hashage des mots de passe
- **dotenv** - Variables d'environnement
- **CORS** - Cross-Origin Resource Sharing

### Frontend
- **HTML5** - Structure
- **CSS3** - Styles (design Figma)
- **JavaScript** - Logique client
- **Fetch API** - Requêtes HTTP

## Fonctionnalités

### Site Public
✅ Page d'accueil avec hero moderne
✅ Actualités par discipline (Football, Basketball, Athlétisme, Lutte)
✅ Système d'articles dynamique avec contenu riche
✅ Profils d'athlètes détaillés (9 athlètes)
✅ Classements par discipline
✅ Page À propos
✅ Système d'abonnement
✅ Design responsive et moderne

### Interface Admin
✅ Connexion sécurisée avec JWT
✅ Dashboard avec statistiques
✅ Gestion des articles (liste, création, suppression)
✅ Gestion des profils d'athlètes
✅ Protection des routes avec authentification
✅ Session avec expiration (2h)

### API Backend
✅ Authentification JWT sécurisée
✅ CRUD complet pour articles
✅ CRUD complet pour athlètes
✅ Middleware d'authentification
✅ Middleware isAdmin pour les droits
✅ Routes publiques et protégées
✅ Hashage bcrypt (salt rounds = 12)
✅ Variables d'environnement sécurisées

## Sécurité

### Authentification
- Mots de passe hashés avec bcrypt (12 salt rounds)
- JWT avec expiration 2 heures
- Token stocké dans localStorage côté client
- Vérification du token à chaque requête sensible

### Autorisation
- Middleware `auth` : vérifie le token JWT
- Middleware `isAdmin` : vérifie les droits administrateur
- Routes publiques : GET articles et athlètes
- Routes protégées : POST, PUT, DELETE (admin uniquement)

### Variables d'environnement
- JWT_SECRET dans .env (ne jamais commit)
- MONGODB_URI configurable
- .gitignore configuré pour exclure .env

## Installation et démarrage

### Prérequis
- Node.js v14+
- MongoDB installé
- npm ou yarn

### Étape 1 : Installer MongoDB

**Windows :**
Téléchargez depuis https://www.mongodb.com/try/download/community

**macOS :**
```bash
brew install mongodb-community
```

**Linux :**
```bash
sudo apt-get install mongodb
```

### Étape 2 : Démarrer MongoDB

```bash
mongod
```

### Étape 3 : Installer les dépendances backend

```bash
cd backend
npm install
```

### Étape 4 : Créer le premier admin

```bash
curl -X POST http://localhost:3000/api/auth/create-admin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@sportafricain.com",
    "password": "admin123",
    "name": "Administrateur"
  }'
```

### Étape 5 : Importer les données (optionnel)

```bash
npm run migrate
```

### Étape 6 : Démarrer le serveur

```bash
npm run dev
```

Le serveur démarre sur `http://localhost:3000`

### Étape 7 : Ouvrir le site

Ouvrez `index.html` dans votre navigateur ou utilisez un serveur local :

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx http-server
```

### Étape 8 : Se connecter à l'admin

1. Ouvrez `admin-login.html`
2. Utilisez les identifiants :
   - Email : `admin@sportafricain.com`
   - Mot de passe : `admin123`

## API Endpoints

### Authentification

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| POST | `/api/auth/login` | Connexion admin | Non |
| POST | `/api/auth/create-admin` | Créer un admin | Non |
| GET | `/api/auth/verify` | Vérifier le token | Oui |

### Articles

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| GET | `/api/articles` | Liste des articles | Non |
| GET | `/api/articles/:id` | Détails d'un article | Non |
| POST | `/api/articles` | Créer un article | Admin |
| PUT | `/api/articles/:id` | Modifier un article | Admin |
| DELETE | `/api/articles/:id` | Supprimer un article | Admin |

### Athlètes

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| GET | `/api/athletes` | Liste des athlètes | Non |
| GET | `/api/athletes/:id` | Détails d'un athlète | Non |
| POST | `/api/athletes` | Créer un athlète | Admin |
| PUT | `/api/athletes/:id` | Modifier un athlète | Admin |
| DELETE | `/api/athletes/:id` | Supprimer un athlète | Admin |

## Utilisation de l'API

### Exemple : Créer un article

```javascript
// 1. Se connecter
const response = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        email: 'admin@sportafricain.com',
        password: 'admin123'
    })
});
const { token } = await response.json();

// 2. Créer un article
const article = await fetch('http://localhost:3000/api/articles', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
        title: "Nouveau titre",
        category: "football",
        image: "https://example.com/image.jpg",
        author: "Auteur",
        content: "Contenu de l'article..."
    })
});
```

### Exemple : Récupérer les articles

```javascript
const articles = await fetch('http://localhost:3000/api/articles');
const data = await articles.json();
console.log(data);
```

## Modèles de données

### Article
```javascript
{
    title: String,        // Titre de l'article
    category: String,     // football, basketball, athletisme, lutte
    image: String,        // URL de l'image
    author: String,       // Nom de l'auteur
    content: String,      // Contenu HTML
    date: Date,          // Date de publication
    views: Number        // Nombre de vues
}
```

### Athlete
```javascript
{
    name: String,         // Nom complet
    discipline: String,   // football, basketball, athletisme, lutte
    country: String,      // Pays
    position: String,     // Poste/Position
    club: String,        // Club actuel
    age: Number,         // Âge
    image: String,       // URL de l'image
    bio: String,         // Biographie
    stats: Object,       // Statistiques
    achievements: [String] // Palmarès
}
```

### Admin
```javascript
{
    email: String,        // Email unique
    password: String,     // Hash bcrypt
    name: String,        // Nom
    role: String,        // "admin"
    createdAt: Date      // Date de création
}
```

## Prochaines étapes

### Fonctionnalités à ajouter
- [ ] Modification d'articles depuis l'admin
- [ ] Modification de profils d'athlètes
- [ ] Upload d'images (Cloudinary ou AWS S3)
- [ ] Pagination des articles
- [ ] Recherche d'articles
- [ ] Filtres avancés
- [ ] Commentaires sur les articles
- [ ] Système de likes
- [ ] Newsletter
- [ ] Statistiques avancées dans le dashboard

### Améliorations techniques
- [ ] Tests unitaires (Jest)
- [ ] Tests d'intégration
- [ ] Documentation API (Swagger)
- [ ] Rate limiting
- [ ] Logs structurés
- [ ] Monitoring (PM2)
- [ ] Déploiement (Heroku, Vercel, AWS)
- [ ] CI/CD (GitHub Actions)

## Dépannage

### MongoDB ne démarre pas
```bash
# Vérifier l'installation
mongod --version

# Démarrer manuellement
mongod --dbpath /path/to/data
```

### Port 3000 déjà utilisé
Changez le port dans `backend/.env` :
```
PORT=3001
```

### Erreur CORS
Vérifiez que le backend autorise votre origine dans `server.js` :
```javascript
app.use(cors({
    origin: 'http://localhost:8000'
}));
```

### Token expiré
Le token JWT expire après 2 heures. Reconnectez-vous depuis `admin-login.html`.

## Documentation

- `backend/README.md` - Documentation backend complète
- `backend/AUTHENTICATION.md` - Détails sur l'authentification
- `backend/DEMARRAGE.md` - Guide de démarrage rapide

## Support

Pour toute question ou problème :
1. Consultez la documentation
2. Vérifiez les logs du serveur
3. Vérifiez la console du navigateur

## Licence

Ce projet est sous licence MIT.

---

**Développé avec ❤️ pour le sport africain**
