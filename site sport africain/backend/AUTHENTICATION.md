# 🔐 Authentification Admin - Sport Africain

Guide complet pour l'authentification sécurisée avec JWT et bcrypt.

## 📋 Fonctionnalités

- ✅ Authentification JWT sécurisée
- ✅ Hashage des mots de passe avec bcrypt
- ✅ Protection des routes sensibles
- ✅ Vérification automatique du token
- ✅ Gestion de session côté client

## 🚀 Installation

Les dépendances nécessaires sont déjà dans `package.json` :

```bash
npm install
```

Dépendances :
- `bcryptjs` - Hashage des mots de passe
- `jsonwebtoken` - Génération et vérification des tokens JWT
- `dotenv` - Variables d'environnement

## 🔧 Configuration

1. Créer un fichier `.env` à la racine du dossier `backend/` :

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/sport-africain
JWT_SECRET=votre_secret_key_super_securisee
NODE_ENV=development
```

⚠️ **Important** : Changez `JWT_SECRET` en production !

## 👤 Créer le premier admin

### Méthode 1 : Via l'API

```bash
# Démarrer le serveur
npm run dev

# Dans un autre terminal ou via Postman
curl -X POST http://localhost:3000/api/auth/create-admin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@sportafricain.com",
    "password": "admin123",
    "name": "Administrateur"
  }'
```

### Méthode 2 : Via MongoDB directement

```javascript
// Dans MongoDB Compass ou mongo shell
use sport-africain

db.admins.insertOne({
  email: "admin@sportafricain.com",
  password: "$2a$10$...", // Hash bcrypt
  name: "Administrateur",
  role: "admin",
  createdAt: new Date()
})
```

## 🔑 Endpoints d'authentification

### POST /api/auth/login

Connexion admin et génération du token JWT.

**Request:**
```json
{
  "email": "admin@sportafricain.com",
  "password": "admin123"
}
```

**Response (Success):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "id": "507f1f77bcf86cd799439011",
    "email": "admin@sportafricain.com",
    "name": "Administrateur",
    "role": "admin"
  }
}
```

**Response (Error):**
```json
{
  "message": "Email ou mot de passe incorrect"
}
```

### POST /api/auth/create-admin

Créer un nouveau compte admin.

**Request:**
```json
{
  "email": "nouvel@admin.com",
  "password": "motdepasse123",
  "name": "Nouvel Admin"
}
```

### GET /api/auth/verify

Vérifier la validité d'un token.

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**
```json
{
  "valid": true,
  "admin": {
    "id": "507f1f77bcf86cd799439011",
    "email": "admin@sportafricain.com",
    "name": "Administrateur",
    "role": "admin"
  }
}
```

## 🛡️ Routes protégées

Les routes suivantes nécessitent un token JWT valide :

### Articles
- `POST /api/articles` - Créer un article
- `PUT /api/articles/:id` - Modifier un article
- `DELETE /api/articles/:id` - Supprimer un article

### Athlètes
- `POST /api/athletes` - Créer un athlète
- `PUT /api/athletes/:id` - Modifier un athlète
- `DELETE /api/athletes/:id` - Supprimer un athlète

## 💻 Utilisation Frontend

### 1. Connexion

```javascript
// Charger auth-helper.js dans votre HTML
<script src="auth-helper.js"></script>

// Connexion
try {
    await AuthHelper.login('admin@sportafricain.com', 'admin123');
    window.location.href = 'admin-dashboard.html';
} catch (error) {
    alert('Erreur: ' + error.message);
}
```

### 2. Protéger une page admin

```javascript
// Au début de chaque page admin
await AuthHelper.protectPage();
```

### 3. Faire une requête authentifiée

```javascript
// Créer un article
const article = await AdminAPI.createArticle({
    title: "Nouveau titre",
    sport: "Football",
    category: "football",
    discipline: "football",
    image: "https://example.com/image.jpg",
    author: "Auteur",
    content: "Contenu..."
});

// Supprimer un article
await AdminAPI.deleteArticle('article-id');

// Modifier un article
await AdminAPI.updateArticle('article-id', {
    title: "Titre modifié"
});
```

### 4. Déconnexion

```javascript
AuthHelper.logout();
```

## 🔒 Sécurité

### Bonnes pratiques implémentées :

✅ **Hashage bcrypt** - Les mots de passe ne sont jamais stockés en clair
✅ **JWT avec expiration** - Les tokens expirent après 7 jours
✅ **Middleware d'authentification** - Vérification automatique du token
✅ **CORS configuré** - Protection contre les requêtes non autorisées
✅ **Validation des données** - Vérification des champs requis

### Pour la production :

⚠️ **À faire absolument :**

1. Changer `JWT_SECRET` par une clé complexe et unique
2. Utiliser HTTPS uniquement
3. Ajouter un rate limiting (limiter les tentatives de connexion)
4. Implémenter un système de refresh tokens
5. Ajouter une validation d'email
6. Implémenter un système de récupération de mot de passe
7. Logger les tentatives de connexion
8. Ajouter une authentification à deux facteurs (2FA)

## 🧪 Tests

### Test de connexion

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@sportafricain.com","password":"admin123"}'
```

### Test de création d'article (avec token)

```bash
curl -X POST http://localhost:3000/api/articles \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN_ICI" \
  -d '{
    "title":"Test Article",
    "sport":"Football",
    "category":"football",
    "discipline":"football",
    "image":"https://example.com/image.jpg",
    "content":"Contenu de test"
  }'
```

## 📝 Structure des fichiers

```
backend/
├── models/
│   └── Admin.js              # Modèle Admin avec hashage auto
├── middleware/
│   └── auth.js               # Middleware JWT
├── routes/
│   ├── auth.js               # Routes d'authentification
│   ├── articles.js           # Routes articles (protégées)
│   └── athletes.js           # Routes athlètes (protégées)
└── server.js                 # Serveur principal

frontend/
└── auth-helper.js            # Helper d'authentification
```

## 🐛 Dépannage

### Erreur "Token invalide"
- Vérifier que le token est bien envoyé dans le header `Authorization`
- Format : `Bearer VOTRE_TOKEN`
- Vérifier que le token n'a pas expiré (7 jours)

### Erreur "Admin introuvable"
- Créer un admin avec `/api/auth/create-admin`
- Vérifier que MongoDB est bien démarré

### Erreur "Accès refusé"
- Vérifier que vous êtes bien connecté
- Vérifier que le token est stocké dans localStorage

## 📚 Ressources

- [JWT.io](https://jwt.io/) - Déboguer les tokens JWT
- [bcrypt](https://www.npmjs.com/package/bcryptjs) - Documentation bcrypt
- [Express Security](https://expressjs.com/en/advanced/best-practice-security.html) - Bonnes pratiques Express
