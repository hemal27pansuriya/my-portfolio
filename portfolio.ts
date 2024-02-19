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
  title: "Hi all, I'm Hemal",
  description:
    "Dedicated Full Stack web developer with expertise in backend technologies, specializing in Node.js, Express.js, and MongoDB. Recently started working on the frontend using React.js to broaden skills in creating seamless user interfaces; known for effective communication and collaborative problem-solving within cross-functional teams.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "hemal27pansuriya",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:hemalpansuriya007@gmail.com",
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
        emoji("⚡ Building RESTful APIs in Node.js & Express.js REST Framework"),
        emoji("⚡ Building responsive static websites using React.js"),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "Expressjs",
          iconifyTag: "logos:express",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb",
        },
        {
          skillName: "Redis",
          iconifyTag: "logos:redis",
        },
        {
          skillName: "MySql",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "Socketio",
          iconifyTag: "devicon:socketio-wordmark",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Graphql",
          iconifyTag: "logos:graphql",
        },
        {
          skillName: "Typescript",
          iconifyTag: "logos:typescript",
        },
        {
          skillName: "Nestjs",
          iconifyTag: "logos:nestjs",
        },
        {
          skillName: "HTML",
          iconifyTag: "skill-icons:html",
        },
        {
          skillName: "CSS",
          iconifyTag: "skill-icons:css",
        },
        {
          skillName: "Bootstrap",
          iconifyTag: "logos:bootstrap",
        },
        {
          skillName: "Git",
          iconifyTag: "logos:git",
        },
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
    desc: "Completed graduation in information technology containing web development, data structure, database, cryptography etc subjects.",
    grade: "CGPA - 8.51",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Nalanda Vidhyalay - Derdi(Ku.)",
    subHeader: "11-12th Science",
    duration: "June 2016 - April 2018",
    desc: "Completed higher studies in science steam containing Mathematics, Physics and Chemistry subjects.",
    grade: "88%",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Web Developer",
    company: "Yudiz Solutions Limited",
    companyLogo: "/img/icons/common/yudiz-logo.png",
    date: "Jan 2022 - Present",
    desc: "Currently, I am actively involved in collaborative team projects, working across diverse technical teams, and utilizing my expertise in Node.js, Express.js, MongoDB, MySQL, Redis, and Socket.IO. Projects like Fansportiz, HousieMate, Cartola Pix Fantasy, Jio Fantasy, and Lovely Finance reflect my ability to thrive in cross-functional environments while contributing to the development of robust solutions."
  }
];

export const projects: ProjectType[] = [
  {
    name: "HousieMate",
    desc: "Game of Housie where user can easily manage number of tickets easily. Providing 45+ winning patterns where one can select desired winning patterns and play Housie game with interactive UI experience.",
    github: "",
    link: "https://housiemate.com",
  },
  {
    name: "Fansportiz",
    desc: "Fantasy sports game where user can create teams and join contest and won exciting prizes. Providing number of sports games containing Cricket, Football, Basketball, Kabaddi, Baseball, Csgo etc.",
    github: "",
    link: "https://fansportiz.com",
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
