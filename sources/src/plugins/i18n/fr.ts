import fr from "vuetify/src/locale/fr";

export default {
    ...fr,
    title: "Ingénieur développement | Scrum Master",
    about: "",
    close: "Fermer",
    "pdf-button": "Mon CV",

    langs: {
        header: "Langues",
        fr: "Français",
        en: "Anglais",
        natal: "Langue natale",
        professional: "Compétence professionnelle",
    },

    "experiences-title": "Expériences",
    experiences: {
        tools: {
            dates: "Mars 2021 - Aujourd'hui",
            title: "Ingénieur développement | Scrum Master",
            one: "Développement backend Java avec Spring & Quarkus, frontend Angular, script CLI¹ python, mock flask et wiremock-studio, CI/CD²",
            two: "Facilitation des cérémonies Scrum, de l'auto-organisation de l'équipe et de l'amélioration continue du processus agile",
            three:
        "Participation à toutes les phases d'une US³, affinage, implémentation⁴, livraison, déploiement, supervision et support technique",
            four: "Formation fonctionnelle et technique des nouveaux acteurs",

            cli: "¹ Command-Line Interface",
            cicd: "² Continuous Integration / Continuous Delivery",
            us: "³ User Story",
            implementation:
        "⁴ Développement, relectures, tests fonctionnels (rédaction et exécution), spécifications",
        },
        alten: {
            dates: "Août 2020 - Février 2021",
            title: "Stagiaire consultant innovation",
            one: "Développement ElectronJS, NestJS et utilisation d'une blockchain",
            two: "Pilotage et participation à un état de l'art des Blockchains",
            three:
        "Rédaction de spécifications fonctionnelles, d'un document d'architecture et d'un bilan scientifique et technique",
        },
        old: {
            title: "Autres expériences",
            eurosys: {
                title: "Eurosys - Analyse et développement ExtJS",
                dates: "Juin - Août 2019",
                value:
          "Analyse en vue d'une montée de version majeure ExtJS, développement de plusieurs fonctionnalités",
            },
            ddt: {
                title: "DDT¹ - Analyse et développement Java & Swing",
                dates: "Août 2018",
                value: "T.A.GEDOFIS - Java / Swing - Import & Export CSV",
                caption: "¹ Direction Départementale des Territoires",
            },
            ufcv: {
                title: "UFCV² - Formateur BAFA",
                dates: "Février, Avril et Août 2017",
                value: "Transfert de connaissance, animation de séances de formation",
                caption: "² Union Française des Centres de Vacances",
            },
            cgcv: {
                title: "CGCV³ - Animateur BAFA",
                dates: "Juillet 2016 et 2017",
                value: "Animation d'activités",
                caption: "³ C'est Génial Comme Vacances",
            },
            dreal: {
                title: "DREAL⁴ - Découverte",
                dates: "Juin 2016",
                value:
          "Mise à jour de serveurs linux, mise en place de la téléphonie IP",
                caption:
          "⁴ Direction Régionale de l'Environnement, de l'Aménagement et du Logement",
            },
        },
    },

    "projects-title": "Projets",
    projects: {
        fortheberry: {
            story:
        "Jouez avec vos amis et collègues dans votre canapé ! Dans un monde où la fraise est la richesse principale, des monstres malveillants les ont toutes volées ! Incarnez les princesses du royaume et récupérer toutes les fraises.",
            context:
        "Développé avec Unity, C# et l'IDE¹ Rider (où Visual Studio pour certains), For The Berry est un MVP² sur lequel vous pouvez connecter plusieurs manettes afin de contrôler plusieurs princesses. Choisissez votre arme de prédilection, l'épée ? l'arc ? le bâton ? Et sortez vainqueurs des monstres et boss pour ramener les fraises volées.",
            ide: "¹ Integrated Development Environment",
            mvp: "² Minimum Viable Product",
            subtitle: "Jeux vidéo canapé, Beat Them All",
        },
        shareyourfit: {
            story:
        "Vous ne savez pas comment utiliser les machines d'une salle de sport ? Alors vous êtes au bon endroit, allez dans votre salle de sport préférée et scannez nos QR code présents sur chaque machine. Vous pourrez ainsi via Share Your Fit regarder plusieurs exercices applicables à la machine. Ce n'est pas tout, vous pouvez aussi rechercher des exercices dans l'application au travers de plusieurs critères, le muscle que souhaitez travailler, la machine que vous souhaitez utiliser, etc.",
            context:
        "Développé avec Java et Android Studio, Share Your Fit est une ébauche pour les salles de sports et leurs utilisateurs. Ils peuvent ainsi enregistrer, consulter et rechercher des exercices.",
            subtitle: "Consultation d'exercices dans les salles de sport",
        },
        gestionepi: {
            story:
        "Vous souhaitez gérer vos EPI¹ et leur cycle de vie de manière digitale ? Gestion EPI vous permet d'enregistrer, suivre, vérifier et catégoriser tous vos équipements. Faites des inspections directement en ligne pour tous les EPI que vous avez ajouté, vérifiez les points de contrôles et prenez des photos de l'état de votre équipement.",
            context:
        "Développé avec PHP et JavaScript (JQuery), Gestion EPI est un MVP² pour la gestion des EPIs. Permettant à une entreprise (en particulier un lycée d'élagueurs quand nous l'avons développé) de faire toutes les inspections de manière digitale.",
            epi: "¹ Équipement de Protection Individuelle",
            mvp: "² Minimum Viable Product",
            subtitle: "Gestion des Équipement de Protection Individuelle",
        },
        tagedofis: {
            story:
        "Récupérez toutes les taxes d'aménagement non enregistrées ou non envoyées (par les communes). Générez des stats et des tableaux croisés pour discuter de ce sujet avec les communes. Recherchez et filtrez les taxes enregistrées lors des 5 dernières années.",
            context:
        "Développé avec Java et Swing, T.A.GEDOFIS est un logiciel spécifique pour la DDT¹ de la Vienne. En important les données de la base nationale dans l'application, cela leur a permis de retrouver les taxes d'aménagement non transmises par les communes, ou tout simplement non-existantes.",
            ddt: "¹ Direction Départementale des Territoires",
            subtitle: "Recherche de taxes d'aménagement",
        },
    },

    "educations-title": "Diplômes & Certifications",
    educations: {
        "psm-one": {
            dates: "Juin 2022",
            title: "Professional Scrum Master™ I",
        },
        uqac: {
            dates: "Août 2019 - Février 2021",
            title: "Maîtrise informatique",
        },
        polytech: {
            dates: "Septembre 2017 - Février 2021",
            title: "Diplôme d'ingénieur informatique",
        },
    },

    "skills-title": "Compétences",
    "soft-skills": {
        one: "Minutieux / Souci du détail",
        two: "Organisation",
    },
    "hard-skills": {
        tests: "Tests",
        database: "Base de données",
        tools: "Outils",
        "elastic-stack": "Suite ELK",
    },

    "interests-title": "Intérêts",
    interests: {
        basketball: "Basket-ball",
        tvtime: "Séries & Films",
        games: "Jeux vidéos",
    },
};
