// Base de données des articles
const articlesData = {
    1: {
        id: 1,
        sport: "Football",
        discipline: "football",
        category: "football",
        title: "Le Sénégal confirme sa domination en Afrique",
        date: "20 Mars 2026",
        author: "Amadou Diallo",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
        content: `
            <p>Le Sénégal continue d'imposer sa suprématie sur le football africain avec des performances solides et constantes. L'équipe nationale, portée par une génération exceptionnelle de joueurs, enchaîne les victoires et impressionne les observateurs du monde entier.</p>
            
            <h2>Une génération dorée</h2>
            <p>Avec une organisation tactique rigoureuse et des talents individuels de classe mondiale, les Lions de la Teranga restent les grands favoris pour les prochaines compétitions continentales. Le collectif sénégalais fait l'unanimité.</p>
            
            <h2>Un jeu collectif exemplaire</h2>
            <p>La force du Sénégal réside dans son jeu collectif et sa discipline tactique. Chaque joueur connaît parfaitement son rôle et l'exécute avec précision. Cette cohésion fait toute la différence sur le terrain.</p>
            
            <p>Les supporters sénégalais peuvent être fiers de leur équipe nationale qui continue de porter haut les couleurs du pays sur la scène internationale.</p>
        `
    },
    2: {
        id: 2,
        sport: "Football",
        discipline: "football",
        category: "football",
        title: "Sadio Mané toujours décisif avec son club",
        date: "18 Mars 2026",
        author: "Amadou Diallo",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
        content: `
            <p>Sadio Mané continue de briller avec des performances de haut niveau qui confirment son statut de star mondiale. Son impact offensif reste déterminant dans les moments clés des rencontres importantes.</p>
            
            <h2>Un leader sur et en dehors du terrain</h2>
            <p>Au-delà de ses qualités techniques exceptionnelles, Sadio Mané se distingue par son leadership et son engagement. Il inspire ses coéquipiers par l'exemple et tire son équipe vers le haut dans les moments difficiles.</p>
            
            <h2>Des statistiques impressionnantes</h2>
            <p>Cette saison, l'attaquant sénégalais affiche des statistiques remarquables avec de nombreux buts et passes décisives. Sa régularité au plus haut niveau force le respect de tous les observateurs.</p>
            
            <p>Il confirme son statut de leader du football africain et continue d'être une source d'inspiration pour toute une génération de jeunes joueurs.</p>
        `
    },
    3: {
        id: 3,
        sport: "Basketball",
        discipline: "basketball",
        category: "basketball",
        title: "Joel Embiid en feu avec 45 points",
        date: "17 Mars 2026",
        author: "Fatou Ndiaye",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
        content: `
            <p>Joel Embiid a dominé la rencontre avec une performance exceptionnelle de 45 points qui restera dans les annales. Sa puissance physique et sa précision technique ont fait la différence face à une défense pourtant réputée.</p>
            
            <h2>Une domination totale</h2>
            <p>Le pivot camerounais a été intenable sous les panneaux, ajoutant également 12 rebonds et 5 contres à sa ligne statistique. Sa capacité à dominer des deux côtés du terrain fait de lui un joueur unique dans la ligue.</p>
            
            <h2>Un impact décisif</h2>
            <p>Dans les moments cruciaux du match, Embiid a su élever son niveau de jeu pour porter son équipe vers la victoire. Sa détermination et son talent ont fait la différence.</p>
            
            <p>Il s'impose comme l'un des meilleurs joueurs du monde et continue de faire la fierté du basketball africain sur la scène internationale.</p>
        `
    },
    4: {
        id: 4,
        sport: "Basketball",
        discipline: "basketball",
        category: "basketball",
        title: "Le basketball africain en pleine évolution",
        date: "15 Mars 2026",
        author: "Fatou Ndiaye",
        image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&h=600&fit=crop",
        content: `
            <p>Le basketball africain connaît une croissance rapide et impressionnante ces dernières années. De plus en plus de talents émergent sur la scène internationale et font parler d'eux dans les plus grandes ligues mondiales.</p>
            
            <h2>Une nouvelle génération de stars</h2>
            <p>Les jeunes joueurs africains se distinguent par leur athlétisme, leur technique et leur intelligence de jeu. Ils apportent un style unique qui enrichit le basketball mondial.</p>
            
            <h2>Des infrastructures en développement</h2>
            <p>Les infrastructures se développent également sur le continent, avec de nouvelles salles et des programmes de formation de qualité. Cet investissement porte ses fruits avec l'émergence de nombreux talents.</p>
            
            <p>L'avenir du basketball africain s'annonce radieux avec cette nouvelle génération de joueurs exceptionnels.</p>
        `
    },
    5: {
        id: 5,
        sport: "Athlétisme",
        discipline: "athletisme",
        category: "athletisme",
        title: "Record du 100m battu en Afrique",
        date: "14 Mars 2026",
        author: "Kofi Mensah",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop",
        content: `
            <p>Une nouvelle performance historique a été réalisée sur 100 mètres lors du championnat continental. Le niveau de l'athlétisme africain continue de monter avec des chronos de plus en plus impressionnants.</p>
            
            <h2>Une performance exceptionnelle</h2>
            <p>Le nouveau record établi démontre la progression constante des sprinteurs africains. Leur préparation physique et mentale atteint des sommets jamais vus auparavant.</p>
            
            <h2>La domination africaine</h2>
            <p>Les sprinteurs africains dominent de plus en plus les compétitions internationales. Leur explosivité et leur technique font des ravages sur les pistes du monde entier.</p>
            
            <p>Cette performance historique ouvre de nouvelles perspectives pour l'athlétisme africain sur la scène mondiale.</p>
        `
    },
    6: {
        id: 6,
        sport: "Athlétisme",
        discipline: "athletisme",
        category: "athletisme",
        title: "Les marathoniens africains dominent toujours",
        date: "12 Mars 2026",
        author: "Kofi Mensah",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
        content: `
            <p>Les athlètes africains continuent de dominer les marathons mondiaux avec une régularité impressionnante. Leur endurance exceptionnelle et leur discipline d'entraînement font toute la différence.</p>
            
            <h2>Une tradition d'excellence</h2>
            <p>Le Kenya et l'Éthiopie restent les leaders incontestés du marathon mondial. Leurs athlètes raflent les podiums des plus grandes courses internationales année après année.</p>
            
            <h2>Un entraînement rigoureux</h2>
            <p>Le secret de cette domination réside dans un entraînement rigoureux en altitude et une culture de la course profondément ancrée. Les jeunes athlètes grandissent en admirant leurs aînés champions.</p>
            
            <p>Cette suprématie africaine sur le marathon ne semble pas prête de s'arrêter avec l'émergence constante de nouveaux talents.</p>
        `
    },
    7: {
        id: 7,
        sport: "Lutte",
        discipline: "lutte",
        category: "lutte",
        title: "Sa Thiès s'impose comme roi des arènes",
        date: "10 Mars 2026",
        author: "Moussa Sow",
        image: "télécharger (70).jpeg",
        content: `
            <p>Sa Thiès confirme son statut de roi des arènes avec une nouvelle victoire éclatante. Avec une puissance physique impressionnante, il domine ses adversaires et impose son style de combat.</p>
            
            <h2>Une force de la nature</h2>
            <p>Le lutteur sénégalais impressionne par sa puissance brute et sa technique affinée. Chaque combat est une démonstration de force et de maîtrise qui fascine les spectateurs.</p>
            
            <h2>Un champion respecté</h2>
            <p>Il s'impose comme une référence incontournable de la lutte sénégalaise, respecté par ses pairs et adulé par les fans. Son parcours inspire toute une génération de jeunes lutteurs.</p>
            
            <p>Sa Thiès continue d'écrire sa légende dans les arènes sénégalaises avec des performances mémorables.</p>
        `
    },
    8: {
        id: 8,
        sport: "Lutte",
        discipline: "lutte",
        category: "lutte",
        title: "Modou Lô prêt pour un nouveau défi",
        date: "8 Mars 2026",
        author: "Moussa Sow",
        image: "télécharger (71).jpeg",
        content: `
            <p>Modou Lô prépare activement son prochain combat avec une détermination sans faille. Le champion reste concentré sur ses objectifs et affiche une forme physique impressionnante.</p>
            
            <h2>Une préparation intensive</h2>
            <p>L'entraînement du lutteur est rigoureux et méthodique. Chaque séance est pensée pour optimiser sa condition physique et affûter sa technique en vue du grand rendez-vous.</p>
            
            <h2>L'attente des fans</h2>
            <p>Les fans attendent avec impatience un duel spectaculaire qui promet d'être mémorable. L'engouement autour de ce combat est immense et l'atmosphère sera électrique.</p>
            
            <p>Modou Lô est déterminé à offrir un grand spectacle et à défendre son titre avec honneur.</p>
        `
    },
    9: {
        id: 9,
        sport: "Football",
        discipline: "football",
        category: "football",
        title: "CAN 2026 : les favoris se dessinent",
        date: "5 Mars 2026",
        author: "Amadou Diallo",
        image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&h=600&fit=crop",
        content: `
            <p>Les grandes nations africaines se préparent déjà pour la CAN 2026 qui s'annonce passionnante. Les favoris commencent à se dessiner avec plusieurs équipes qui affichent un niveau impressionnant.</p>
            
            <h2>Les prétendants au titre</h2>
            <p>Le Sénégal, tenant du titre, fait figure de favori mais devra composer avec la concurrence du Nigeria, de l'Égypte et de la Côte d'Ivoire. La compétition s'annonce très relevée.</p>
            
            <h2>Une préparation cruciale</h2>
            <p>Les sélectionneurs travaillent déjà sur leurs effectifs et leurs stratégies. Chaque détail compte pour espérer décrocher le précieux trophée continental.</p>
            
            <p>La CAN 2026 promet d'être une édition mémorable avec un niveau de jeu exceptionnel.</p>
        `
    },
    10: {
        id: 10,
        sport: "Basketball",
        discipline: "basketball",
        category: "basketball",
        title: "La NBA attire de plus en plus de talents africains",
        date: "2 Mars 2026",
        author: "Fatou Ndiaye",
        image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=600&fit=crop",
        content: `
            <p>Les joueurs africains continuent de briller en NBA et attirent l'attention des plus grandes franchises. Leur impact sur le jeu moderne est indéniable et leur nombre ne cesse de croître.</p>
            
            <h2>Une présence grandissante</h2>
            <p>De plus en plus de joueurs africains évoluent au plus haut niveau de la NBA. Leur style de jeu unique et leur athlétisme exceptionnel séduisent les recruteurs.</p>
            
            <h2>Des modèles pour la jeunesse</h2>
            <p>Ces joueurs deviennent des modèles pour toute une génération de jeunes africains qui rêvent de suivre leurs traces. Leur réussite inspire et motive.</p>
            
            <p>L'avenir du basketball africain en NBA s'annonce radieux avec cette nouvelle vague de talents exceptionnels.</p>
        `
    }
};

// Fin de la base de données des articles
