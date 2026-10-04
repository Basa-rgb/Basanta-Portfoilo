// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's

// Education Section Logo's
import whitefieldLogo from './assets/education_logo/white.png';
import ranipauwaLogo from './assets/education_logo/rani.png';
import sundariLogo from './assets/education_logo/sunndari.png';

// Project Section Logo's
import hamroSamadhanLogo from './assets/work_logo/Hamro Samadhan.jpg';
import staticEcommerceLogo from './assets/work_logo/static e-commerce website.jpg';
import apiEcommerceLogo from './assets/work_logo/Api fetching e-commerce website.jpg';
import apexFitLogo from './assets/work_logo/ApexFit.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
    
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


  
  export const education = [
    {
      id: 0,
      img: whitefieldLogo,
      school: "White Field International College",
      date: "Nov 2024 - Present",
      grade: "In Progress",
      desc: "I am currently pursuing a Bachelor of Computer Applications (BCA) at White Field International College, where I am building a strong foundation in programming, databases and web development. The course has given me a solid understanding of core computer science principles, and I am applying them through hands-on projects, most notably Hamro Samadhan. Alongside my degree I am working on real-world full-stack applications to strengthen my practical development skills.",
      degree: "Bachelor of Computer Applications - BCA",
    },
    {
      id: 1,
      img: ranipauwaLogo,
      school: "Rani Pauwa Secondary School",
      date: "2022 - 2024",
      grade: "3.45 GPA",
      desc: "I completed my +2 in Computer Science from Rani Pauwa Secondary School with a GPA of 3.45. Computer Science was the subject that first pushed me towards programming, and studying it at this level gave me a clear direction toward software development. Along with the core subjects I focused on computer science, which is where I developed the interest in building things for the web that eventually led me to a degree in computing.",
      degree: "+2 (Computer Science)",
    },
    {
      id: 2,
      img: sundariLogo,
      school: "Sundari Secondary School",
      date: " 2022",
      grade: "2.90 GPA",
      desc: "I completed my Secondary Education Examination (SEE) at Sundari Secondary School with a score of 2.90 GPA. These four years covered the standard curriculum and were where I settled into academic life, learned how to work consistently towards exams, and first started noticing how computers and the internet worked.",
      degree: "SEE",
    },
  ];

export const projects = [
  {
    id: 0,
    title: "Hamro Samadhan",
    description:
      "Hamro Samadhan is a civic engagement platform built to help people raise, discuss and track local community issues. It gives citizens an easy way to report problems in their area while keeping everyone updated on the progress being made towards a solution.",
    image: hamroSamadhanLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Basa-rgb/Hamro-Samadhan",
    webapp: "https://hamro-samadhan.vercel.app/",
  },
  {
    id: 1,
    title: "ApexFit",
    description:
      "ApexFit is a gym and fitness website built to help people plan their training and follow progress. It presents workout plans, exercises and fitness content in a clean, mobile-friendly layout, backed by a Node.js and Express backend for managing the data behind the site.",
    image: apexFitLogo,
    tags: ["React JS", "Node.js", "Express", "JavaScript", "Tailwind CSS", "HTML"],
    github: "https://github.com/Basa-rgb/ApexFit-",
    webapp: "https://apex-fit-10.vercel.app/",
  },
  
 
  {
    id: 2,
    title: "API Fetching Nexora E-Commerce Website",
    description:
      "An e-commerce website that fetches its product catalogue from a public API instead of hard-coding data. Products load dynamically with filtering and search, so the catalogue stays in sync with the source without any manual updates.",
    image: apiEcommerceLogo,
    tags: ["React JS", "API", "Async/Await", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Basa-rgb/Nexora-E-commerce-Website-Rest-API-",
    webapp: "https://nexora-e-commerce-website-rest-api.vercel.app/",
  },
   {
    id: 3,
    title: "Static E-Commerce Website",
    description:
      "A responsive e-commerce storefront built as a static site, focused on clean product presentation, a smooth browsing experience and a mobile-friendly design. It covers the full customer journey from browsing the catalogue through to cart and checkout.",
    image: staticEcommerceLogo,
    tags: ["HTML", "CSS", "JavaScript","React", "Responsive Design"],
    github: "https://github.com/Basa-rgb/Beginner-Level-E-commerce",
    webapp: "https://beginner-level-e-commerce.vercel.app/",
  },
  
];
  
