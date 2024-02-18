import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Hemal Pansuriya",
  title: "Hi all, I'm Hemal Pansuriya",
  description:
    "Dedicated Full Stack web developer with expertise in backend technologies, specializing in Node.js, Express.js, and MongoDB. Recently started working on the frontend using React.js to broaden skills in creating seamless user interfaces; known for effective communication and collaborative problem-solving within cross-functional teams.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "hemal27pansuriya",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "hemalpansuriya007@gmail.com",
  linkedin: "https://www.linkedin.com/in/hemal-pansuriya-750a22203/",
  github: "https://github.com/hemal27pansuriya"
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Node",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "Express",
          iconifyTag: "logos:express",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        }
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "60", //Insert relative proficiency in percentage
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Government Engineering College, Gandhinagar",
    subHeader: "Bachelor of Engineering in Information Technology",
    duration: "June 2018 - April 2022",
    desc: "",
    grade: "8.51",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Web Developer",
    company: "Yudiz Solutions Limited",
    companyLogo: "/img/icons/common/meganos.png",
    date: "Jan 2022 - Present",
    desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  }
];

export const projects: ProjectType[] = [
  {
    name: "portfolio",
    desc: "Portfolio website",
    github: "https://github.com/hemal27pansuriya/my-portfolio",
    link: "test",
  }
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Hemal Pansuriya",
  description: greetings.description,
  author: "Hemal Patel",
  image: "test",
  url: "test",
  keywords: [
    "Hemal",
    "Hemal Pansuriya",
    "Hemal Patel",
    "Hemal27",
    "Portfolio",
    "Hemal Portfolio ",
    "Hemal Pansuriya Portfolio",
    "Hemal Patel Portfolio"
  ],
};
