import {
    android,
    bootstrap, c, cplusplus,
    csharp,
    dotnet,
    hibernate,
    html5,
    java,
    javascript, jquery,
    moleculer, perforce, php, python, qt,
    spring, unity
} from "@/plugins/devicon";

export default [
    {
        title: "PSM I",
        dates: "educations[0].dates",
        icon: "/educations/psmi.svg",
        diploma: "educations[0].diploma",
        caption: undefined,
        skills: undefined
    },
    {
        title: "UQAC¹",
        dates: "educations[1].dates",
        icon: "/educations/uqac.jpg",
        diploma: "educations[1].diploma",
        caption: "¹ Université du Québec à Chicoutimi",
        skills: [
            { icon: java, name: "Java" },
            { icon: spring, name: "Spring" },
            { icon: hibernate, name: "Hibernate" },
            { icon: android, name: "Android" },

            { icon: javascript, name: "Javascript" },
            { icon: moleculer, name: "Moleculer" },

            { icon: html5, name: "HTML" },
            { icon: bootstrap, name: "Bootstrap" },

            { icon: csharp, name: "C#" },
            { icon: dotnet, name: ".NET Framework" },

            { icon: perforce, name: "Perforce" },
            { icon: unity, name: "Unity" },
        ]
    },
    {
        title: "Polytech Tours",
        dates: "educations[2].dates",
        icon: "/educations/polytechtours.jpg",
        diploma: "educations[2].diploma",
        caption: undefined,
        skills: [
            { icon: java, name: "Java" },
            { icon: hibernate, name: "Hibernate" },

            { icon: html5, name: "HTML" },
            { icon: bootstrap, name: "Bootstrap" },

            { icon: javascript, name: "Javascript" },
            { icon: jquery, name: "JQuery" },

            { icon: python, name: "Python" },
            { icon: php, name: "PHP" },

            { icon: c, name: "C" },
            { icon: cplusplus, name: "C++" },
            { icon: qt, name: "Qt" },
        ],
    },
];