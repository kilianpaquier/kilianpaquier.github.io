import {fr} from "vuetify/locale";

export default {
    $vuetify: {
        ...fr
    },
    about: "Passionné par l'informatique depuis la fin du collège, j'apprécie particulièrement soigner les interfaces utilisateurs (IHM), en y mettant du détail mais aussi en proposant des solutions intuitives (listes déroulantes, autocomplétion, etc.). Soucieux de rester le plus polyvalent possible, je cherche toujours à pratiquer mes compétences techniques et fonctionnelles (étude, réponse au besoin et accompagnement du client / Product Owner en particulier).",
    open_to_offers: "Vous souhaitez prendre contact avec moi ? Envoyez-moi un message sur Linkedin !",
    resume: "Mon CV",
    theme: "Changement de thème",
    langs: [
        {
            title: "Français",
            skill: "Langue natale"
        },
        {
            title: "Anglais",
            skill: "Compétence professionnelle"
        }
    ],
    tools_title: "Outils",
    softs_title: "Savoir-être",
    softs: [
        "Minutieux / Souci du détail",
        "Organisation"
    ],
    experiences_title: "Expériences",
    old_experiences_title: "Autres expériences",
    experiences: [
        {
            subtitles: [
                "Ingénieur développement",
                "Octobre 2022 - Aujourd'hui"
            ],
            missions: [
                "Participation aux phases d'affinage, implémentation² et livraison des US¹",
                "Réalisation d'analyses et études techniques pour répondre aux besoins",
            ],
            captions: [
                "¹ User Story",
                "² Développement, relectures, tests fonctionnels (rédaction et exécution), spécifications"
            ]
        },
        {
            subtitles: [
                "Ingénieur développement {'|'} Scrum Master",
                "Mars 2021 - Octobre 2022"
            ],
            missions: [
                "Facilitation des cérémonies Scrum, de l'auto-organisation de l'équipe et de l'amélioration continue du processus agile",
                "Participation à toutes les phases d'une US¹, affinage, implémentation², livraison, déploiement, supervision et support technique",
                "Formation fonctionnelle et technique des nouveaux acteurs"
            ],
            captions: [
                "¹ User Story",
                "² Développement, relectures, tests fonctionnels (rédaction et exécution), spécifications"
            ]
        },
        {
            subtitles: [
                "Stagiaire consultant innovation",
                "Août 2020 - Février 2021"
            ],
            missions: [
                "Pilotage et participation à un état de l'art des Blockchains, utilisation d'une blockchain",
                "Rédaction de spécifications fonctionnelles, d'un document d'architecture et d'un bilan scientifique et technique"
            ]
        },
        {
            subtitles: [
                "Stagiaire étude et développement ExtJS",
                "Juin - Août 2019"
            ]
        },
        {
            subtitles: [
                "Vacataire étude et développement Java & Swing",
                "Août 2018"
            ],
            captions: [
                "¹ Direction Départementale des Territoires"
            ]
        },
        {
            subtitles: [
                "Formateur BAFA",
                "Février, Avril, Août 2017"
            ],
            captions: [
                "² Union Française des Centres de Vacances"
            ]
        },
        {
            subtitles: [
                "Animateur BAFA",
                "Juillet 2016 & 2017"
            ],
            captions: [
                "³ C'est Génial Comme Vacances"
            ]
        },
        {
            subtitles: [
                "Stagiaire découverte réseau",
                "Juin 2016"
            ],
            captions: [
                "⁴ Direction Régionale de l'Environnement, de l'Aménagement et du Logement"
            ]
        }
    ],
    educations_title: "Formations",
    educations: [
        {
            dates: "Juin 2022",
            diploma: "Professional Scrum Master™ I"
        },
        {
            dates: "Août 2019 - Février 2021",
            diploma: "Maîtrise informatique"
        },
        {
            dates: "Septembre 2017 - Février 2021",
            diploma: "Diplôme d'ingénieur informatique"
        }
    ],
    interests_title: "Intérêts",
    interests: [
        "Basket-ball",
        "Séries & Films",
        "Jeux vidéo"
    ],
    projects_title: "Projets",
    projects: [
        {
            text: [
                "Jouez avec vos amis et collègues dans votre canapé ! Dans un monde où la fraise est la richesse principale, des monstres malveillants les ont toutes volées ! Incarnez les princesses du royaume et récupérer toutes les fraises.",
                "Développé avec Unity, C# et l'IDE¹ Rider (où Visual Studio pour certains), For The Berry est un MVP² sur lequel vous pouvez connecter plusieurs manettes afin de contrôler plusieurs princesses. Choisissez votre arme de prédilection, l'épée ? l'arc ? le bâton ? Et sortez vainqueurs des monstres et boss pour ramener les fraises volées."
            ],
            captions: [
                "¹ Integrated Development Environment",
                "² Minimum Viable Product"
            ],
            subtitle: "Jeux vidéo canapé, Beat Them All"
        },
        {
            text: [
                "Vous ne savez pas comment utiliser les machines d'une salle de sport ? Alors vous êtes au bon endroit, allez dans votre salle de sport préférée et scannez nos QR code présents sur chaque machine. Vous pourrez ainsi via Share Your Fit regarder plusieurs exercices applicables à la machine. Ce n'est pas tout, vous pouvez aussi rechercher des exercices dans l'application au travers de plusieurs critères, le muscle que souhaitez travailler, la machine que vous souhaitez utiliser, etc.",
                "Développé avec Java et Android Studio, Share Your Fit est une ébauche pour les salles de sports et leurs utilisateurs. Ils peuvent ainsi enregistrer, consulter et rechercher des exercices."
            ],
            subtitle: "Consultation d'exercices dans les salles de sport"
        },
        {
            text: [
                "Vous souhaitez gérer vos EPI¹ et leur cycle de vie de manière digitale ? Gestion EPI vous permet d'enregistrer, suivre, vérifier et catégoriser tous vos équipements. Faites des inspections directement en ligne pour tous les EPI que vous avez ajouté, vérifiez les points de contrôles et prenez des photos de l'état de votre équipement.",
                "Développé avec PHP et JavaScript (JQuery), Gestion EPI est un MVP² pour la gestion des EPIs. Permettant à une entreprise (en particulier un lycée d'élagueurs quand nous l'avons développé) de faire toutes les inspections de manière digitale."
            ],
            captions: [
                "¹ Équipement de Protection Individuelle",
                "² Minimum Viable Product"
            ],
            subtitle: "Gestion des Équipements de Protection Individuelle"
        },
        {
            text: [
                "Récupérez toutes les taxes d'aménagement non enregistrées ou non envoyées (par les communes). Générez des stats et des tableaux croisés pour discuter de ce sujet avec les communes. Recherchez et filtrez les taxes enregistrées lors des 5 dernières années.",
                "Développé avec Java et Swing, T.A.GEDOFIS est un logiciel spécifique pour la DDT¹ de la Vienne. En important les données de la base nationale dans l'application, cela leur a permis de retrouver les taxes d'aménagement non transmises par les communes, ou tout simplement non-existantes."
            ],
            captions: [
                "¹ Direction Départementale des Territoires"
            ],
            subtitle: "Recherche de taxes d'aménagement"
        }
    ]
}