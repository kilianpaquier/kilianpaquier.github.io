import {
    angular,
    bitbucket,
    bootstrap,
    camunda,
    docker,
    elasticsearch,
    electron,
    envoy,
    flask,
    gitlab,
    go,
    helm,
    hibernate,
    jasmine,
    java,
    javascript,
    jest,
    karatelabs,
    kubernetes,
    liquibase,
    nestjs,
    postgresql,
    python,
    quarkus,
    redis,
    spring,
    traefik,
    typescript,
} from "@/plugins/devicon";

export const experiences = [
    {
        title: "Sopra Steria",
        src: "/experiences/soprasteria.webp",
        srcset: "/experiences/soprasteria.webp 512w, /experiences/soprasteria-small.webp 256w",
        subtitles: [
            "experiences[0].subtitles[0]",
            "experiences[0].subtitles[1]"
        ],
        missions: [
            "experiences[0].missions[0]",
            "experiences[0].missions[1]"
        ],
        captions: [
            "experiences[0].captions[0]",
            "experiences[0].captions[1]"
        ],
        skills: [
            {icon: go, name: "Go"},
            {icon: camunda, name: "Camunda BPMN"},

            {icon: bitbucket, name: "Bitbucket"},
            {icon: postgresql, name: "Postgresql"},

            {icon: docker, name: "Docker"},
            {icon: kubernetes, name: "Kubernetes"},
            {icon: helm, name: "Helm"},

            {icon: redis, name: "Redis"},
        ]
    },
    {
        title: "Sopra Steria",
        src: "/experiences/soprasteria.webp",
        srcset: "/experiences/soprasteria.webp 512w, /experiences/soprasteria-small.webp 256w",
        subtitles: [
            "experiences[1].subtitles[0]",
            "experiences[1].subtitles[1]"
        ],
        missions: [
            "experiences[1].missions[0]",
            "experiences[1].missions[1]",
            "experiences[1].missions[2]"
        ],
        captions: [
            "experiences[1].captions[0]",
            "experiences[1].captions[1]"
        ],
        skills: [
            {icon: java, name: "Java"},
            {icon: spring, name: "Spring"},
            {icon: quarkus, name: "Quarkus"},
            {icon: hibernate, name: "Hibernate"},

            {icon: typescript, name: "Typescript"},
            {icon: angular, name: "Angular"},
            {icon: bootstrap, name: "Bootstrap"},

            {icon: karatelabs, name: "Karatelabs"},
            {icon: jasmine, name: "Jasmine"},

            {icon: kubernetes, name: "Kubernetes"},
            {icon: docker, name: "Docker"},
            {icon: helm, name: "Helm"},
            {icon: traefik, name: "Traefik proxy"},
            {icon: envoy, name: "Envoy proxy"},

            {icon: postgresql, name: "Postgresql"},
            {icon: liquibase, name: "Liquibase"},

            {icon: gitlab, name: "GitLab CI/CD"},

            {icon: elasticsearch, name: "Elasticsearch"},

            {icon: python, name: "Python"},
            {icon: flask, name: "Flask"},
        ]
    },
    {
        title: "Alten",
        src: "/experiences/alten.webp",
        srcset: "/experiences/alten-large.webp 1221w, /experiences/alten.webp 611w, /experiences/alten-small.webp 306w",
        subtitles: [
            "experiences[2].subtitles[0]",
            "experiences[2].subtitles[1]"
        ],
        missions: [
            "experiences[2].missions[0]",
            "experiences[2].missions[1]"
        ],
        captions: undefined,
        skills: [
            {icon: typescript, name: "Typescript"},
            {icon: bootstrap, name: "Bootstrap"},
            {icon: nestjs, name: "NestJS"},

            {icon: javascript, name: "Javascript"},
            {icon: electron, name: "ElectronJS"},
            {icon: jest, name: "Jest"},
        ],
    },
];

export const old_experiences = {
    experiences: [
        {
            title: "Eurosys",
            src: "/experiences/eurosys.webp",
            srcset: "/experiences/eurosys.webp 141w",
            subtitles: [
                "experiences[3].subtitles[0]",
                "experiences[3].subtitles[1]"
            ]
        },
        {
            title: "DDT¹",
            src: "/experiences/ddt.webp",
            srcset: "/experiences/ddt.webp 1000w, /experiences/ddt-small.webp 500w",
            subtitles: [
                "experiences[4].subtitles[0]",
                "experiences[4].subtitles[1]"
            ]
        },
        {
            title: "UFCV²",
            src: "/experiences/ufcv.webp",
            srcset: "/experiences/ufcv.webp 1417w, /experiences/ufcv-small.webp 709w",
            subtitles: [
                "experiences[5].subtitles[0]",
                "experiences[5].subtitles[1]"
            ],
        },
        {
            title: "CGCV³",
            src: "/experiences/cgcv.webp",
            srcset: "/experiences/cgcv.webp 400w, /experiences/cgcv-small.webp 200w",
            subtitles: [
                "experiences[6].subtitles[0]",
                "experiences[6].subtitles[1]"
            ],
        },
        {
            title: "DREAL⁴",
            src: "/experiences/dreal.webp",
            srcset: "/experiences/dreal.webp 480w, /experiences/dreal-small.webp 240w",
            subtitles: [
                "experiences[7].subtitles[0]",
                "experiences[7].subtitles[1]"
            ],
        }
    ],
    captions: [
        "experiences[4].captions[0]",
        "experiences[5].captions[0]",
        "experiences[6].captions[0]",
        "experiences[7].captions[0]",
    ]
};