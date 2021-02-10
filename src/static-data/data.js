import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Arrow Builders | Custom Builders', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to the website for Arrow Builders in Boulder, Colorado', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'We are',
  name: 'Arrow Builders.',
  subtitle: 'We are custom builders in Boulder, Colorado.',
  cta: 'See our work',
  cta2: 'Learn about us',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'We are custom home builders based in Boulder, Colorado. We have over {years}+ years experience in custom, high-end home building. Our experien ced, lightweight team allows us to do high-quality work quickly and without the overhead that bigger outfits bring along with them. We will work closely with you to see your dream build or remodel realized.',
  paragraphTwo: '{more copy re: experience}',
  paragraphThree: '{more copy re: values}',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-1.jpg',
    title: 'Small Bathroom Remodel',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-2.jpg',
    title: 'Modernized Kitchen Remodel on a Budget',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-3.jpg',
    title: 'Moden Minimalist Kitchen Redesign and Remodel',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-4.jpg',
    title: 'Bright and Open Master Bath Remodel',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-5.jpg',
    title: 'Mixed-Media Bathroom Remodel',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-6.jpg',
    title: 'Modern Farmhouse Kitchen Remodel',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-7.jpg',
    title: 'Sleek, Modern Kitchen Remodel',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta:
    'If you would like to work together, call us at (555)555-5555, or click the button below to send us an email. We will respond to your inquiry within 48 hours!',
  btn: 'Send us an email',
  email: 'test@test.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
