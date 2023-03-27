import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  hoadr,
  student,
  chat,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'project',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const projects = [
  {
    name: 'Hoadr App',
    description: 'An application where people who want to manage their hoarding problem can put up their items for sale at a very cheap giveaway price.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: hoadr,
    source_code_link: 'https://hoardr-fe-95.vercel.app/',
  },
  {
    name: 'Messenger App',
    description: 'This is a real time react chat web application. It was developed using React and Firebase Google Authentication.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: chat,
    source_code_link: 'https://react-chat-flame.vercel.app/',
  },
  {
    name: 'Students Data',
    description: 'This is a web application. With the following features to be implemented filter students data using their age, level or gender. Consume an external API and download students result.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: student,
    source_code_link: 'https://students-data.vercel.app/',
  },
];

export {technologies, projects};
