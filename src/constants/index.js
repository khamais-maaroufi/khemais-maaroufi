import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js/Next.js Developer",
    icon: mobile,
  },
  {
    title: "Node.js Backend Developer",
    icon: backend,
  },
  {
    title: "Problems solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "End of study internship",
    company_name: "Horizon data, Tunis",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2022 - May 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "React Developer (Benevolant internship)",
    company_name: "Fenix Future Dev, Tunis",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2022 - October 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "NEXT CONSULT",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "01 February 2023 - 02 May 2023",
    points: [
      "As a web developer at Next Consult, my primary responsibility is to create and maintain web applications using a variety of technologies. ",
      "This includes working closely with clients and stakeholders to understand their requirements, designing and implementing solutions that meet those requirements, and continually improving the user experience and functionality of the applications.",
    ],
  },
  {
    title: "Part-time  Instructor",
    company_name: "GOMYCODE",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "27 May 2023 - Present",
    points: [
      "Guide students to learn today’s in-demand technical and soft skills. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ERP DASHBOARD",
    description:
      "I have created an impressive ERP Dashboard as a MERN (MongoDB, Express.js, React, Redux Toolkit, Node.js) full-stack project. This powerful dashboard allows businesses to efficiently track products, monitor sales, and analyze statistics. Using Material-UI, I have developed a user-friendly interface that enhances the overall user experience. The ERP Dashboard provides intuitive data visualization and comprehensive insights, empowering businesses to make informed decisions and optimize their operations. With its seamless integration of the MERN stack and elegant design, this project showcases my proficiency in full-stack development and my ability to deliver functional and visually appealing solutions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/khamais-maaroufi/MERN-DASHBORAD",
    visit: "https://ecomvision-tnbe.onrender.com",
  },
  {
    name: "Authentification System",
    description:
      "I have also developed an exceptional Authentication System with a robust UI and efficient state management. This project offers secure user authentication and authorization functionalities, ensuring the confidentiality of sensitive information. Utilizing modern frontend frameworks such as React and state management with the Context api.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/khamais-maaroufi/ecomware",
    visit: "https://ecomware.vercel.app",
  },
  {
    name: "Hang man game",
    description:
      "I have developed an engaging Hangman game that promises hours of fun and entertainment. This project showcases my skills in designing and implementing interactive games using JavaScript. With a captivating user interface and smooth gameplay, players can test their word-guessing abilities and enjoy the challenge of uncovering the hidden word before running out of guesses. The game features various categories and difficulty levels, allowing players to customize their gaming experience. Additionally, I have incorporated appealing visuals and sound effects to enhance the overall immersion. Whether you're a casual gamer or a word enthusiast, this Hangman game is sure to provide an enjoyable and addictive experience.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/khamais-maaroufi/Hang-man-Game",
    visit: "https://hang-man-game-xi.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
