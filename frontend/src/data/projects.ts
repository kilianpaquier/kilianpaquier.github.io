import {gitlab, itchio} from "@/plugins/devicon";

export const projects = [
    {
        title: undefined,
        titleColor: undefined,
        icon: "/projects/fortheberry.png",

        text: [
            "projects[0].text[0]",
            "projects[0].text[1]"
        ],
        captions: [
            "projects[0].captions[0]",
            "projects[0].captions[1]"
        ],

        codeImg: itchio,
        codeLink: "https://rogue888.itch.io/for-the-berry",
    },
    {
        title: undefined,
        titleColor: undefined,
        icon: "/projects/shareyourfit.png",

        text: [
            "projects[1].text[0]",
            "projects[1].text[1]"
        ],
        captions: undefined,

        codeImg: gitlab,
        codeLink: "https://gitlab.com/kilian-paquier/share-your-fit",
    },
    {
        title: undefined,
        titleColor: undefined,
        icon: "/projects/gestionepi.png",

        text: [
            "projects[2].text[0]",
            "projects[2].text[1]"
        ],
        captions: [
            "projects[2].captions[0]",
            "projects[2].captions[1]"
        ],

        codeImg: gitlab,
        codeLink: "https://gitlab.com/kilian-paquier/gestion-epi",
    },
    {
        title: "T.A.GEDOFIS",
        titleColor: "text-black",
        icon: "/projects/tagedofis.png",

        text: [
            "projects[3].text[0]",
            "projects[3].text[1]"
        ],
        captions: [
            "projects[3].captions[0]"
        ],

        codeImg: gitlab,
        codeLink: "https://gitlab.com/kilian-paquier/tagedofis",
    },
];

export const print_projects = [
    {
        title: "For The Berry",
        subtitle: "projects[0].subtitle",
        icon: "/projects/list/fortheberry.png",
    },
    {
        title: "Share Your Fit",
        subtitle: "projects[1].subtitle",
        icon: "/projects/list/shareyourfit.png",
    },
    {
        title: "Gestion EPI",
        subtitle: "projects[2].subtitle",
        icon: "/projects/list/gestionepi.png",
    },
    {
        title: "T.A.GEDOFIS",
        subtitle: "projects[3].subtitle",
        icon: "/projects/list/tagedofis.png",
    }
];