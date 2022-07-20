import en from 'vuetify/src/locale/en'

export default {
    ...en,
    title: "Software Engineer | Scrum Master",
    about: "",
    close: "Close",
    "pdf-button": "My resume",

    langs: {
        header: "Languages",
        fr: "French",
        en: "English",
        natal: "Native language",
        professional: "Professional proficiency",
    },

    "experiences-title": "Experiences",
    experiences: {
        tools: {
            dates: "March 2021 - Today",
            title: "Software Engineer | Scrum Master",

            two: "Facilitation of the Scrum rituals, team self-organization and agile process continual improvement",
            three:
        "Involvement in all phases of an US¹, refinement, implementation², delivery, deployment, supervision and technical support",
            four: "Functional and technical training of our new team members",

            us: "¹ User Story",
            implementation:
        "² Development, reviews, functional tests (writing and execution), specifications",
        },
        alten: {
            dates: "August 2020 - February 2021",
            title: "Innovation consultant intern",

            two: "Leading and contribution to a blockchains' state of the art, use of a blockchain",
            three:
        "Writing of functional and technical specifications, of an architecture document and a scientific and technical assessment",
        },
        old: {
            title: "Other experiences",
            eurosys: {
                title: "Eurosys - ExtJS analysis and development",
                dates: "June - August 2019",
                value:
          "Analysis in preparation for a major version upgrade of ExtJS, implementation of multiple functionalities",
            },
            ddt: {
                title: "DDT¹ - Java & Swing analysis and development",
                dates: "August 2018",
                value: "T.A.GEDOFIS - Java / Swing - CSV import & export",
                caption: "¹ Direction Départementale des Territoires",
            },
            ufcv: {
                title: "UFCV² - Formateur BAFA",
                dates: "February, April and August 2017",
                value: "Knownledge transfer, training facilitation",
                caption: "² Union Française des Centres de Vacances",
            },
            cgcv: {
                title: "CGCV³ - Animateur BAFA",
                dates: "July 2016 and 2017",
                value: "Activity facilitation",
                caption: "³ C'est Génial Comme Vacances",
            },
            dreal: {
                title: "DREAL⁴ - Découverte",
                dates: "June 2016",
                value: "Version upgrade of linux servers, setting up of IP telephony",
                caption:
          "⁴ Direction Régionale de l'Environnement, de l'Aménagement et du Logement",
            },
        },
    },

    "projects-title": "Projects",
    projects: {
        fortheberry: {
            story:
        "Play with your friends or colleagues locally. In a world filled with strawberries (main wealth), greedy monsters stole them all. As the kingdom's princesses, you must retrieve the strawberries from those malicious monsters.",
            context:
        "Developed with Unity and C# with the IDE¹ Rider (or Visual Studio for some), For The Berry is a MVP² on which you can connect multiple gamepads to control multiple princesses. Choose the weapon you like, a bow ? A sword ? A staff ? And vanquish the monsters and bosses to retrieve all the stolen strawberries.",
            ide: "¹ Integrated Development Environment",
            mvp: "² Minimum Viable Product",
            subtitle: "Couch video game, Beat Them All",
        },
        shareyourfit: {
            story:
        "You don't know how to use gym's machines ? Then you're at the right place, go to your favorite gym and scan our code QR on a machine. You'll be redirected to our application where you will be able to watch multiple exercises for this machine. You can also search exercises based on multiple criteria, the muscles you want to work on, the machine you want to use, etc.",
            context:
        "Developed with Java and Android Studio, Share Your Fit is a draft bound for gyms and users. Allowing them to record, consult and search exercises.",
            subtitle: "Consultation of exercices in gym",
        },
        gestionepi: {
            story:
        "In order to process PPE's¹ life cycle, Gestion EPI allows you to register, follow, verify, and categorise all of yours equipments. Execute all inspections directly online for every PPE you added, verify the checks and take pictures to save a visual state of the equipment.",
            context:
        "Developed with PHP and Javascript (JQuery), Gestion EPI is a MVP² for the processing of PPE's. Allowing a company (specifically a school providing courses to tree-trimmer students when we developed it) to make all the inspections digitally.",
            epi: "¹ Personal Protection Equipment",
            mvp: "² Minimum Viable Product",
            subtitle: "Personal Protection Equipment management",
        },
        tagedofis: {
            story:
        "Retrieve all non-sent or unregistered (from the municipalities) development fees. Generate stats and pivot table to discuss the matter with the municipalities. Search and filter all register fees from the last five years.",
            context:
        "Developed with Java and Swing, T.A.GEDOFIS is a specific software developed for the DDT¹ of Vienne (French department). Importing a part of the national database in T.A.GEDOFIS helped them recover missing improvement taxes (generally not sent by the municipalities to the DDT, or just non-existent).",
            ddt: "¹ Direction Départementale des Territoires",
            subtitle: "Development fees search",
        },
    },

    "educations-title": "Diplomas & Certifications",
    educations: {
        "psm-one": {
            dates: "June 2022",
            title: "Professional Scrum Master™ I",
        },
        uqac: {
            dates: "August 2019 - February 2021",
            title: "Master degree in computer science",
        },
        polytech: {
            dates: "September 2017 - February 2021",
            title: "Computer engineering degree",
        },
    },

    "skills-title": "Skills",
    "soft-skills": {
        one: "Meticulous / Attention to detail",
        two: "Organisation",
    },
    "hard-skills": {
        tests: "Testing",
        database: "Database",
        tools: "Tools",
        "elastic-stack": "ELK stack",
    },

    "interests-title": "Interests",
    interests: {
        basketball: "Basketball",
        tvtime: "TV Shows & Movies",
        games: "Video games",
    },
};
