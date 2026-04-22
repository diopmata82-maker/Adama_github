// Base de données des athlètes
const athletes = {
    mane: {
        id: "mane",
        name: "Sadio Mané",
        sport: "Football",
        poste: "Attaquant",
        discipline: "football",
        country: "Sénégal",
        flag: "🇸🇳",
        age: "32 ans",
        club: "Al Nassr",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
        bio: "Sadio Mané est l'un des plus grands footballeurs africains. Vainqueur de la CAN et de la Ligue des Champions, il est reconnu pour sa vitesse, sa technique et son engagement humanitaire.",
        stats: {
            "Buts en carrière": "180+",
            "Sélections": "100+",
            "Trophées": "10+",
            "Club actuel": "Al Nassr"
        },
        achievements: [
            "🏆 Ballon d'Or africain 2022",
            "🏆 Champion d'Afrique 2022",
            "🏆 Vainqueur Ligue des Champions",
            "⚽ Plus de 180 buts en carrière"
        ],
        socialMedia: {
            instagram: "https://www.instagram.com/sadiomaneofficiel/",
            twitter: "https://twitter.com/SMane_Officiel"
        }
    },
    
    salah: {
        id: "salah",
        name: "Mohamed Salah",
        sport: "Football",
        poste: "Attaquant",
        discipline: "football",
        country: "Égypte",
        flag: "🇪🇬",
        age: "32 ans",
        club: "Liverpool",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
        bio: "Mohamed Salah est une star mondiale du football, connu pour sa vitesse et son efficacité devant le but. Il est l'un des meilleurs attaquants de sa génération.",
        stats: {
            "Buts en carrière": "200+",
            "Statut": "Top scorer",
            "Trophées": "Champion UCL",
            "Club actuel": "Liverpool"
        },
        achievements: [
            "🏆 Vainqueur Ligue des Champions",
            "⚽ Plus de 200 buts en carrière",
            "🥇 Meilleur buteur Premier League",
            "🏆 Ballon d'Or africain (multiple)"
        ],
        socialMedia: {
            instagram: "https://www.instagram.com/mosalah/",
            twitter: "https://twitter.com/MoSalah"
        }
    },
    
    oshoala: {
        id: "oshoala",
        name: "Asisat Oshoala",
        sport: "Football",
        poste: "Attaquante",
        discipline: "football",
        country: "Nigeria",
        flag: "🇳🇬",
        age: "29 ans",
        club: "FC Barcelona",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
        bio: "Oshoala est l'une des meilleures footballeuses africaines, multiple Ballon d'Or africain. Elle domine le football féminin avec son talent exceptionnel.",
        stats: {
            "Ballons d'Or africain": "5",
            "Statut": "Top scorer",
            "Trophées": "Championne",
            "Club actuel": "FC Barcelona"
        },
        achievements: [
            "🏆 5x Ballon d'Or africain",
            "⚽ Meilleure buteuse africaine",
            "🏆 Championne avec Barcelone",
            "🥇 Icône du football féminin"
        ],
        socialMedia: {
            instagram: "https://www.instagram.com/asioshoala/",
            twitter: "https://twitter.com/AsisatOshoala"
        }
    },
    
    embiid: {
        id: "embiid",
        name: "Joel Embiid",
        sport: "Basketball",
        poste: "Pivot",
        discipline: "basketball",
        country: "Cameroun",
        flag: "🇨🇲",
        age: "30 ans",
        club: "Philadelphia 76ers",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
        bio: "MVP NBA, Embiid est l'un des meilleurs pivots du monde. Sa domination des deux côtés du terrain fait de lui un joueur unique.",
        stats: {
            "Points par match": "30+",
            "Rebonds": "10+",
            "Statut": "MVP NBA",
            "Club actuel": "76ers"
        },
        achievements: [
            "🏆 MVP NBA 2023",
            "🏆 7x NBA All-Star",
            "🏆 Champion olympique 2024",
            "📊 30+ points par match"
        ],
        socialMedia: {
            instagram: "https://www.instagram.com/joelembiid/",
            twitter: "https://twitter.com/JoelEmbiid"
        }
    },
    
    siakam: {
        id: "siakam",
        name: "Pascal Siakam",
        sport: "Basketball",
        poste: "Ailier-fort",
        discipline: "basketball",
        country: "Cameroun",
        flag: "🇨🇲",
        age: "30 ans",
        club: "Indiana Pacers",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
        bio: "Champion NBA, Siakam est une star africaine du basketball. Sa polyvalence et son éthique de travail font de lui un joueur d'élite.",
        stats: {
            "Points par match": "20+",
            "Statut": "Champion NBA",
            "Distinctions": "All-Star",
            "Club actuel": "NBA"
        },
        achievements: [
            "🏆 Champion NBA 2019",
            "🏀 NBA All-Star",
            "📊 20+ points par match",
            "🥇 Most Improved Player"
        ],
        socialMedia: {
            instagram: "https://www.instagram.com/pskills43/",
            twitter: "https://twitter.com/pskills43"
        }
    },
    
    kipyegon: {
        id: "kipyegon",
        name: "Faith Kipyegon",
        sport: "Athlétisme",
        poste: "Demi-fond",
        discipline: "athletisme",
        country: "Kenya",
        flag: "🇰🇪",
        age: "30 ans",
        club: "—",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop",
        bio: "Championne olympique, dominatrice du 1500m. Faith Kipyegon est l'une des plus grandes athlètes de tous les temps sur cette distance.",
        stats: {
            "Spécialité": "1500m",
            "Médailles olympiques": "Or",
            "Records": "Mondiaux",
            "Statut": "Championne"
        },
        achievements: [
            "🥇 Championne olympique",
            "🌍 Records mondiaux 1500m",
            "🏆 Championne du monde",
            "⭐ Dominatrice de sa discipline"
        ],
        socialMedia: {
            instagram: "https://www.instagram.com/faithkipyegon/",
            twitter: "https://twitter.com/FaithKipyegon"
        }
    },
    
    omanyala: {
        id: "omanyala",
        name: "Ferdinand Omanyala",
        sport: "Athlétisme",
        poste: "Sprinteur",
        discipline: "athletisme",
        country: "Kenya",
        flag: "🇰🇪",
        age: "28 ans",
        club: "—",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop",
        bio: "Recordman africain du 100m avec un temps de 9.77 secondes. Il est devenu une icône du sprint africain et inspire toute une génération.",
        stats: {
            "Record": "9.77s",
            "Spécialité": "100m",
            "Statut": "Champion",
            "Rang": "Top africain"
        },
        achievements: [
            "⚡ Record d'Afrique 100m (9.77s)",
            "🏆 Champion d'Afrique 2022",
            "🏆 Champion du Commonwealth",
            "🥇 Médaillé d'or Jeux Africains"
        ],
        socialMedia: {
            instagram: "https://www.instagram.com/ferdiomanyala/",
            twitter: "https://twitter.com/Ferdiomanyala"
        }
    },
    
    modoulo: {
        id: "modoulo",
        name: "Modou Lô",
        sport: "Lutte",
        poste: "Lutteur",
        discipline: "lutte",
        country: "Sénégal",
        flag: "🇸🇳",
        age: "—",
        club: "—",
        image: "images/télécharger (70).jpeg",
        bio: "Champion emblématique de la lutte sénégalaise. Connu pour sa puissance, sa technique et son charisme, il est l'un des lutteurs les plus populaires du Sénégal.",
        stats: {
            "Victoires": "20+",
            "Statut": "Champion",
            "Écurie": "Rock Énergie",
            "Titres": "Multiple"
        },
        achievements: [
            "🏆 Champion du Sénégal",
            "💪 Plus de 20 victoires",
            "⭐ Roi des arènes",
            "🎖️ Légende de la lutte"
        ],
        socialMedia: {
            instagram: "https://www.instagram.com/modou_lo_officiel/",
            twitter: null
        }
    },
    
    ballagaye: {
        id: "ballagaye",
        name: "Balla Gaye 2",
        sport: "Lutte",
        poste: "Lutteur",
        discipline: "lutte",
        country: "Sénégal",
        flag: "🇸🇳",
        age: "—",
        club: "—",
        image: "images/télécharger (72).jpeg",
        bio: "Ancien roi des arènes, Balla Gaye 2 a marqué l'histoire de la lutte sénégalaise avec une carrière légendaire remplie de victoires mémorables.",
        stats: {
            "Statut": "Champion",
            "Carrière": "Légendaire",
            "Victoires": "Multiple",
            "Titre": "Ancien roi"
        },
        achievements: [
            "🏆 Ancien roi des arènes",
            "💪 Carrière légendaire",
            "⭐ Victoires historiques",
            "🎖️ Icône de la lutte"
        ],
        socialMedia: {
            instagram: "https://www.instagram.com/ballagaye2_officiel/",
            twitter: null
        }
    }
};

// Fonction pour obtenir un athlète par ID
function getAthleteById(id) {
    return athletes[id] || null;
}

// Fonction pour obtenir tous les athlètes
function getAllAthletes() {
    return Object.values(athletes);
}

// Fonction pour obtenir les athlètes par discipline
function getAthletesByDiscipline(discipline) {
    return Object.values(athletes).filter(athlete => athlete.discipline === discipline);
}

// Fonction pour obtenir les athlètes par pays
function getAthletesByCountry(country) {
    return Object.values(athletes).filter(athlete => athlete.country === country);
}
