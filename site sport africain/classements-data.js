// Base de données des classements par discipline
const classementsData = {
    football: {
        hommes: [
            {
                rang: 1,
                nom: "Sadio Mané",
                pays: "🇸🇳 Sénégal",
                club: "Al-Nassr FC",
                image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop",
                stats: []
            },
            {
                rang: 2,
                nom: "Victor Osimhen",
                pays: "🇳🇬 Nigeria",
                club: "Galatasaray",
                image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop",
                stats: []
            },
            {
                rang: 3,
                nom: "Mohamed Salah",
                pays: "🇪🇬 Égypte",
                club: "Liverpool FC",
                image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=400&fit=crop",
                stats: []
            },
            {
                rang: 4,
                nom: "Achraf Hakimi",
                pays: "🇲🇦 Maroc",
                club: "Paris Saint-Germain",
                image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop",
                stats: []
            },
            {
                rang: 5,
                nom: "Riyad Mahrez",
                pays: "🇩🇿 Algérie",
                club: "Al-Ahli Saudi FC",
                image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop",
                stats: []
            },
            {
                rang: 6,
                nom: "Édouard Mendy",
                pays: "🇸🇳 Sénégal",
                club: "Al-Ahli Saudi FC",
                image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=400&fit=crop",
                stats: []
            }
        ],
        femmes: [
            {
                rang: 1,
                nom: "Asisat Oshoala",
                pays: "🇳🇬 Nigeria",
                club: "Bay FC",
                image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop",
                stats: []
            },
            {
                rang: 2,
                nom: "Thembi Kgatlana",
                pays: "🇿🇦 Afrique du Sud",
                club: "Tigres UANL",
                image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop",
                stats: []
            },
            {
                rang: 3,
                nom: "Ajara Nchout",
                pays: "🇨🇲 Cameroun",
                club: "Inter Milan",
                image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=400&fit=crop",
                stats: []
            }
        ],
        performance: [
            {
                rang: 1,
                joueur: "Mohamed Salah",
                pays: "🇪🇬 Égypte",
                buts: 32,
                passes: 18,
                matchs: 38
            },
            {
                rang: 2,
                joueur: "Victor Osimhen",
                pays: "🇳🇬 Nigeria",
                buts: 28,
                passes: 12,
                matchs: 35
            },
            {
                rang: 3,
                joueur: "Sadio Mané",
                pays: "🇸🇳 Sénégal",
                buts: 25,
                passes: 15,
                matchs: 36
            },
            {
                rang: 4,
                joueur: "Riyad Mahrez",
                pays: "🇩🇿 Algérie",
                buts: 22,
                passes: 20,
                matchs: 34
            },
            {
                rang: 5,
                joueur: "Achraf Hakimi",
                pays: "🇲🇦 Maroc",
                buts: 8,
                passes: 16,
                matchs: 40
            }
        ]
    },
    basketball: {
        hommes: [
            {
                rang: 1,
                nom: "Joel Embiid",
                pays: "🇨🇲 Cameroun",
                club: "Philadelphia 76ers",
                image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop",
                stats: ["🏀 34.7 pts/match", "📊 11.0 reb/match"]
            },
            {
                rang: 2,
                nom: "Giannis Antetokounmpo",
                pays: "🇬🇷🇳🇬 Grèce/Nigeria",
                club: "Milwaukee Bucks",
                image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=400&h=400&fit=crop",
                stats: ["🏀 31.1 pts/match", "📊 11.8 reb/match"]
            },
            {
                rang: 3,
                nom: "Pascal Siakam",
                pays: "🇨🇲 Cameroun",
                club: "Indiana Pacers",
                image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400&h=400&fit=crop",
                stats: ["🏀 21.3 pts/match", "📊 7.8 reb/match"]
            },
            {
                rang: 4,
                nom: "Bam Adebayo",
                pays: "🇺🇸🇳🇬 USA/Nigeria",
                club: "Miami Heat",
                image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop",
                stats: ["🏀 19.3 pts/match", "📊 10.4 reb/match"]
            },
            {
                rang: 5,
                nom: "OG Anunoby",
                pays: "🇬🇧🇳🇬 UK/Nigeria",
                club: "New York Knicks",
                image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=400&h=400&fit=crop",
                stats: ["🏀 14.7 pts/match", "🛡️ 2.1 def/match"]
            },
            {
                rang: 6,
                nom: "Clint Capela",
                pays: "🇨🇭🇨🇩 Suisse/RD Congo",
                club: "Atlanta Hawks",
                image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400&h=400&fit=crop",
                stats: ["🏀 11.5 pts/match", "📊 10.6 reb/match"]
            }
        ],
        femmes: [
            {
                rang: 1,
                nom: "Awak Kuier",
                pays: "🇮🇹🇸🇸 Italie/Soudan du Sud",
                club: "Dallas Wings",
                image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop",
                stats: ["🏀 8.5 pts/match", "📊 4.2 reb/match"]
            },
            {
                rang: 2,
                nom: "Elizabeth Williams",
                pays: "🇺🇸🇳🇬 USA/Nigeria",
                club: "Chicago Sky",
                image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=400&h=400&fit=crop",
                stats: ["🏀 7.3 pts/match", "📊 5.8 reb/match"]
            },
            {
                rang: 3,
                nom: "Ezi Magbegor",
                pays: "🇦🇺🇳🇬 Australie/Nigeria",
                club: "Seattle Storm",
                image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400&h=400&fit=crop",
                stats: ["🏀 12.7 pts/match", "🛡️ 1.9 blk/match"]
            }
        ],
        performance: [
            {
                rang: 1,
                joueur: "Joel Embiid",
                equipe: "Philadelphia 76ers",
                points: 34.7,
                rebonds: 11.0,
                passes: 5.6
            },
            {
                rang: 2,
                joueur: "Giannis Antetokounmpo",
                equipe: "Milwaukee Bucks",
                points: 31.1,
                rebonds: 11.8,
                passes: 5.7
            },
            {
                rang: 3,
                joueur: "Pascal Siakam",
                equipe: "Indiana Pacers",
                points: 21.3,
                rebonds: 7.8,
                passes: 4.3
            },
            {
                rang: 4,
                joueur: "Bam Adebayo",
                equipe: "Miami Heat",
                points: 19.3,
                rebonds: 10.4,
                passes: 3.9
            },
            {
                rang: 5,
                joueur: "OG Anunoby",
                equipe: "New York Knicks",
                points: 14.7,
                rebonds: 4.2,
                passes: 2.1
            }
        ]
    },
    athletisme: {
        hommes: [
            {
                rang: 1,
                nom: "Eliud Kipchoge",
                pays: "🇰🇪 Kenya",
                club: "Marathon",
                image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=400&fit=crop",
                stats: ["🏅 2x Champion Olympique", "⏱️ 2:01:09 (Record)"]
            },
            {
                rang: 2,
                nom: "Ferdinand Omanyala",
                pays: "🇰🇪 Kenya",
                club: "100m Sprint",
                image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop",
                stats: ["⚡ 9.77s (Record africain)", "🏅 Champion d'Afrique"]
            },
            {
                rang: 3,
                nom: "Joshua Cheptegei",
                pays: "🇺🇬 Ouganda",
                club: "5000m / 10000m",
                image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=400&h=400&fit=crop",
                stats: ["🏅 Champion Olympique", "🌍 Record du monde 10000m"]
            },
            {
                rang: 4,
                nom: "Kelvin Kiptum",
                pays: "🇰🇪 Kenya",
                club: "Marathon",
                image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=400&fit=crop",
                stats: ["⏱️ 2:00:35 (Record)", "🏅 Champion Chicago"]
            },
            {
                rang: 5,
                nom: "Emmanuel Korir",
                pays: "🇰🇪 Kenya",
                club: "800m",
                image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop",
                stats: ["🏅 Champion Olympique", "⏱️ 1:42.05"]
            },
            {
                rang: 6,
                nom: "Soufiane El Bakkali",
                pays: "🇲🇦 Maroc",
                club: "3000m Steeple",
                image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=400&h=400&fit=crop",
                stats: ["🏅 Champion Olympique", "⏱️ 7:58.15"]
            }
        ],
        femmes: [
            {
                rang: 1,
                nom: "Faith Kipyegon",
                pays: "🇰🇪 Kenya",
                club: "1500m",
                image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=400&fit=crop",
                stats: ["🏅 2x Championne Olympique", "🌍 Record du monde 1500m"]
            },
            {
                rang: 2,
                nom: "Letesenbet Gidey",
                pays: "🇪🇹 Éthiopie",
                club: "5000m / 10000m",
                image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop",
                stats: ["🌍 Record du monde 5000m", "🏅 Championne du monde"]
            },
            {
                rang: 3,
                nom: "Tigst Assefa",
                pays: "🇪🇹 Éthiopie",
                club: "Marathon",
                image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=400&h=400&fit=crop",
                stats: ["⏱️ 2:11:53 (Record)", "🏅 Championne Berlin"]
            },
            {
                rang: 4,
                nom: "Marie-Josée Ta Lou",
                pays: "🇨🇮 Côte d'Ivoire",
                club: "100m / 200m",
                image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=400&fit=crop",
                stats: ["⚡ 10.72s (100m)", "🏅 Médaillée mondiale"]
            }
        ],
        performance: [
            {
                discipline: "100m Hommes",
                athlete: "Ferdinand Omanyala",
                pays: "🇰🇪 Kenya",
                performance: "9.77s",
                annee: 2021
            },
            {
                discipline: "Marathon Hommes",
                athlete: "Kelvin Kiptum",
                pays: "🇰🇪 Kenya",
                performance: "2:00:35",
                annee: 2023
            },
            {
                discipline: "1500m Femmes",
                athlete: "Faith Kipyegon",
                pays: "🇰🇪 Kenya",
                performance: "3:49.04",
                annee: 2023
            },
            {
                discipline: "10000m Hommes",
                athlete: "Joshua Cheptegei",
                pays: "🇺🇬 Ouganda",
                performance: "26:11.00",
                annee: 2020
            },
            {
                discipline: "Marathon Femmes",
                athlete: "Tigst Assefa",
                pays: "🇪🇹 Éthiopie",
                performance: "2:11:53",
                annee: 2023
            }
        ]
    },
    lutte: {
        hommes: [
            {
                rang: 1,
                nom: "Balla Gaye 2",
                pays: "🇸🇳 Sénégal",
                club: "Écurie Fass",
                image: "images/télécharger (70).jpeg",
                stats: ["🏅 Champion national", "💪 45 victoires"]
            },
            {
                rang: 2,
                nom: "Modou Lô",
                pays: "🇸🇳 Sénégal",
                club: "Écurie Rock Énergie",
                image: "images/télécharger (71).jpeg",
                stats: ["🏅 Roi des arènes", "💪 52 victoires"]
            },
            {
                rang: 3,
                nom: "Eumeu Sène",
                pays: "🇸🇳 Sénégal",
                club: "Écurie Lansar",
                image: "images/télécharger (72).jpeg",
                stats: ["🏅 Champion 2023", "💪 38 victoires"]
            },
            {
                rang: 4,
                nom: "Tapha Tine",
                pays: "🇸🇳 Sénégal",
                club: "Écurie Fass",
                image: "images/télécharger (73).jpeg",
                stats: ["🏅 Vice-champion", "💪 32 victoires"]
            },
            {
                rang: 5,
                nom: "Bombardier",
                pays: "🇸🇳 Sénégal",
                club: "Écurie Parcelles",
                image: "images/télécharger (70).jpeg",
                stats: ["🏅 Champion régional", "💪 28 victoires"]
            },
            {
                rang: 6,
                nom: "Ama Baldé",
                pays: "🇸🇳 Sénégal",
                club: "Écurie Lansar",
                image: "images/télécharger (71).jpeg",
                stats: ["🏅 Finaliste 2024", "💪 35 victoires"]
            }
        ],
        performance: [
            {
                rang: 1,
                lutteur: "Modou Lô",
                ecurie: "Rock Énergie",
                victoires: 52,
                defaites: 8,
                titres: 5
            },
            {
                rang: 2,
                lutteur: "Balla Gaye 2",
                ecurie: "Fass",
                victoires: 45,
                defaites: 6,
                titres: 4
            },
            {
                rang: 3,
                lutteur: "Eumeu Sène",
                ecurie: "Lansar",
                victoires: 38,
                defaites: 5,
                titres: 3
            },
            {
                rang: 4,
                lutteur: "Ama Baldé",
                ecurie: "Lansar",
                victoires: 35,
                defaites: 7,
                titres: 2
            },
            {
                rang: 5,
                lutteur: "Tapha Tine",
                ecurie: "Fass",
                victoires: 32,
                defaites: 4,
                titres: 2
            },
            {
                rang: 6,
                lutteur: "Bombardier",
                ecurie: "Parcelles",
                victoires: 28,
                defaites: 6,
                titres: 1
            }
        ]
    }
};
