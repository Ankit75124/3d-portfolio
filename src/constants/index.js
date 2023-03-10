import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  Glencore,
  tpvision,
  carrent,
  ChatGPT,
  Cryptotracker,
  Animetrix,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Design",
    icon: web,
  },
  {
    title: "Web3 Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Testing and Debugging",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Analyst",
    company_name: "Glencore",
    icon: Glencore,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Performed Root Cause Analysis on Glencore’s PnL Variance Report and Brainstormed a way to change the methodology and restructured the report,as a result calculation of Pnl Variance time reduced by 80%",
      "Using Python automated the complete process of creating PnL Variance Report due to which manual dependency reduced to 92%",
      "Created an Automated Price Checker system for Mexico business related curves to ensure accuracy inpricing. This system compares our prices in ZEMA with those of other counter parties and flags our Risk Manager in the event of any discrepancies. As a result, the chances of sending incorrect invoices due to pricingissues have been reduced by 100%.",
    ],
  },

  {
    title: "SDE Intern",
    company_name: "TP Vision",
    icon: tpvision,
    iconBg: "#383E56",
    date: "Dec 2021 - March 2022",
    points: [
      "Developed a dynamic gaming interface on Angular.Js",
      "Designed 6 interactive educational game for kids on Angular.Js",
      "Implemented Dynamic themes on each game using Material UI",
    ],
  },
];

const testimonials = [
  {
    place: "Presidency University, Bangalore",
    stream: "B-Tech CSE",
    start: "Aug 2018",
    end: "July 2022",
  },
  {
    place: "V.R Kondi College,Barh",
    stream: "Intermediate",
    start: "April 2016",
    end: "March 2018",
  },
  {
    place: "Krishna Sudarshan Public School, Barh",
    stream: "10th Standard",
    start: "April 2015",
    end: "March 2016",
  },
];

const projects = [
  {
    name: "Animetrix",
    description:
      "AnimeTrix is a full-stack anime streaming website using React.js, Node.js, MongoDB, and Chakra UI with user authentication, payment integration, and an admin dashboard. ",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Animetrix,
    source_code_link: "https://github.com/Ankit75124/animetrix",
  },
  {
    name: "ChatGPT Clone",
    description:
      "A ChatGPT clone was developed with Next.js, Node.js, Firebase, Tailwind CSS. Utilized ChatGPT API, Firebase, and Tailwind CSS for UI design.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ChatGPT,
    source_code_link: "https://github.com/Ankit75124/chatgpt-clone",
  },
  {
    name: "Crypto Price Tracker",
    description:
      "A React-based cryptocurrency price tracker that uses CoinGecko API to fetch real-time data and Chart.js for graphical representation of prices..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: Cryptotracker,
    source_code_link: "https://github.com/Ankit75124/crypto_tracker",
  },
];

export { services, technologies, experiences, testimonials, projects };
