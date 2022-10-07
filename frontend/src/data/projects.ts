import {gitlab, itchio} from "@/plugins/devicon";

export const projects = [
    {
        title: undefined,
        titleColor: undefined,
        src: "/projects/fortheberry.webp",
        srcset: "/projects/fortheberry.webp 881w, /projects/fortheberry-small.webp 441w",

        text: [
            "projects[0].text[0]",
            "projects[0].text[1]"
        ],
        captions: [
            "projects[0].captions[0]",
            "projects[0].captions[1]"
        ],

        icon: itchio,
        codeLink: "https://rogue888.itch.io/for-the-berry",
    },
    {
        title: undefined,
        titleColor: undefined,
        src: "/projects/shareyourfit.webp",
        srcset: "/projects/shareyourfit.webp 881w, /projects/shareyourfit-small.webp 441w",

        text: [
            "projects[1].text[0]",
            "projects[1].text[1]"
        ],
        captions: undefined,

        icon: gitlab,
        codeLink: "https://gitlab.com/kilian-paquier/share-your-fit",
    },
    {
        title: undefined,
        titleColor: undefined,
        src: "/projects/gestionepi.webp",
        srcset: "/projects/gestionepi.webp 881w, /projects/gestionepi-small.webp 441w",

        text: [
            "projects[2].text[0]",
            "projects[2].text[1]"
        ],
        captions: [
            "projects[2].captions[0]",
            "projects[2].captions[1]"
        ],

        icon: gitlab,
        codeLink: "https://gitlab.com/kilian-paquier/gestion-epi",
    },
    {
        title: "T.A.GEDOFIS",
        titleColor: "text-black",
        src: "/projects/tagedofis.webp",
        srcset: "/projects/tagedofis.webp 881w, /projects/tagedofis-small.webp 441w",

        text: [
            "projects[3].text[0]",
            "projects[3].text[1]"
        ],
        captions: [
            "projects[3].captions[0]"
        ],

        icon: gitlab,
        codeLink: "https://gitlab.com/kilian-paquier/tagedofis",
    },
];

export const print_projects = [
    {
        title: "For The Berry",
        subtitle: "projects[0].subtitle",
        src: "/projects/list/fortheberry.webp",
        srcset: "/projects/list/fortheberry.webp 749w, /projects/list/fortheberry-small.webp 375w",
    },
    {
        title: "Share Your Fit",
        subtitle: "projects[1].subtitle",
        src: "/projects/list/shareyourfit.webp",
        srcset: "/projects/list/shareyourfit.webp 315w",
    },
    {
        title: "Gestion EPI",
        subtitle: "projects[2].subtitle",
        src: "/projects/list/gestionepi.webp",
        srcset: "/projects/list/gestionepi.webp 784w, /projects/list/gestionepi-small.webp 392w",
    },
    {
        title: "T.A.GEDOFIS",
        subtitle: "projects[3].subtitle",
        src: "/projects/list/tagedofis.webp",
        srcset: "/projects/list/tagedofis.webp 154w",
    }
];