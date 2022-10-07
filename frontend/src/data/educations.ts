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
        src: "/educations/psmi.webp",
        srcset: "/educations/psmi.webp 229w",

        diploma: "educations[0].diploma",
        caption: undefined,
        skills: undefined
    },
    {
        title: "UQAC¹",
        dates: "educations[1].dates",
        src: "/educations/uqac-small.webp",
        srcset: "/educations/uqac-large.webp 1024w, /educations/uqac.webp 512w, /educations/uqac-small.webp 256w",

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
        src: "/educations/polytechtours-small.webp",
        srcset: "/educations/polytechtours-large.webp 1571w, /educations/polytechtours.webp 786w, /educations/polytechtours-small.webp 393w",

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