# Guide du Système d'Articles Dynamique

## 🎯 Comment ça fonctionne

Le site utilise un système d'articles dynamique qui charge le contenu depuis `articles-data.js` en fonction de l'ID dans l'URL.

## 📝 Structure des Articles

### Fichier: `articles-data.js`

```javascript
const articlesData = {
    1: {
        id: 1,
        sport: "Football",
        title: "Titre de l'article",
        date: "15 Janvier 2024",
        author: "Nom de l'auteur",
        image: "nom-image.jpg",
        content: `
            <p>Contenu HTML de l'article...</p>
            <h2>Sous-titre</h2>
            <p>Plus de contenu...</p>
        `
    }
}
```

## 🔗 Créer des Liens vers les Articles

### Dans les pages d'actualités:

```html
<!-- Lien vers l'article ID 1 -->
<a href="article.html?id=1">Lire l'article</a>

<!-- Lien vers l'article ID 2 -->
<a href="article.html?id=2">Lire l'article</a>
```

## 📚 Articles Actuels

| ID | Sport | Titre |
|----|-------|-------|
| 1 | Football | Sadio Mané remporte le Ballon d'Or africain 2024 |
| 2 | Basketball | Joel Embiid domine la NBA avec 45 points |
| 3 | Athlétisme | Record d'Afrique du 100m battu par Ferdinand Omanyala |
| 4 | Lutte | Championnat d'Afrique de Lutte : Le Sénégal domine |
| 5 | Football | CAN 2024 : Le Nigeria favori selon les experts |
| 6 | Basketball | Giannis Antetokounmpo : Triple-double historique |

## ➕ Ajouter un Nouvel Article

### Étape 1: Ouvrir `articles-data.js`

### Étape 2: Ajouter l'article avec un nouvel ID

```javascript
const articlesData = {
    // ... articles existants ...
    
    7: {
        id: 7,
        sport: "Football",
        title: "Nouveau titre d'article",
        date: "20 Janvier 2024",
        author: "Votre Nom",
        image: "votre-image.jpg",
        content: `
            <p>Premier paragraphe de votre article...</p>
            
            <h2>Premier sous-titre</h2>
            <p>Contenu du premier sous-titre...</p>
            
            <h2>Deuxième sous-titre</h2>
            <p>Contenu du deuxième sous-titre...</p>
            
            <p>Conclusion de l'article...</p>
        `
    }
}
```

### Étape 3: Créer le lien dans actualites.html

```html
<article class="article-card" data-category="football">
    <span class="badge">Football</span>
    <a href="article.html?id=7" style="text-decoration: none; color: inherit;">
        <div class="article-image-wrapper">
            <img src="votre-image.jpg" alt="Titre">
        </div>
        <div class="article-content">
            <h3 class="article-title">Nouveau titre d'article</h3>
            <p class="article-excerpt">Résumé court de l'article...</p>
            <span class="read-more">Lire la suite →</span>
        </div>
    </a>
</article>
```

## 🎨 Balises HTML Supportées dans le Contenu

```html
<p>Paragraphe normal</p>
<h2>Sous-titre</h2>
<h3>Sous-sous-titre</h3>
<strong>Texte en gras</strong>
<em>Texte en italique</em>
<ul><li>Liste à puces</li></ul>
<ol><li>Liste numérotée</li></ol>
<blockquote>Citation</blockquote>
```

## 🔍 Tester un Article

1. Ouvrez votre navigateur
2. Allez sur: `article.html?id=1`
3. L'article avec l'ID 1 devrait s'afficher
4. Changez le numéro pour tester d'autres articles

## ⚠️ Erreurs Courantes

### Article ne s'affiche pas
- Vérifiez que l'ID existe dans `articles-data.js`
- Vérifiez que le fichier `articles-data.js` est bien chargé
- Ouvrez la console du navigateur (F12) pour voir les erreurs

### Image ne s'affiche pas
- Vérifiez que le nom de l'image est correct
- Vérifiez que l'image existe dans le dossier du site
- Utilisez le chemin relatif correct

### Contenu mal formaté
- Vérifiez que vous utilisez les backticks `` ` `` pour le contenu
- Vérifiez que toutes les balises HTML sont bien fermées
- Évitez les apostrophes simples dans le texte (utilisez `\'`)

## 📱 Fonctionnalités Automatiques

✅ Chargement dynamique du contenu
✅ Titre de la page mis à jour automatiquement
✅ Redirection vers actualites.html si l'article n'existe pas
✅ Affichage de la catégorie (sport)
✅ Affichage de la date et de l'auteur
✅ Image hero responsive

## 🚀 Exemple Complet

```javascript
// Dans articles-data.js
8: {
    id: 8,
    sport: "Athlétisme",
    title: "Marathon de Dakar : Record battu",
    date: "25 Janvier 2024",
    author: "Kofi Mensah",
    image: "marathon-dakar.jpg",
    content: `
        <p>Le marathon de Dakar a été le théâtre d'une performance exceptionnelle ce dimanche. Le coureur éthiopien a établi un nouveau record avec un temps de 2h05'30".</p>
        
        <h2>Une course stratégique</h2>
        <p>Dès le départ, le rythme était soutenu. Les favoris se sont rapidement détachés du peloton pour former un groupe de tête composé de cinq athlètes.</p>
        
        <h2>Le sprint final</h2>
        <p>C'est dans les derniers kilomètres que la course s'est jouée. Le vainqueur a accéléré au 38ème kilomètre, creusant un écart décisif.</p>
        
        <p>Cette victoire confirme la domination africaine sur les courses de fond et promet de belles batailles lors des prochaines compétitions internationales.</p>
    `
}
```

```html
<!-- Dans actualites.html -->
<a href="article.html?id=8">Lire l'article complet</a>
```

## 💡 Conseils

1. **IDs séquentiels**: Utilisez des IDs qui se suivent (1, 2, 3, 4...)
2. **Images cohérentes**: Utilisez des images de même format/taille
3. **Contenu structuré**: Utilisez des sous-titres `<h2>` pour organiser
4. **Longueur**: Visez 300-500 mots par article
5. **SEO**: Utilisez des titres descriptifs et accrocheurs

---

**Système d'Articles - Sport Africain v1.0**
