import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";
import {
  SiC,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiExpress,
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
export const repoLink = "https://github.com/juannhm02/personalPortfolio";
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
    id: "achievements",
    title: "Highlights",
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
    icon: ucoLogoOfficial,
    title: "University of Cordoba",
    degree: "BSc in Computer Engineering",
    duration: "University education",
    content1:
      "Strong technical foundation in web development, software engineering, and collaborative work.",
    content2:
      "Track record combining academic projects, digital product work, and student representation.",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: "https://www.google.com/s2/favicons?domain=genial.ly&sz=64",
    event: "Genially",
    position: "Frontend Developer Intern",
    content1:
      "Product experience working with React and JavaScript in a real-world environment.",
    content2:
      "Focused on clean, maintainable, user-oriented interfaces.",
    article: "https://genial.ly/",
    github: "https://github.com/juannhm02/frontend-code-test",
  },
  {
    id: "a-2",
    icon: ucoLogoOfficial,
    event: "EPSC Student Council - UCO",
    position: "President",
    content1:
      "Public student representation role at the School of Engineering of the University of Cordoba.",
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
        title: "Frontend Developer Intern",
        duration: "Internship experience",
        content: [
          {
            text: "Worked with React and JavaScript inside a real digital product environment.",
            link: "",
          },
          {
            text: "Exposure to interface decisions, maintainability, and user-experience-driven development.",
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
        duration: "Since October 2024",
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
      "E-commerce site built with React and Vite, backed by Express for orders, automated emails, and an admin panel.",
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
    title: "APP-ISM",
    github: "https://github.com/juannhm02/APP-ISMFront",
    image: "https://opengraph.githubassets.com/1/juannhm02/APP-ISMFront",
    content:
      "Mobile application built with React Native and TypeScript for management workflows, authentication, barcode scanning, and user flows.",
    stack: [
      {
        id: "proj2-icon-1",
        icon: SiReact,
        name: "React Native",
      },
      {
        id: "proj2-icon-2",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "proj2-icon-3",
        icon: SiNodedotjs,
        name: "Node.js",
      },
    ],
  },
  {
    id: "project-3",
    title: "UcoLib",
    github: "https://github.com/juannhm02/UcoLib",
    image: "https://opengraph.githubassets.com/1/juannhm02/UcoLib",
    content:
      "Modular backend with NestJS and TypeScript, designed for scalable services and Docker-based deployment.",
    stack: [
      {
        id: "proj3-icon-1",
        icon: SiNestjs,
        name: "NestJS",
      },
      {
        id: "proj3-icon-2",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "proj3-icon-3",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "proj3-icon-4",
        icon: SiNodedotjs,
        name: "Node.js",
      },
    ],
  },
  {
    id: "project-4",
    title: "Countrle",
    github: "https://github.com/juannhm02/Countrle",
    link: "https://countrle.netlify.app",
    image: "https://opengraph.githubassets.com/1/juannhm02/Countrle",
    content:
      "Wordle-inspired web game combining Django and React for an interactive experience around countries and general knowledge.",
    stack: [
      {
        id: "proj4-icon-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "proj4-icon-2",
        icon: SiReact,
        name: "React",
      },
      {
        id: "proj4-icon-3",
        icon: SiMongodb,
        name: "MongoDB",
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

export const extraCurricular = [];

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
    link: "mailto:juanhmohedano123@gmail.com",
  },
];

export const aboutMe = {
  name: "Juan Higuera Mohedano",
  githubUsername: "juannhm02",
  profileImage: "https://github.com/juannhm02.png",
  tagLine:
    "Frontend Developer | React & JavaScript | University of Cordoba | Former Genially Intern",
  intro:
    "Frontend developer with a solid software engineering foundation and hands-on experience building polished interfaces, web applications, and full-stack projects.",
};

export const itemsToFetch = 20;

export const includedRepos = [];
