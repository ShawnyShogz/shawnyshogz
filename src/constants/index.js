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
  tiktok_big,
  x_logo,
  threejs,
  uol_logo,
  dmu_logo,
  instagram,
  tiktok,
  twitter,
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
    name: "Instagram",
    description:
      "I probably post the most here mainly travel ect so feel free to give me a follow or just watch from a distance.",
    tags: [
      {
        name: "travel",
        color: "blue-text-gradient",
      },
      {
        name: "food",
        color: "green-text-gradient",
      },
      {
        name: "life",
        color: "pink-text-gradient",
      },
    ],
    image: instagram,
    social_link: "https://www.instagram.com/shawny_shogz/",
    logo_image: instagram,
  },
  {
    name: "Tiktok",
    description:
      "I try to post coding related content here, but I also post some travel content here too. Key word try",
    tags: [
      {
        name: "travel",
        color: "blue-text-gradient",
      },
      {
        name: "coding",
        color: "green-text-gradient",
      },
      {
        name: "tech",
        color: "pink-text-gradient",
      },
    ],
    image: tiktok_big,
    social_link: "https://www.tiktok.com/@shawny_shogz",
    logo_image: tiktok,
  },
  {
    name: "Twitter",
    description:
      "I really don't post here at all but I've found this is the best place for worldly news and Arsenal transfer updates",
    tags: [
      {
        name: "news",
        color: "blue-text-gradient",
      },
      {
        name: "football",
        color: "green-text-gradient",
      },
      {
        name: "tech",
        color: "pink-text-gradient",
      },
    ],
    image: x_logo,
    social_link: "https://twitter.com/ShawnyShogz",
    logo_image: twitter,
  },
];

export { services, technologies, experiences, testimonials, projects };
