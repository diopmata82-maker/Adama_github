# Uniformisation du Design des Cartes d'Articles ✅

## 🎯 Objectif
Utiliser UN SEUL design de carte sur tout le site pour une cohérence visuelle parfaite.

## ✅ Design Unifié Appliqué

### Structure HTML Standard
```html
<a href="article.html?id=1" class="actualite-card">
    <div class="actualite-image-wrapper">
        <img src="image.jpg" alt="Titre" class="actualite-image">
        <span class="actualite-category">Football</span>
    </div>
    <div class="actualite-content">
        <p class="actualite-date">15 Janvier 2024</p>
        <h3 class="actualite-title">Titre de l'article</h3>
        <p class="actualite-excerpt">Description courte de l'article...</p>
        <span class="read-more">Lire la suite →</span>
    </div>
</a>
```

### Classes CSS Utilisées

**Container de la carte:**
- `.actualite-card` - Carte principale avec hover effect

**Image:**
- `.actualite-image-wrapper` - Container de l'image (position relative)
- `.actualite-image` - Image de l'article (200px height, object-fit: cover)
- `.actualite-category` - Badge de catégorie (position absolute, top-left)

**Contenu:**
- `.actualite-content` - Container du contenu (padding: 20px)
- `.actualite-date` - Date de publication (couleur verte #0f783c)
- `.actualite-title` - Titre de l'article (18px, bold)
- `.actualite-excerpt` - Description courte (14px, 2 lignes max avec ellipsis)
- `.read-more` - Lien "Lire la suite" (couleur verte avec hover)

## 📋 Fichiers Modifiés

### ✅ index.html
- Section actualités mise à jour avec le design complet
- Ajout de `.actualite-date`, `.actualite-excerpt`, `.read-more`
- 6 articles affichés avec toutes les informations

### ✅ article.html
- Script mis à jour pour générer les articles similaires avec le design complet
- Extraction automatique de l'excerpt depuis le contenu (120 caractères)
- Utilisation de `.actualite-card` pour la cohérence

### ✅ styles.css
- Ajout de `.actualite-excerpt` avec ellipsis sur 2 lignes
- Ajout de `.read-more` avec effet hover
- Styles cohérents pour toutes les cartes

### ⚠️ À Modifier (actualites.html et pages par discipline)
Ces fichiers utilisent encore l'ancien système avec `.badge` au lieu de `.actualite-category`.

**Changements nécessaires:**
1. Remplacer `.badge` par `.actualite-category`
2. Ajouter `.actualite-date` avant le titre
3. Renommer `.article-content` en `.actualite-content`
4. Ajouter `.actualite-excerpt` pour la description
5. S'assurer que `.read-more` est présent

## 🎨 Styles CSS Complets

```css
/* Carte principale */
.actualite-card {
    background-color: #ffffff;
    border-radius: 14px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    text-decoration: none;
}

.actualite-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

/* Image */
.actualite-image-wrapper {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.actualite-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
}

.actualite-category {
    position: absolute;
    top: 12px;
    left: 12px;
    display: inline-block;
    background-color: #0f783c;
    color: #ffffff;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 5px 12px;
    border-radius: 20px;
    z-index: 10;
}

/* Contenu */
.actualite-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.actualite-date {
    color: #0f783c;
    font-size: 13px;
    font-weight: 500;
    margin: 0;
}

.actualite-title {
    color: #1a1a1a;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.4;
    margin: 0;
}

.actualite-excerpt {
    color: #666666;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.read-more {
    color: #0f783c;
    font-size: 14px;
    font-weight: 600;
    margin-top: 8px;
    display: inline-block;
    transition: color 0.3s;
}

.actualite-card:hover .read-more {
    color: #0d6633;
}
```

## 📊 Comparaison Avant/Après

### ❌ Ancien Design (à supprimer)
```html
<div class="actualite-content">
    <h3 class="actualite-title">Titre seulement</h3>
</div>
```

### ✅ Nouveau Design (unifié)
```html
<div class="actualite-content">
    <p class="actualite-date">15 Janvier 2024</p>
    <h3 class="actualite-title">Titre complet</h3>
    <p class="actualite-excerpt">Description courte...</p>
    <span class="read-more">Lire la suite →</span>
</div>
```

## 🎯 Avantages du Design Unifié

1. **Cohérence Visuelle**
   - Même apparence sur toutes les pages
   - Expérience utilisateur fluide
   - Design professionnel

2. **Informations Complètes**
   - Date de publication visible
   - Description pour donner du contexte
   - Call-to-action clair ("Lire la suite")

3. **Meilleure UX**
   - L'utilisateur sait à quoi s'attendre
   - Plus d'informations avant de cliquer
   - Navigation intuitive

4. **Maintenance Facile**
   - Un seul design à maintenir
   - Modifications centralisées dans le CSS
   - Pas de duplication de code

## ✅ Pages Avec Design Unifié

- ✅ index.html (section actualités)
- ✅ article.html (articles similaires)
- ⚠️ actualites.html (à mettre à jour)
- ⚠️ actualites-football.html (à mettre à jour)
- ⚠️ actualites-basketball.html (à mettre à jour)
- ⚠️ actualites-athletisme.html (à mettre à jour)
- ⚠️ actualites-lutte.html (à mettre à jour)

## 🚀 Prochaines Étapes

1. Mettre à jour `actualites.html` avec le nouveau design
2. Mettre à jour toutes les pages par discipline
3. Supprimer les anciens styles `.badge`, `.article-image-wrapper`, etc.
4. Tester sur tous les navigateurs
5. Vérifier le responsive design

---

**Date:** 19 Avril 2026  
**Statut:** ✅ Design unifié appliqué sur index.html et article.html  
**Prochaine étape:** Appliquer à actualites.html et pages par discipline
