import {
    angular,
    bootstrap,
    docker,
    elasticsearch,
    electron,
    envoy,
    flask,
    gitlab,
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
    spring,
    traefik,
    typescript
} from "@/plugins/devicon";

export const experiences = [
    {
        title: "Sopra Steria",
        icon: "/experiences/soprasteria.png",
        subtitles: [
            "experiences[0].subtitles[0]",
            "experiences[0].subtitles[1]"
        ],
        missions: [
            "experiences[0].missions[0]",
            "experiences[0].missions[1]",
            "experiences[0].missions[2]"
        ],
        captions: [
            "experiences[0].captions[0]",
            "experiences[0].captions[1]"
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
        icon: "/experiences/alten.png",
        subtitles: [
            "experiences[1].subtitles[0]",
            "experiences[1].subtitles[1]"
        ],
        missions: [
            "experiences[1].missions[0]",
            "experiences[1].missions[1]"
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
            icon: "/experiences/eurosys.png",
            subtitles: [
                "experiences[2].subtitles[0]",
                "experiences[2].subtitles[1]"
            ]
        },
        {
            title: "DDT¹",
            icon: "/experiences/ddt.png",
            subtitles: [
                "experiences[3].subtitles[0]",
                "experiences[3].subtitles[1]"
            ]
        },
        {
            title: "UFCV²",
            icon: "/experiences/ufcv.png",
            subtitles: [
                "experiences[4].subtitles[0]",
                "experiences[4].subtitles[1]"
            ],
        },
        {
            title: "CGCV³",
            icon: "/experiences/cgcv.png",
            subtitles: [
                "experiences[5].subtitles[0]",
                "experiences[5].subtitles[1]"
            ],
        },
        {
            title: "DREAL⁴",
            icon: "/experiences/dreal.png",
            subtitles: [
                "experiences[6].subtitles[0]",
                "experiences[6].subtitles[1]"
            ],
        }
    ],
    captions: [
        "experiences[3].captions[0]",
        "experiences[4].captions[0]",
        "experiences[5].captions[0]",
        "experiences[6].captions[0]",
    ]
};