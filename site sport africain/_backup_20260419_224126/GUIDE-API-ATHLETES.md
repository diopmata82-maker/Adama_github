# Guide API Athlètes - Sport Africain

## 🎯 Objectif

Système dynamique universel pour afficher les informations des sportifs africains (toutes disciplines) en utilisant l'API Wikipedia avec fallback local.

## 📦 Fichiers

- `athletes-api.js` - Système complet avec API + fallback
- `TEST-ATHLETES-API.html` - Page de démonstration
- `GUIDE-API-ATHLETES.md` - Ce guide

## 🚀 Installation

### 1. Inclure le script dans votre page HTML

```html
<script src="athletes-api.js"></script>
```

### 2. Créer un conteneur pour afficher les données

```html
<div id="athlete-info"></div>
```

### 3. Appeler la fonction

```javascript
displayAthlete('Sadio Mané', 'athlete-info');
```

## 📚 Fonctions Disponibles

### 1. `getAthlete(name)`

Récupère les informations d'un sportif (API + fallback local).

**Paramètres:**
- `name` (string) - Nom du sportif (ex: "Sadio Mané")

**Retour:**
- Promise<Object> - Objet contenant les informations

**Exemple:**
```javascript
const athlete = await getAthlete('Sadio Mané');
console.log(athlete.name);        // "Sadio Mané"
console.log(athlete.description); // Description complète
console.log(athlete.image);       // URL de l'image
console.log(athlete.sport);       // "Football"
console.log(athlete.country);     // "Sénégal"
```

### 2. `displayAthlete(name, containerId)`

Affiche les informations d'un sportif dans le DOM.

**Paramètres:**
- `name` (string) - Nom du sportif
- `containerId` (string) - ID du conteneur HTML (défaut: 'athlete-info')

**Exemple:**
```javascript
displayAthlete('Joel Embiid', 'athlete-info');
```

**HTML généré:**
```html
<div class="athlete-card">
    <img src="..." alt="Joel Embiid" class="athlete-image">
    <div class="athlete-info">
        <h2 class="athlete-name">Joel Embiid</h2>
        <p class="athlete-sport">🏆 Basketball</p>
        <p class="athlete-country">🌍 Cameroun</p>
        <p class="athlete-description">...</p>
        <div class="athlete-achievements">...</div>
        <a href="..." class="athlete-link">En savoir plus →</a>
    </div>
</div>
```

### 3. `getMultipleAthletes(names)`

Récupère plusieurs sportifs en parallèle.

**Paramètres:**
- `names` (Array<string>) - Liste des noms

**Retour:**
- Promise<Array<Object>> - Liste des sportifs

**Exemple:**
```javascript
const athletes = await getMultipleAthletes([
    'Sadio Mané',
    'Joel Embiid',
    'Eliud Kipchoge'
]);

athletes.forEach(athlete => {
    console.log(athlete.name);
});
```

### 4. `displayAthletesList(names, containerId)`

Affiche une liste de sportifs en grille.

**Paramètres:**
- `names` (Array<string>) - Liste des noms
- `containerId` (string) - ID du conteneur (défaut: 'athletes-list')

**Exemple:**
```javascript
displayAthletesList([
    'Sadio Mané',
    'Joel Embiid',
    'Eliud Kipchoge'
], 'athletes-list');
```

## 🎨 Structure des Données

### Objet Athlète

```javascript
{
    name: "Sadio Mané",
    sport: "Football",
    country: "Sénégal",
    description: "Footballeur sénégalais...",
    image: "https://...",
    url: "https://en.wikipedia.org/...",
    achievements: [
        "Ballon d'Or africain 2022",
        "Champion d'Afrique 2022"
    ],
    source: "wikipedia" // ou "local"
}
```

## 💾 Base de Données Locale

Le système inclut une base de données locale pour 4 sportifs:

1. **Sadio Mané** - Football (Sénégal)
2. **Joel Embiid** - Basketball (Cameroun)
3. **Ferdinand Omanyala** - Athlétisme (Kenya)
4. **Eliud Kipchoge** - Athlétisme (Kenya)

### Ajouter un sportif à la base locale

Ouvrez `athletes-api.js` et ajoutez dans `athletesDatabase`:

```javascript
const athletesDatabase = {
    // ... sportifs existants ...
    
    "Nouveau_Sportif": {
        name: "Nouveau Sportif",
        sport: "Sport",
        country: "Pays",
        description: "Description...",
        image: "image.jpg",
        achievements: ["Titre 1", "Titre 2"]
    }
};
```

## 🌐 API Wikipedia

Le système utilise l'API REST de Wikipedia:

**Endpoint:**
```
https://en.wikipedia.org/api/rest_v1/page/summary/{name}
```

**Exemple:**
```
https://en.wikipedia.org/api/rest_v1/page/summary/Sadio_Mané
```

**Note:** Les espaces dans les noms sont automatiquement remplacés par des underscores.

## 🎯 Cas d'Usage

### 1. Page de profil d'athlète

```html
<div id="athlete-profile"></div>

<script src="athletes-api.js"></script>
<script>
    // Récupérer le nom depuis l'URL
    const params = new URLSearchParams(window.location.search);
    const athleteName = params.get('name') || 'Sadio Mané';
    
    displayAthlete(athleteName, 'athlete-profile');
</script>
```

### 2. Liste de top athlètes

```html
<div id="top-athletes"></div>

<script src="athletes-api.js"></script>
<script>
    const topAthletes = [
        'Sadio Mané',
        'Joel Embiid',
        'Eliud Kipchoge',
        'Ferdinand Omanyala'
    ];
    
    displayAthletesList(topAthletes, 'top-athletes');
</script>
```

### 3. Filtrage par sport

```html
<button onclick="showFootball()">Football</button>
<button onclick="showBasketball()">Basketball</button>
<button onclick="showAthletics()">Athlétisme</button>

<div id="athletes"></div>

<script src="athletes-api.js"></script>
<script>
    function showFootball() {
        displayAthletesList(['Sadio Mané'], 'athletes');
    }
    
    function showBasketball() {
        displayAthletesList(['Joel Embiid'], 'athletes');
    }
    
    function showAthletics() {
        displayAthletesList([
            'Eliud Kipchoge',
            'Ferdinand Omanyala'
        ], 'athletes');
    }
</script>
```

### 4. Récupération personnalisée

```javascript
async function customDisplay() {
    const athlete = await getAthlete('Sadio Mané');
    
    document.getElementById('name').textContent = athlete.name;
    document.getElementById('desc').textContent = athlete.description;
    document.getElementById('img').src = athlete.image;
    document.getElementById('sport').textContent = athlete.sport;
}

customDisplay();
```

## 🎨 Styles CSS Recommandés

```css
.athlete-card {
    background: #1a1a1a;
    padding: 30px;
    border-radius: 15px;
    display: flex;
    gap: 30px;
}

.athlete-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
}

.athlete-name {
    font-size: 32px;
    color: #1E7F4F;
    margin-bottom: 15px;
}

.athlete-sport,
.athlete-country {
    font-size: 18px;
    color: #FFDE00;
    margin: 8px 0;
}

.athlete-description {
    line-height: 1.8;
    color: #ccc;
}

.athlete-achievements ul {
    list-style: none;
    padding: 0;
}

.athlete-achievements li {
    padding: 8px 0;
}

.athlete-link {
    color: #1E7F4F;
    text-decoration: none;
    font-weight: bold;
}

.loading {
    text-align: center;
    padding: 40px;
    color: #FFDE00;
}
```

## ⚠️ Gestion des Erreurs

Le système gère automatiquement les erreurs:

1. **API Wikipedia échoue** → Utilise les données locales
2. **Données locales inexistantes** → Affiche un message par défaut
3. **Pas d'image disponible** → N'affiche pas d'image
4. **Conteneur HTML inexistant** → Affiche une erreur dans la console

## 🧪 Tests

Ouvrez `TEST-ATHLETES-API.html` dans votre navigateur pour:

- ✅ Tester l'affichage d'un athlète
- ✅ Tester l'affichage de plusieurs athlètes
- ✅ Voir les données brutes dans la console
- ✅ Tester le fallback local

## 📝 Exemple Complet

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Profil Athlète</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Profil de l'Athlète</h1>
    
    <!-- Boutons de sélection -->
    <button onclick="displayAthlete('Sadio Mané', 'profile')">Sadio Mané</button>
    <button onclick="displayAthlete('Joel Embiid', 'profile')">Joel Embiid</button>
    <button onclick="displayAthlete('Eliud Kipchoge', 'profile')">Eliud Kipchoge</button>
    
    <!-- Conteneur pour l'affichage -->
    <div id="profile"></div>
    
    <!-- Script API -->
    <script src="athletes-api.js"></script>
    
    <!-- Script d'initialisation -->
    <script>
        // Afficher Sadio Mané par défaut
        displayAthlete('Sadio Mané', 'profile');
    </script>
</body>
</html>
```

## 🚀 Fonctionnalités

✅ Récupération automatique depuis Wikipedia
✅ Fallback local si API échoue
✅ Support de toutes les disciplines sportives
✅ Affichage formaté et stylisé
✅ Gestion des erreurs robuste
✅ Code réutilisable partout
✅ Async/await moderne
✅ Optional chaining pour sécurité
✅ Chargement parallèle pour plusieurs athlètes

---

**Système API Athlètes - Sport Africain v1.0**
*Prêt à l'emploi sur tout le site!* 🎉
