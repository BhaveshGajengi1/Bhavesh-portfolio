import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/bhaveshgajengi/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/BhaveshGajengi1",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 80,
    height: 80,
  },
] as const;
export const FULLSTACK_SKILL: Array<{
  skill_name: string;
  image: string;
  width: number;
  height: number;
}> = [];

export const OTHER_SKILL: Array<{
  skill_name: string;
  image: string;
  width: number;
  height: number;
}> = [];
export const PROJECTS = [
  {
    title: "🚀Bhavesh Portfolio",
    description: "My personal portfolio built with Next.js, Three.js, and Tailwind CSS featuring 3d animations and modern UI",
    image: "/projects/project-1.webp",
    link: "https://github.com/BhaveshGajengi1/bhavesh-portfolio",
    tech: ["Next.js", "Three.js", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "🛒E-Commerce Platform",
    description: "Full-stack e-commerce application with user authentication, product management, and payment integration.",
    image: "/projects/project-2.webp",
    link: "#",
    tech: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "💻 Tech Blog - Content Management System",
    description: "Modern content management system for tech blogging with admin panel and responsive design.",
    image: "/projects/project-3.webp",
    link: "#",
    tech: ["Next.js", "MySQL", "Tailwind CSS", "Auth"]
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/BhaveshGajengi1",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/bhavesh-gajengi-062393350/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:bhaveshgajengi@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;
