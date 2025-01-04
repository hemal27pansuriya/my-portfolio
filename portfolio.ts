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
    "Dedicated Full Stack web developer with expertise in backend technologies, specializing in Node.js, Express.js, and MongoDB and frontend technologies specializing in React.js and Redux to broaden skills in creating seamless user interfaces; known for effective communication and collaborative problem-solving within cross-functional teams.",
  // resumeLink: "https://drive.google.com/file/d/1JcpM1W64Y6NlVE6TVOQKkwVCNTPIYsS1/view?usp=sharing",
  resumeLink: "https://drive.google.com/file/d/1C36WaWmFszd-TV8f4etUbKia3vI4iBSL/view?usp=drive_links",
};

export const openSource = {
  githubUserName: "hemal27pansuriya",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:hemalpansuriya007@gmail.com",
  linkedin: "https://www.linkedin.com/in/hemal-pansuriya-750a22203/",
  github: "https://github.com/hemal27pansuriya",
  fiverr: "https://www.fiverr.com/s/6rbrBw",
  upwork: "https://www.upwork.com/freelancers/~010b75ae332d88b7d8"
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: 'ADVENTUROUS FULL STACK DEVELOPER WITH A PASSION FOR EXPLORING DIVERSE TECH STACKS',
  data: [
    {
      title: "Backend Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building RESTful APIs in Node.js & Express.js REST Framework"),
        emoji("⚡ Crafting high-performance RESTful APIs with Express.js."),
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
          iconifyTag: "skill-icons:expressjs-dark",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "skill-icons:mongodb",
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
          iconifyTag: "devicon:socketio",
        },
        {
          skillName: "Typescript",
          iconifyTag: "devicon:typescript",
        },
        {
          skillName: "Nestjs",
          iconifyTag: "logos:nestjs",
        },
        {
          skillName: "Graphql",
          iconifyTag: "logos:graphql",
        },
        {
          skillName: "Grpc",
          iconifyTag: "logos:grpc",
        },
      ],
    },
    {
      title: "Frontend Development",
      lottieAnimationFile: "/lottie/skills/frontend.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive static websites using React.js"),
        emoji("⚡ Making development easy with Redux and Bootstrap"),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Redux",
          iconifyTag: "logos:redux",
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
        }
      ],
    },
    {
      title: "Tools",
      lottieAnimationFile: "/lottie/skills/tools.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Version control using Git & Unit testing using Mocha and Jest"),
        emoji("⚡ Cloud messaging using firebase push notifications"),
      ],
      softwareSkills: [
        {
          skillName: "Git",
          iconifyTag: "logos:git",
        },
        {
          skillName: "GitHub",
          iconifyTag: "icon-park:github",
        },
        {
          skillName: "GitLab",
          iconifyTag: "devicon:gitlab",
        },
        {
          skillName: "BitBucket",
          iconifyTag: "logos:bitbucket",
        },
        {
          skillName: "Jest",
          iconifyTag: "logos:jest",
        },
        {
          skillName: "Mocha",
          iconifyTag: "logos:mocha",
        },
        {
          skillName: "Akamai",
          iconifyTag: "logos:akamai",
        },
        {
          skillName: "Firebase",
          iconifyTag: "logos:firebase",
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
    desc: "Completed graduation in information technology containing web development, data structure, database, etc subjects.",
    grade: "CGPA - 8.51",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Nalanda Vidhyalay - Derdi(Ku.) - Higher Secondary",
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
    desc: "Currently, I am actively involved in collaborative team projects, working across diverse technical teams, and utilizing my expertise in Node.js, Express.js, MongoDB, MySQL, Redis, and Socket.IO. Projects like Fansportiz, HousieMate, Cartola Pix Fantasy, Jio Fantasy, and Lovely Finance reflect my ability to thrive in cross-functional environments while contributing to the development of robust solutions.",
    link: 'https://yudiz.com'
  }
];

export const projects: ProjectType[] = [
  {
    name: "Fantasy Sports Platform",
    desc: "Fantasy sports game where user can create teams and join contest and won exciting prizes. Providing number of sports games containing Cricket, Football, Basketball, Kabaddi, Baseball, Csgo etc.",
    github: "",
    link: "",
    img: "/img/projects/fantasy.jpeg",
    skills: [
      {
        name: "NodeJS",
        iconifyTag: "logos:nodejs",
      },
      {
        name: "ExpressJS",
        iconifyTag: "skill-icons:expressjs-dark",
      },
      {
        name: "MongoDB",
        iconifyTag: "skill-icons:mongodb",
      },
      {
        name: "Redis",
        iconifyTag: "logos:redis",
      },
      {
        name: "MySql",
        iconifyTag: "logos:mysql",
      },
      {
        name: "ReactJS",
        iconifyTag: "logos:react",
      },
      {
        name: "Redux",
        iconifyTag: "logos:redux",
      },
      {
        name: "Grpc",
        iconifyTag: "logos:grpc",
      },
      {
        name: "Mocha",
        iconifyTag: "logos:mocha",
      },
      {
        name: "Firebase",
        iconifyTag: "logos:firebase",
      },
    ]
  },
  {
    name: "Housie Game - Tambola",
    desc: "Game of Housie where user can easily manage number of tickets easily. Providing 45+ winning patterns where one can select desired winning patterns and play Housie game with interactive UI experience.",
    github: "",
    link: "",
    img: '/img/projects/housie.jpeg',
    skills: [
      {
        name: "NodeJS",
        iconifyTag: "logos:nodejs",
      },
      {
        name: "ExpressJS",
        iconifyTag: "skill-icons:expressjs-dark",
      },
      {
        name: "MongoDB",
        iconifyTag: "skill-icons:mongodb",
      },
      {
        name: "Redis",
        iconifyTag: "logos:redis",
      },
      {
        name: "SocketIO",
        iconifyTag: "devicon:socketio",
      },
      {
        name: "ReactJS",
        iconifyTag: "logos:react",
      },
      {
        name: "Redux",
        iconifyTag: "logos:redux",
      },
      {
        name: "Firebase",
        iconifyTag: "logos:firebase",
      },
    ]
  },
  // {
  //   name: "Powerplay11",
  //   desc: "Powerplay11 is also fantasy sports game similar to fansportiz by jio in Jio games. Worked on crucial modules like prize breakup and crown currency provided by Jio games. Worked with jio team members for development and made product live.",
  //   github: "",
  //   link: "",
  //   img: "/img/projects/powerplay11.png",
  //   skills: [
  //     {
  //       name: "NodeJS",
  //       iconifyTag: "logos:nodejs",
  //     },
  //     {
  //       name: "ExpressJS",
  //       iconifyTag: "skill-icons:expressjs-dark",
  //     },
  //     {
  //       name: "MongoDB",
  //       iconifyTag: "skill-icons:mongodb",
  //     },
  //     {
  //       name: "Redis",
  //       iconifyTag: "logos:redis",
  //     },
  //     {
  //       name: "MySql",
  //       iconifyTag: "logos:mysql",
  //     },
  //     {
  //       name: "ReactJS",
  //       iconifyTag: "logos:react",
  //     },
  //     {
  //       name: "Redux",
  //       iconifyTag: "logos:redux",
  //     },
  //     {
  //       name: "Grpc",
  //       iconifyTag: "logos:grpc",
  //     },
  //     {
  //       name: "Mocha",
  //       iconifyTag: "logos:mocha",
  //     },
  //     {
  //       name: "Firebase",
  //       iconifyTag: "logos:firebase",
  //     },
  //   ]
  // },
  {
    name: "Real Universe",
    desc: "Real Universe is an innovative web and mobile platform designed to unite the entire real estate ecosystem. This platform serves as a central hub for developers, vendors, channel partners, job seekers, and industry professionals to connect, collaborate, and grow together.",
    github: "",
    link: "",
    img: "/img/projects/realuni.jpeg",
    skills: [
      {
        name: "NodeJS",
        iconifyTag: "logos:nodejs",
      },
      {
        name: "ExpressJS",
        iconifyTag: "skill-icons:expressjs-dark",
      },
      {
        name: "MongoDB",
        iconifyTag: "skill-icons:mongodb",
      },
      {
        name: "Redis",
        iconifyTag: "logos:redis",
      },
      {
        name: "SocketIO",
        iconifyTag: "devicon:socketio",
      },
      {
        name: "NextJS",
        iconifyTag: "logos:nextjs",
      },
      {
        name: "Firebase",
        iconifyTag: "logos:firebase",
      },
    ]
  }
  // {
  //   name: "Lovely",
  //   desc: "Lovely is the platform where lucky user wins crypto coins by bidding currency on cards, coin, dice in different games. Basically this was blockchain project as bidding with cryptocurrency in game, There are games Ace Cosmos(card), Lovely Queen(card), Toss Master(coin).",
  //   github: "",
  //   link: "",
  //   img: "/img/projects/lovely.png",
  //   skills: [
  //     {
  //       name: "Nodejs",
  //       iconifyTag: "logos:nodejs",
  //     },
  //     {
  //       name: "Expressjs",
  //       iconifyTag: "skill-icons:expressjs-dark",
  //     },
  //     {
  //       name: "MongoDB",
  //       iconifyTag: "skill-icons:mongodb",
  //     },
  //     {
  //       name: "Web3js",
  //       iconifyTag: "logos:web3js",
  //     },
  //   ]
  // }
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
