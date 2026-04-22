// Script de migration des données existantes vers MongoDB
// Ce script importe les articles et athlètes depuis les fichiers JS vers la base de données

const mongoose = require("mongoose");
require("dotenv").config();

const Article = require("./models/Article");
const Athlete = require("./models/Athlete");

// Connexion MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/sport-africain";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connecté"))
.catch(err => {
    console.log("❌ Erreur MongoDB:", err);
    process.exit(1);
});

// Données des articles (depuis articles-data.js)
const articlesData = {
    1: {
        id: 1,
        title: "Sadio Mané brille avec Al-Nassr en Ligue des Champions asiatique",
        sport: "Football",
        discipline: "football",
        category: "football",
        date: "15 mars 2026",
        author: "Amadou Diallo",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800",
        content: `<p>L'international sénégalais Sadio Mané continue d'impressionner sous les couleurs d'Al-Nassr en Arabie Saoudite. Lors du match de Ligue des Champions asiatique face à Al-Hilal, l'ancien joueur de Liverpool a inscrit un doublé magistral qui a permis à son équipe de s'imposer 3-1.</p>

<h2>Une performance exceptionnelle</h2>
<p>Mané a ouvert le score dès la 23e minute sur une passe décisive de Cristiano Ronaldo, avant de doubler la mise en seconde période d'une frappe puissante du pied gauche. Sa vitesse et sa technique ont fait des ravages dans la défense adverse.</p>

<h2>Les réactions après le match</h2>
<p>L'entraîneur d'Al-Nassr a salué la performance de son attaquant : "Sadio est un joueur exceptionnel. Il apporte beaucoup à l'équipe, tant sur le plan technique que mental. C'est un leader naturel."</p>

<h2>Statistiques impressionnantes</h2>
<p>Avec ce doublé, Mané porte son total à 18 buts en 22 matchs cette saison. Il est actuellement le meilleur buteur africain évoluant en Arabie Saoudite et figure parmi les favoris pour le titre de meilleur joueur de la saison.</p>

<h2>L'impact sur l'équipe nationale</h2>
<p>Cette forme étincelante est de bon augure pour l'équipe nationale du Sénégal, qui se prépare pour les éliminatoires de la Coupe du Monde 2026. Le sélectionneur Aliou Cissé compte énormément sur son capitaine pour mener les Lions de la Teranga vers la qualification.</p>

<p>Al-Nassr affrontera ensuite Al-Ain en demi-finale de la Ligue des Champions asiatique, avec l'ambition de remporter le trophée continental pour la première fois de son histoire.</p>`
    },
    2: {
        id: 2,
        title: "Joel Embiid domine la NBA avec 45 points contre les Lakers",
        sport: "Basketball",
        discipline: "basketball",
        category: "basketball",
        date: "14 mars 2026",
        author: "Fatou Sow",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
        content: `<p>Le pivot camerounais Joel Embiid a livré une performance monumentale lors de la victoire des Philadelphia 76ers face aux Los Angeles Lakers (128-115). Avec 45 points, 12 rebonds et 5 passes décisives, le MVP en titre a une fois de plus démontré pourquoi il est considéré comme l'un des meilleurs joueurs de la planète.</p>

<h2>Domination totale</h2>
<p>Embiid a été intenable toute la soirée, enchaînant les paniers à mi-distance et les dunks spectaculaires. Sa présence physique dans la raquette a complètement déstabilisé la défense des Lakers, qui n'ont trouvé aucune solution pour le contenir.</p>

<h2>Un duel au sommet</h2>
<p>Face à Anthony Davis, Embiid a clairement pris le dessus, dominant les deux côtés du terrain. "C'est le genre de match où je voulais montrer que je suis le meilleur pivot de la ligue", a déclaré le Camerounais après la rencontre.</p>

<h2>Course au MVP</h2>
<p>Cette performance renforce la candidature d'Embiid pour un deuxième titre de MVP consécutif. Il affiche actuellement des moyennes de 32,5 points, 11,2 rebonds et 4,8 passes décisives par match, des statistiques exceptionnelles qui le placent en tête de la course.</p>

<h2>L'avenir des 76ers</h2>
<p>Avec Embiid en grande forme, les Philadelphia 76ers visent le titre NBA cette saison. L'équipe occupe actuellement la deuxième place de la Conférence Est et semble avoir tous les atouts pour aller loin en playoffs.</p>

<p>Le prochain défi d'Embiid sera de maintenir ce niveau de performance lors des matchs décisifs de fin de saison régulière et surtout en playoffs, où les attentes sont énormes.</p>`
    },
    3: {
        id: 3,
        title: "Faith Kipyegon bat le record du monde du 1500m",
        sport: "Athlétisme",
        discipline: "athletisme",
        category: "athletisme",
        date: "13 mars 2026",
        author: "Moussa Traoré",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800",
        content: `<p>La Kényane Faith Kipyegon a pulvérisé le record du monde du 1500 mètres lors du meeting de Monaco, en réalisant un temps exceptionnel de 3:48.45. Cette performance historique améliore son propre record de près d'une seconde et confirme sa domination absolue sur la distance.</p>

<h2>Une course parfaite</h2>
<p>Kipyegon a mené la course de bout en bout, imposant un rythme infernal dès les premiers mètres. Son dernier tour en 56 secondes a laissé ses adversaires sans réponse. "Je savais que j'étais en forme, mais je ne pensais pas pouvoir courir aussi vite", a-t-elle confié après la course.</p>

<h2>Troisième record du monde</h2>
<p>Il s'agit du troisième record du monde de la carrière de Kipyegon, après ceux du 1500m en 2023 et du mile en 2024. À 30 ans, l'athlète kényane est au sommet de son art et ne semble pas prête à ralentir.</p>

<h2>Réactions dans le monde de l'athlétisme</h2>
<p>Sebastian Coe, président de World Athletics, a salué cette performance : "Faith Kipyegon est une athlète extraordinaire qui repousse constamment les limites du possible. Ce record est une inspiration pour toute une génération."</p>

<h2>Objectif Jeux Olympiques</h2>
<p>Cette performance intervient à quelques mois des Jeux Olympiques de Los Angeles 2028. Kipyegon, déjà double championne olympique, vise un troisième titre consécutif sur 1500m, ce qui serait une première dans l'histoire de l'athlétisme féminin.</p>

<p>Le Kenya peut être fier de compter dans ses rangs une telle championne, qui continue d'écrire l'histoire de l'athlétisme mondial et d'inspirer des millions de jeunes athlètes à travers le continent africain.</p>`
    }
};

// Données des athlètes (depuis athletes-data.js)
const athletesData = {
    mane: {
        id: "mane",
        name: "Sadio Mané",
        sport: "Football",
        discipline: "football",
        country: "Sénégal",
        flag: "🇸🇳",
        poste: "Attaquant",
        club: "Al-Nassr",
        age: "32 ans",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800",
        bio: "Sadio Mané est l'un des meilleurs attaquants africains de sa génération. Vainqueur de la Ligue des Champions avec Liverpool et de la CAN avec le Sénégal, il continue de briller en Arabie Saoudite.",
        stats: {
            buts: "245",
            selections: "97",
            trophees: "12",
            club: "Al-Nassr"
        },
        palmares: [
            "Vainqueur CAN 2021",
            "Vainqueur Ligue des Champions 2019",
            "Ballon d'Or africain 2019, 2022"
        ]
    },
    salah: {
        id: "salah",
        name: "Mohamed Salah",
        sport: "Football",
        discipline: "football",
        country: "Égypte",
        flag: "🇪🇬",
        poste: "Ailier droit",
        club: "Liverpool FC",
        age: "31 ans",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
        bio: "Mohamed Salah est une légende vivante du football africain. Meilleur buteur de l'histoire de Liverpool en Premier League, il continue d'enchanter Anfield avec ses performances exceptionnelles.",
        stats: {
            buts: "312",
            selections: "89",
            trophees: "15",
            club: "Liverpool FC"
        },
        palmares: [
            "Vainqueur Ligue des Champions 2019",
            "Soulier d'Or Premier League 2018, 2019, 2022",
            "Ballon d'Or africain 2017, 2018"
        ]
    },
    embiid: {
        id: "embiid",
        name: "Joel Embiid",
        sport: "Basketball",
        discipline: "basketball",
        country: "Cameroun",
        flag: "🇨🇲",
        poste: "Pivot",
        club: "Philadelphia 76ers",
        age: "30 ans",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
        bio: "Joel Embiid est l'un des pivots les plus dominants de la NBA. MVP de la saison 2023, il combine puissance physique et technique raffinée pour terroriser les défenses adverses.",
        stats: {
            points: "27.8",
            rebonds: "11.2",
            passes: "4.8",
            club: "Philadelphia 76ers"
        },
        palmares: [
            "MVP NBA 2023",
            "All-Star NBA (7x)",
            "All-NBA First Team (5x)"
        ]
    },
    kipyegon: {
        id: "kipyegon",
        name: "Faith Kipyegon",
        sport: "Athlétisme",
        discipline: "athletisme",
        country: "Kenya",
        flag: "🇰🇪",
        poste: "Coureuse de demi-fond",
        club: "—",
        age: "30 ans",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800",
        bio: "Faith Kipyegon est la reine incontestée du 1500 mètres. Double championne olympique et détentrice du record du monde, elle domine sa discipline depuis plusieurs années.",
        stats: {
            records: "3",
            medailles: "8",
            titres: "12",
            club: "—"
        },
        palmares: [
            "Championne olympique 1500m (2016, 2020)",
            "Record du monde 1500m (3:48.45)",
            "Championne du monde (2023)"
        ]
    }
};

// Fonction de migration
async function migrate() {
    try {
        console.log("\n🔄 Début de la migration...\n");

        // Supprimer les données existantes
        await Article.deleteMany({});
        await Athlete.deleteMany({});
        console.log("✅ Données existantes supprimées\n");

        // Importer les articles
        console.log("📰 Import des articles...");
        const articles = Object.values(articlesData).map(article => ({
            title: article.title,
            category: article.category,
            image: article.image,
            author: article.author,
            content: article.content,
            date: new Date()
        }));

        const createdArticles = await Article.insertMany(articles);
        console.log(`✅ ${createdArticles.length} articles importés\n`);

        // Importer les athlètes
        console.log("👤 Import des athlètes...");
        const athletes = Object.values(athletesData).map(athlete => ({
            name: athlete.name,
            discipline: athlete.discipline,
            country: athlete.country,
            position: athlete.poste,
            club: athlete.club === "—" ? null : athlete.club,
            age: parseInt(athlete.age),
            image: athlete.image,
            bio: athlete.bio,
            stats: athlete.stats,
            achievements: athlete.palmares
        }));

        const createdAthletes = await Athlete.insertMany(athletes);
        console.log(`✅ ${createdAthletes.length} athlètes importés\n`);

        console.log("🎉 Migration terminée avec succès !\n");
        console.log("📊 Résumé :");
        console.log(`   - Articles : ${createdArticles.length}`);
        console.log(`   - Athlètes : ${createdAthletes.length}\n`);

        process.exit(0);
    } catch (error) {
        console.error("❌ Erreur lors de la migration:", error);
        process.exit(1);
    }
}

// Lancer la migration
migrate();
