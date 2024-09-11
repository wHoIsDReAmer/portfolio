export interface Project {
    name: string;
    shortDescription: string;
    date: string;
    description: string;
    
    imageUrl: string | null;
    techStack: string[];

    learnedThing: string[];
    hardThing: string[];

    githubUrl: string | null;
}

export const projects: Project[] = [
    {
        name: "전자상거래 서비스 (Private)",
        shortDescription: "전자상거래 서비스",
        description: "개인 외주로 진행한 전자상거래 서비스입니다.<br>백오피스 프론트엔드는 Vue, 백엔드는 Go를 사용했습니다.<br>Layered Architecture를 사용하여 아키텍처를 설계했습니다.<br>최대한 Go 코드의 컨벤션과 standard를 맞추려 노력했습니다.",
        date: "2024-05 ~ 2024-09",
        // imageUrl: "https://blog.kakaocdn.net/dn/YwNMz/btqNIGN5KFZ/bOZVfObi8uSjxF6smcK0D0/img.jpg",
        imageUrl: null,
        techStack: ["Go", "GraphQL(gqlgen)", "Fiber", "PostgreSQL", "Redis", "RabbitMQ", "Vue", "Github Actions", "AWS Fargate", "AWS ECS"],

        learnedThing: [
            "프로젝트가 진행됨에 따라 잦은 리팩토링으로 초기에 아키텍처를 잘 설계하는 것이 중요하다는 것을 배웠습니다.",
            "Terraform으로 배포하는 방법에 대해 배웠습니다.",
            "Github Actions로 효율적인 CI/CD 파이프라인을 구축하는 방법에 대해 배웠습니다.",
            "Go의 표준 프로젝트 설계에 대해 고민해보는 시간을 가졌습니다.",
        ],
        hardThing: [
            "잦은 리팩토링으로 구조 최적화가 어려웠습니다.",
            "위와 같은 이유로 DI의 중요성에 대해 알게 되었습니다. 초기에 AppState 구조체를 만들어 관리하다보니 비대해져 관리가 어려웠습니다.",
            "백오피스 프론트엔드를 어떻게 구축할지 고민이 있었습니다.",
        ],
        githubUrl: null
    },
    {
        name: "File Binder (Only Windows)",
        shortDescription: "여러 파일을 한 실행 파일에 묶어 배포하는 프로그램",
        description: "PoC 목적으로 만든 프로그램입니다.<br>여러 파일을 한 실행 파일에 묶어 배포하는 프로그램입니다.<br>Windows에서만 동작합니다.",

        date: "2023-03-24",
        imageUrl: null,

        techStack: ["Rust", "Windows API"],
        learnedThing: [
            "바이너리의 특성을 이해하고 그 특성을 이용하여 파일을 묶는 방법을 배웠습니다.",
        ],
        hardThing: [
            "어떤 포맷 가능한 바이너리 구조를 사용할지 고민이 있었습니다.",
        ],

        githubUrl: 'https://github.com/wHoIsDReAmer/any-file-binder'
    },
    {
        name: "Rurat",
        shortDescription: "Rust based RAT(Remote Access Trojan)",
        date: "2022-07-01",
        description: "Rust로 만든 RAT(Remote Access Trojan)입니다. PoC 목적으로 만들었습니다.<br>통신 구조에 대해 생각할 점이 많았고, 트로이목마의 특징을 고려해야 했습니다.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_J2yeZ5eobpiCbv_6DgjHK_tDIKIm2EDt4g&s",
        techStack: ["Rust", "egui"],
        learnedThing: [
            "어떻게 하면 의심가지 않는 I/O 동작을 하게 할 수 있는지 배웠습니다.",
            "통신 시 암호화 방법에 대해 배웠습니다.",
            "트로이목마의 기본적인 동작에 대해 배웠습니다."
        ],
        hardThing: [
            "통신 프로토콜을 짤 때 헤더와 푸터를 어떻게 처리할지 고민이 있었습니다.",
            "동시성 프로그래밍이 어려웠습니다. 특히 async 클로저에서 변수들을 어떻게 move해야 하는지 고민이 있었습니다..",
            "메모리 안전성을 유지하면서 프로그램을 작성하는 것이 어려웠습니다."
        ],
        githubUrl: "https://github.com/wHoIsDReAmer/rurat"
    },
]