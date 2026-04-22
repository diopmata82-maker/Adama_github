# 🚀 Guide de Démarrage - Backend Sport Africain

## Prérequis

- Node.js (v14 ou supérieur)
- MongoDB installé et en cours d'exécution
- npm ou yarn

## Installation

### 1. Installer les dépendances

```bash
cd backend
npm install
```

### 2. Démarrer MongoDB

Ouvrez un nouveau terminal et lancez MongoDB :

```bash
mongod
```

MongoDB doit être en cours d'exécution sur `mongodb://127.0.0.1:27017`

### 3. Configurer les variables d'environnement

Le fichier `.env` est déjà configuré avec :

```
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/sport-africain
NODE_ENV=development
JWT_SECRET=monsecretultrasecurise123_sport_africain_2026
```

⚠️ **IMPORTANT** : En production, changez le `JWT_SECRET` !

### 4. Importer les données existantes (optionnel)

Si vous voulez importer les articles et athlètes existants dans MongoDB :

```bash
npm run migrate
```

Ce script va :
- Supprimer les données existantes dans MongoDB
- Importer tous les articles depuis `articles-data.js`
- Importer tous les athlètes depuis `athletes-data.js`

### 5. Démarrer le serveur

```bash
npm run dev
```

Le serveur démarre sur `http://localhost:3000`

## Créer le premier admin

### Option 1 : Via l'API

Utilisez Postman ou curl :

```bash
curl -X POST http://localhost:3000/api/auth/create-admin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@sportafricain.com",
    "password": "admin123",
    "name": "Administrateur"
  }'
```

### Option 2 : Via le navigateur

Ouvrez dans votre navigateur :

```
http://localhost:3000/api/auth/create-admin?email=admin@sportafricain.com&password=admin123&name=Admin
```

## Se connecter à l'interface admin

1. Ouvrez `admin-login.html` dans votre navigateur
2. Utilisez les identifiants :
   - Email : `admin@sportafricain.com`
   - Mot de passe : `admin123`

## Structure de l'API

### Authentification

- `POST /api/auth/login` - Connexion admin
- `POST /api/auth/create-admin` - Créer un admin
- `GET /api/auth/verify` - Vérifier le token

### Articles

- `GET /api/articles` - Liste des articles (PUBLIC)
- `GET /api/articles/:id` - Détails d'un article (PUBLIC)
- `POST /api/articles` - Créer un article (ADMIN)
- `PUT /api/articles/:id` - Modifier un article (ADMIN)
- `DELETE /api/articles/:id` - Supprimer un article (ADMIN)

### Athlètes

- `GET /api/athletes` - Liste des athlètes (PUBLIC)
- `GET /api/athletes/:id` - Détails d'un athlète (PUBLIC)
- `POST /api/athletes` - Créer un athlète (ADMIN)
- `PUT /api/athletes/:id` - Modifier un athlète (ADMIN)
- `DELETE /api/athletes/:id` - Supprimer un athlète (ADMIN)

## Sécurité

✅ Mots de passe hashés avec bcrypt (salt rounds = 12)
✅ JWT avec expiration 2h
✅ Middleware d'authentification sur toutes les routes sensibles
✅ Middleware isAdmin pour vérifier les droits
✅ Variables d'environnement pour les secrets
✅ .gitignore configuré pour ne pas commit .env

## Tester l'API

### Créer un article

```bash
curl -X POST http://localhost:3000/api/articles \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_TOKEN" \
  -d '{
    "title": "Test Article",
    "category": "football",
    "image": "https://example.com/image.jpg",
    "author": "Test Author",
    "content": "Contenu de test"
  }'
```

### Récupérer tous les articles

```bash
curl http://localhost:3000/api/articles
```

## Dépannage

### MongoDB ne démarre pas

Vérifiez que MongoDB est installé :

```bash
mongod --version
```

### Port 3000 déjà utilisé

Changez le port dans `.env` :

```
PORT=3001
```

### Erreur de connexion MongoDB

Vérifiez que MongoDB est en cours d'exécution :

```bash
ps aux | grep mongod
```

## Prochaines étapes

1. ✅ Backend fonctionnel avec authentification
2. ✅ Pages admin connectées au backend
3. 🔄 Ajouter la fonctionnalité de modification
4. 🔄 Ajouter l'upload d'images
5. 🔄 Connecter les pages publiques au backend

## Support

Pour plus d'informations, consultez :
- `backend/README.md` - Documentation complète
- `backend/AUTHENTICATION.md` - Détails sur l'authentification
