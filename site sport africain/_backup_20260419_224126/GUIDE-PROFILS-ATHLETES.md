# Guide Système de Profils d'Athlètes

## 🎯 Vue d'ensemble

Système complet de profils d'athlètes avec liaison automatique aux articles et recommandations d'athlètes similaires.

## 📦 Fichiers Créés

1. **athletes-data.js** - Base de données des athlètes
2. **profil.html** - Page de profil dynamique
3. **styles.css** - Styles ajoutés pour les profils

## 🚀 Utilisation

### 1. Créer un lien vers un profil

```html
<a href="profil.html?id=mane">Voir le profil de Sadio Mané</a>
<a href="profil.html?id=embiid">Voir le profil de Joel Embiid</a>
<a href="profil.html?id=omanyala">Voir le profil de Ferdinand Omanyala</a>
<a href="profil.html?id=kipchoge">Voir le profil d'Eliud Kipchoge</a>
```

### 2. Structure d'un athlète dans athletes-data.js

```javascript
const athletes = {
    mane: {
        id: "mane",
        name: "Sadio Mané",
        sport: "Football",
        discipline: "football",
        country: "Sénégal",
        flag: "🇸🇳",
        image: "télécharger (70).jpeg",
        bio: "Description complète...",
        stats: {
            club: "Al Nassr",
            position: "Attaquant",
            buts: 120,
            matchs: 250
        },
        achievements: [
            "🏆 Ballon d'Or africain 2022",
            "🏆 Champion d'Afrique 2022"
        ],
        socialMedia: {
            instagram: "https://...",
            twitter: "https://..."
        }
    }
};
```

## 📊 Fonctionnalités de la Page Profil

### 1. Hero Section
- Nom de l'athlète
- Sport et pays avec drapeau
- Fond dégradé vert

### 2. Image de Profil
- Photo de l'athlète
- Bordure arrondie
- Responsive

### 3. Biographie
- Description complète
- Texte formaté
- Lisible

### 4. Statistiques Dynamiques
- Affichage en grille
- Toutes les stats de `athlete.stats`
- Format clé/valeur

### 5. Palmarès
- Liste des achievements
- Icônes emoji
- Design propre

### 6. Réseaux Sociaux
- Liens Instagram et Twitter
- Boutons stylisés
- Icônes Font Awesome

### 7. Articles Liés
- Filtrage automatique par nom ou discipline
- Maximum 3 articles
- Liens vers article.html

### 8. Autres Athlètes
- Athlètes de la même discipline
- Maximum 3 suggestions
- Liens vers leurs profils

## 🔧 Fonctions JavaScript Disponibles

### getAthleteById(id)
```javascript
const athlete = getAthleteById('mane');
console.log(athlete.name); // "Sadio Mané"
```

### getAllAthletes()
```javascript
const allAthletes = getAllAthletes();
console.log(allAthletes.length); // 4
```

### getAthletesByDiscipline(discipline)
```javascript
const footballers = getAthletesByDiscipline('football');
const runners = getAthletesByDiscipline('athletisme');
```

### getAthletesByCountry(country)
```javascript
const senegalese = getAthletesByCountry('Sénégal');
const kenyans = getAthletesByCountry('Kenya');
```

## ➕ Ajouter un Nouvel Athlète

### Étape 1: Ouvrir athletes-data.js

### Étape 2: Ajouter l'athlète

```javascript
const athletes = {
    // ... athlètes existants ...
    
    nouvel_athlete: {
        id: "nouvel_athlete",
        name: "Nom de l'Athlète",
        sport: "Sport",
        discipline: "sport",  // minuscule, sans accents
        country: "Pays",
        flag: "🇫🇷",  // Emoji drapeau
        image: "image.jpg",
        bio: "Biographie complète de l'athlète...",
        stats: {
            stat1: "Valeur 1",
            stat2: "Valeur 2",
            stat3: "Valeur 3"
        },
        achievements: [
            "🏆 Titre 1",
            "🏆 Titre 2",
            "🥇 Médaille 1"
        ],
        socialMedia: {
            instagram: "https://instagram.com/...",
            twitter: "https://twitter.com/..."
        }
    }
};
```

### Étape 3: Créer le lien

```html
<a href="profil.html?id=nouvel_athlete">Voir le profil</a>
```

## 🎨 Personnalisation des Styles

### Couleurs principales
```css
.profil-sport {
    background: #1E7F4F;  /* Vert principal */
}

.profil-name {
    color: #FFFFFF;  /* Blanc */
}

.stat-label {
    color: #1E7F4F;  /* Vert */
}
```

### Modifier le hero
```css
.profil-hero {
    background: linear-gradient(135deg, #0f2027, #1E7F4F);
    height: 400px;  /* Ajuster la hauteur */
}
```

## 📱 Responsive

Le design s'adapte automatiquement:
- **Desktop** (>768px): Grille 2 colonnes
- **Mobile** (<768px): 1 colonne

## 🔗 Intégration avec Articles

Le système lie automatiquement les articles:

```javascript
// Filtrage par nom
article.title.includes(athlete.name)

// OU filtrage par discipline
article.discipline === athlete.discipline
```

## 💡 Exemples d'Utilisation

### 1. Dans une page de classement

```html
<div class="ranking-card">
    <h3>Sadio Mané</h3>
    <p>Sénégal - Football</p>
    <a href="profil.html?id=mane" class="btn">Voir le profil</a>
</div>
```

### 2. Dans un article

```html
<p>
    <a href="profil.html?id=mane">Sadio Mané</a> 
    a remporté le Ballon d'Or africain 2022.
</p>
```

### 3. Liste d'athlètes

```html
<div class="athletes-list">
    <a href="profil.html?id=mane">
        <img src="télécharger (70).jpeg" alt="Sadio Mané">
        <h3>Sadio Mané</h3>
    </a>
    <a href="profil.html?id=embiid">
        <img src="télécharger (71).jpeg" alt="Joel Embiid">
        <h3>Joel Embiid</h3>
    </a>
</div>
```

## 🧪 Tester le Système

1. Ouvrir `profil.html?id=mane` dans le navigateur
2. Vérifier que toutes les informations s'affichent
3. Cliquer sur les articles liés
4. Cliquer sur les autres athlètes
5. Tester les liens réseaux sociaux

## 📊 Athlètes Disponibles

| ID | Nom | Sport | Pays |
|----|-----|-------|------|
| mane | Sadio Mané | Football | Sénégal |
| embiid | Joel Embiid | Basketball | Cameroun |
| omanyala | Ferdinand Omanyala | Athlétisme | Kenya |
| kipchoge | Eliud Kipchoge | Athlétisme | Kenya |

## ⚠️ Points Importants

1. **ID unique**: Chaque athlète doit avoir un ID unique
2. **Discipline**: Doit correspondre à celle des articles pour le filtrage
3. **Images**: Vérifier que les chemins d'images sont corrects
4. **Liens**: Tester tous les liens avant publication

## 🚀 Fonctionnalités

✅ Profil complet avec toutes les infos
✅ Statistiques dynamiques
✅ Palmarès avec icônes
✅ Liens réseaux sociaux
✅ Articles liés automatiquement
✅ Recommandations d'athlètes similaires
✅ Design moderne et responsive
✅ Navigation fluide
✅ Intégration avec articles-data.js

---

**Système de Profils d'Athlètes - Sport Africain v1.0**
*Prêt à l'emploi!* 🎉
