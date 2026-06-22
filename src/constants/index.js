import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";
import {
  SiC,
  SiCplusplus,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { ucoLogoOfficial } from "../assets";

export const resumeLink = "/CV_Tecnico_Juan_Higuera.pdf";
export const repoLink = "https://github.com/juannhm02/personal-portfolio";
export const callToAction =
  "https://www.linkedin.com/in/juan-higuera-mohedano-189934232/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "achievements",
    title: "Highlights",
  },
  {
    id: "extraCurricular",
    title: "Leadership",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: "https://www.google.com/s2/favicons?domain=eiposgrados.com&sz=64",
    title: "EIP International Business School",
    degree:
      "MSc in Cybersecurity Management, Ethical Hacking & Offensive Security",
    duration: "Jun 2026 - Present",
    content1:
      "Postgraduate program covering security management, ethical hacking, and offensive security techniques.",
    content2:
      "Building on a software engineering background to specialize in cybersecurity.",
  },
  {
    id: "education-2",
    icon: ucoLogoOfficial,
    title: "University of Cordoba",
    degree: "BSc in Computer Engineering",
    duration: "Sep 2020 - Jun 2026",
    content1:
      "Strong technical foundation in web development, software engineering, and collaborative work.",
    content2:
      "Track record combining academic projects, digital product work, and student representation.",
  },
];

export const certifications = [
  {
    id: "cert-1",
    title: "AI Mastery Certificate",
    issuer: "Udemy",
    date: "Mar 2026",
    link: "https://drive.google.com/file/d/1LU7FlugCFFKDbV0LbE58SmDe5x-0coKO/view",
  },
  {
    id: "cert-2",
    title: "Quantum Computing Certificate",
    issuer: "Udemy",
    date: "Mar 2026",
    link: "https://drive.google.com/file/d/1T9_kT7G1RKO53tgUJwBoZ1E8wcUBuxHk/view?usp=drivesdk",
  },
  {
    id: "cert-3",
    title: "Digital Marketing Certificate",
    issuer: "Next Generation EU",
    date: "Feb 2026",
    link: "https://drive.google.com/file/d/1h9VBznOBbynIvOfCH_2cxhZLRYzIR3cE/view",
  },
  {
    id: "cert-4",
    title: "Cybersecurity Introduction Certificate",
    issuer: "Next Generation EU",
    date: "Jan 2026",
    link: "https://drive.google.com/file/d/1GUB2iX6yOwVyzgKNlOvu7INDzKxhTmzH/view",
  },
  {
    id: "cert-5",
    title: "Web Positioning (SEO) Certificate",
    issuer: "CertiOne",
    date: "Nov 2025",
    link: "https://drive.google.com/file/d/1DOeco9uaJsrIk-INc3jEWv6gnHqPsKfk/view",
  },
  {
    id: "cert-6",
    title: "AI Development Certificate",
    issuer: "Big School",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/16bMbt2awODw6WWuBSuecSir9Kg163pqJ/view?usp=drive_link",
  },
  {
    id: "cert-7",
    title: "Scrum Methodology Certificate",
    issuer: "CertiOne",
    date: "Nov 2025",
    link: "https://drive.google.com/file/d/1HpNdxBNFD8etGFu6cnnnufdELyNQfubj/view",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: "https://www.google.com/s2/favicons?domain=genial.ly&sz=64",
    event: "Genially",
    position: "Frontend Developer",
    content1:
      "Jan 2024 - Jun 2025. Built and maintained React & JavaScript components in a real production environment.",
    content2:
      "Worked in a team, took part in joint project planning, and fixed reported issues.",
    article: "https://genial.ly/",
    github: "https://github.com/juannhm02/frontend-code-test",
  },
  {
    id: "a-2",
    icon: ucoLogoOfficial,
    event: "EPSC Student Council - UCO",
    position: "President",
    content1:
      "Sep 2023 - Jun 2025. Public student representation role at the School of Engineering of the University of Cordoba.",
    content2:
      "Profile combining software development, communication, and university leadership.",
    article:
      "https://www.uco.es/organiza/centros/eps/en/2-uncategorised/89-consejo-de-estudiantes",
  },
  {
    id: "a-3",
    icon: "https://github.com/juannhm02.png",
    event: "Technical profile on GitHub",
    position: "Frontend-focused with full-stack exposure",
    content1:
      "Public repositories covering React, Vite, Node.js, NestJS, Django, Java, and C++.",
    content2:
      "Mix of personal projects, academic work, and applications with real-world scope.",
    article: "https://github.com/juannhm02",
    project: "https://github.com/juannhm02/juannhm02",
  },
];

export const skills = [
  {
    title: "Languages",
    items: [
      {
        id: "pl-1",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-2",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "pl-3",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-4",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-5",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-6",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
    ],
  },
  {
    title: "Frameworks & Environment",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "f-2",
        icon: SiVite,
        name: "Vite",
      },
      {
        id: "f-3",
        icon: SiTailwindcss,
        name: "Tailwind",
      },
      {
        id: "f-4",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "f-5",
        icon: SiExpress,
        name: "Express",
      },
      {
        id: "f-6",
        icon: SiNestjs,
        name: "NestJS",
      },
      {
        id: "f-7",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-8",
        icon: SiExpo,
        name: "Expo",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-2",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-3",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-4",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-5",
        icon: SiMariadb,
        name: "MariaDB",
      },
      {
        id: "t-6",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-7",
        icon: SiFirebase,
        name: "Firebase",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Genially",
    logo: "https://www.google.com/s2/favicons?domain=genial.ly&sz=64",
    link: "https://genial.ly/",
    positions: [
      {
        title: "Frontend Developer",
        duration: "Jan 2024 - Jun 2025",
        content: [
          {
            text: "Built and implemented React & JavaScript components within a real digital product.",
            link: "",
          },
          {
            text: "Worked in a team on joint project planning and fixed reported issues.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "EPSC Student Council, UCO",
    logo: ucoLogoOfficial,
    link:
      "https://www.uco.es/organiza/centros/eps/en/2-uncategorised/89-consejo-de-estudiantes",
    positions: [
      {
        title: "President",
        duration: "Sep 2023 - Jun 2025",
        content: [
          {
            text: "Student representation and institutional participation at the School of Engineering in Cordoba.",
            link:
              "https://www.uco.es/organiza/centros/eps/en/2-uncategorised/89-consejo-de-estudiantes",
          },
          {
            text: "Role that strengthens communication, coordination, and public responsibility skills.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Personal and academic projects",
    logo: "https://github.com/juannhm02.png",
    link: "https://github.com/juannhm02?tab=repositories",
    positions: [
      {
        title: "Frontend and full stack development",
        duration: "Recent work",
        content: [
          {
            text: "Built interfaces with React and Vite, alongside backend work with Node.js, Express, and NestJS.",
            link: "",
          },
          {
            text: "Work spanning web, mobile, and academic exercises with broad hands-on practice.",
            link: "",
          },
        ],
      },
    ],
  },
];

export const projects = [
  {
    id: "project-1",
    title: "ToTusTuus Web",
    github: "https://github.com/juannhm02/totustuus-web",
    image: "https://opengraph.githubassets.com/1/juannhm02/totustuus-web",
    content:
      "E-commerce site built as a Node.js monorepo: React (Vite) frontend, Express REST API, and an admin panel with order management, transactional emails, and server-side price validation.",
    stack: [
      {
        id: "proj1-icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "proj1-icon-2",
        icon: SiVite,
        name: "Vite",
      },
      {
        id: "proj1-icon-3",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "proj1-icon-4",
        icon: SiExpress,
        name: "Express",
      },
    ],
  },
  {
    id: "project-2",
    title: "Aquashift",
    github: "https://github.com/juannhm02/aquashift",
    image: "https://opengraph.githubassets.com/1/juannhm02/aquashift",
    content:
      "Shift-scheduling app for municipal pool lifeguards: manages schedules and shift swaps, with real-time notifications powered by Firestore.",
    stack: [
      {
        id: "proj2-icon-1",
        icon: SiReact,
        name: "React Native",
      },
      {
        id: "proj2-icon-2",
        icon: SiExpo,
        name: "Expo",
      },
      {
        id: "proj2-icon-3",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "proj2-icon-4",
        icon: SiFirebase,
        name: "Firestore",
      },
    ],
  },
  {
    id: "project-3",
    title: "APP-ISM",
    github: "https://github.com/juannhm02/APP-ISMFront",
    image: "https://opengraph.githubassets.com/1/juannhm02/APP-ISMFront",
    content:
      "Mobile application built with React Native and TypeScript for management workflows, authentication, barcode scanning, and user flows.",
    stack: [
      {
        id: "proj3-icon-1",
        icon: SiReact,
        name: "React Native",
      },
      {
        id: "proj3-icon-2",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "proj3-icon-3",
        icon: SiNodedotjs,
        name: "Node.js",
      },
    ],
  },
  {
    id: "project-4",
    title: "UcoLib",
    github: "https://github.com/juannhm02/UcoLib",
    image: "https://opengraph.githubassets.com/1/juannhm02/UcoLib",
    content:
      "Modular backend with NestJS and TypeScript, designed for scalable services and Docker-based deployment.",
    stack: [
      {
        id: "proj4-icon-1",
        icon: SiNestjs,
        name: "NestJS",
      },
      {
        id: "proj4-icon-2",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "proj4-icon-3",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "proj4-icon-4",
        icon: SiNodedotjs,
        name: "Node.js",
      },
    ],
  },
  {
    id: "project-5",
    title: "Countrle",
    github: "https://github.com/juannhm02/Countrle",
    link: "https://countrle.netlify.app",
    image: "https://opengraph.githubassets.com/1/juannhm02/Countrle",
    content:
      "Wordle-inspired web game combining Django and React for an interactive experience around countries and general knowledge.",
    stack: [
      {
        id: "proj5-icon-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "proj5-icon-2",
        icon: SiReact,
        name: "React",
      },
      {
        id: "proj5-icon-3",
        icon: SiMongodb,
        name: "MongoDB",
      },
    ],
  },
  {
    id: "project-6",
    title: "Reserva de Pistas",
    github: "https://github.com/juannhm02/ReservaPistas",
    image: "https://opengraph.githubassets.com/1/juannhm02/ReservaPistas",
    content:
      "Sports court booking manager with a domain model of 5 related entities, binary object persistence in Java, and a Handler pattern separating business logic.",
    stack: [
      {
        id: "proj6-icon-1",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "proj6-icon-2",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "proj6-icon-3",
        icon: SiCss3,
        name: "CSS",
      },
    ],
  },
  {
    id: "project-7",
    title: "Mailing Actividades Extracurriculares",
    github:
      "https://github.com/juannhm02/MailingActividadesExtracurriculares",
    image:
      "https://opengraph.githubassets.com/1/juannhm02/MailingActividadesExtracurriculares",
    content:
      "Mailing management tool built to coordinate communications for extracurricular and student-representation activities.",
    stack: [
      {
        id: "proj7-icon-1",
        icon: SiCplusplus,
        name: "C++",
      },
    ],
  },
  {
    id: "project-8",
    title: "Gestor de Maquinas",
    github: "https://github.com/juannhm02/Gestor-de-maquinas",
    image: "https://opengraph.githubassets.com/1/juannhm02/Gestor-de-maquinas",
    content:
      "Cluster reservation system built in C++ for a university systems course.",
    stack: [
      {
        id: "proj8-icon-1",
        icon: SiCplusplus,
        name: "C++",
      },
    ],
  },
];

export const blogPosts = [];

export const stats = [
  {
    id: "stats-1",
    title: "Public repos",
    value: "10+",
  },
  {
    id: "stats-2",
    title: "Primary focus",
    value: "Frontend",
  },
  {
    id: "stats-3",
    title: "Platforms",
    value: "Web + mobile",
  },
];

export const extraCurricular = [
  {
    id: "ec-1",
    organisation: "AICO Association",
    title: "Founding Vice President",
    duration: "Sep 2024 - Jun 2025",
    logo: ucoLogoOfficial,
    content: [
      {
        text: "Drafted the association's bylaws and representative policies.",
        link: "",
      },
      {
        text: "Promoted and coordinated academic and professional events.",
        link: "",
      },
    ],
  },
  {
    id: "ec-2",
    organisation: "Student Council, University of Cordoba (CEUCO)",
    title: "Institutional Representative",
    duration: "Sep 2022 - Jun 2024",
    logo: ucoLogoOfficial,
    content: [
      {
        text: "Presented faculty interests at university governing board meetings.",
        link: "",
      },
      {
        text: "Strategic communication and report writing for institutional bodies.",
        link: "",
      },
    ],
  },
  {
    id: "ec-3",
    organisation: "RITSI - National Computer Engineering Students Council",
    title: "Institutional Representative",
    duration: "Sep 2021 - Jun 2023",
    logo: ucoLogoOfficial,
    content: [
      {
        text: "Attended national assemblies and forums promoting research, development, and education across the sector.",
        link: "",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/juan-higuera-mohedano-189934232/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/juannhm02",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:correojhm.dev@gmail.com",
  },
];

export const aboutMe = {
  name: "Juan Higuera Mohedano",
  githubUsername: "juannhm02",
  profileImage: "https://github.com/juannhm02.png",
  tagLine:
    "Software Developer | React & Cybersecurity | University of Cordoba",
  intro:
    "Computer Engineering graduate from the University of Cordoba, now pursuing a Master's in Cybersecurity, Ethical Hacking & Offensive Security. Frontend-focused developer with hands-on experience building polished interfaces and full-stack projects across React, Node.js, and Python.",
};

export const itemsToFetch = 20;

export const includedRepos = [];
