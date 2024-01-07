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
  tgw,
  eurostar,
  carrent,
  jobit,
  tripguide,
  threejs,
  uol_logo,
  dmu_logo,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Undergraduate Student",
    company_name: "University of Leicester",
    icon: uol_logo,
    iconBg: "#383E56",
    date: "September 2015 - July 2018",
    points: [
      "Started my undergraduate degree studying computer science",
      "Built a great foundation in computing fundementals, predominantly used Java as a core langauge",
      "Founded the computer science intramural football team and captained the team for 2/3 years",
    ],
  },
  {
    title: "Undergraduate Student",
    company_name: "De Montfort University",
    icon: dmu_logo,
    iconBg: "#E6DEDD",
    date: "September 2018 - July 2019",
    points: [
      "Built upon my previous experience with Java but also added C# to my skillset",
      "Collaborating on multiple group projects and made great connections",
      "Found my love for web development and began self-learning node/npm ",
      "Graduated in July of 2019 with a 2.1 BSc in Computer Science",
    ],
  },
  {
    title: "Developer",
    company_name: "TGW Logistics",
    icon: tgw,
    iconBg: "#383E56",
    date: "September 2019 - September 2022",
    points: [
      "Developing and maintaining desktop applications using C#,Java,WPF and Spring Boot",
      "Started as graduate developer and working on providing warehouse automated solutions",
      "Spent time in the Germany and the Netherlands commissioning and supporting warehouses",
      "Listed as a site expert for the VF project and towards the end of my time was working on the Ocado project",
      "Held interviews for the newer graduates and took on mentoring roles during this time.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Eurostar International",
    icon: eurostar,
    iconBg: "#E6DEDD",
    date: "September 2022 - Present",
    points: [
      "Initially rotated across all development teams and gained experience across the whole stack",
      "Decided to join the manage your booking team and became a staple member in the team",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
