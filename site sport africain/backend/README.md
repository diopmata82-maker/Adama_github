# Backend Sport Africain

API REST pour le site Sport Africain avec Node.js, Express et MongoDB.

## 🚀 Installation

```bash
cd backend
npm install
```

## 📦 Dépendances

- **express** - Framework web
- **mongoose** - ODM MongoDB
- **cors** - Gestion CORS
- **nodemon** - Rechargement automatique (dev)

## 🔧 Configuration

1. Installer MongoDB localement ou utiliser MongoDB Atlas
2. Copier `.env.example` vers `.env`
3. Modifier les variables d'environnement si nécessaire

## ▶️ Démarrage

### Mode développement (avec nodemon)
```bash
npm run dev
```

### Mode production
```bash
npm start
```

Le serveur démarre sur `http://localhost:3000`

## 📡 Endpoints API

### Articles

- `GET /api/articles` - Récupérer tous les articles
  - Query params: `?category=football&limit=10`
- `GET /api/articles/:id` - Récupérer un article
- `POST /api/articles` - Créer un article
- `PUT /api/articles/:id` - Modifier un article
- `DELETE /api/articles/:id` - Supprimer un article

### Athlètes

- `GET /api/athletes` - Récupérer tous les athlètes
  - Query params: `?discipline=football`
- `GET /api/athletes/:id` - Récupérer un athlète
- `POST /api/athletes` - Créer un athlète
- `PUT /api/athletes/:id` - Modifier un athlète
- `DELETE /api/athletes/:id` - Supprimer un athlète

## 📝 Exemples d'utilisation

### Récupérer tous les articles
```javascript
fetch('http://localhost:3000/api/articles')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Créer un article
```javascript
fetch('http://localhost:3000/api/articles', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: "Nouveau titre",
    sport: "Football",
    category: "football",
    discipline: "football",
    image: "https://example.com/image.jpg",
    author: "Auteur",
    content: "Contenu de l'article..."
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

### Filtrer par catégorie
```javascript
fetch('http://localhost:3000/api/articles?category=football&limit=5')
  .then(res => res.json())
  .then(data => console.log(data));
```

## 🗄️ Structure de la base de données

### Article
```javascript
{
  title: String,
  sport: String,
  discipline: String,
  category: String,
  image: String,
  author: String,
  content: String,
  date: Date,
  views: Number,
  published: Boolean
}
```

### Athlete
```javascript
{
  name: String,
  sport: String,
  poste: String,
  discipline: String,
  country: String,
  flag: String,
  age: String,
  club: String,
  image: String,
  bio: String,
  stats: Map,
  achievements: [String],
  socialMedia: Object
}
```

## 🔒 Sécurité

Pour la production, pensez à :
- Ajouter une authentification JWT
- Valider les données entrantes
- Limiter les requêtes (rate limiting)
- Utiliser HTTPS
- Sécuriser MongoDB

## 📚 Prochaines étapes

1. Installer MongoDB : https://www.mongodb.com/try/download/community
2. Lancer MongoDB : `mongod`
3. Installer les dépendances : `npm install`
4. Démarrer le serveur : `npm run dev`
5. Tester l'API : http://localhost:3000
