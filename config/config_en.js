import profile from './profile.png';
import {
  faLanguage,
  faInfinity,
  faCode,
  faServer,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import { faPhp, faJs } from '@fortawesome/free-brands-svg-icons';

export const navigation_en = {
  name: 'Yili Zhang',
  links: [
    {
      title: 'Presentation',
      // link: "http://localhost:3000/#presentation",
      link: 'https://yilizhang.vercel.app/#presentation',
    },
    {
      title: 'Projects',
      // link: "http://localhost:3000/#projects",
      link: 'https://yilizhang.vercel.app/#projects',
    },
    {
      title: 'About',
      // link: "http://localhost:3000/#about",
      link: 'https://yilizhang.vercel.app/#about',
    },
    {
      title: 'Contact',
      // link: "http://localhost:3000/#contact",
      link: 'https://yilizhang.vercel.app/#contact',
    },
  ],
};
export const intro_en = {
  title: "Hello, I'm Yili",
  description: 'A web developer',

  buttons: [
    {
      title: 'Contact me',
      link: '#contact',
      isPrimary: true,
    },
    {
      title: 'CV',
      link: 'https://docdro.id/eJBLVi7',
      isPrimary: false,
    },
  ],
};

export const presentation_en = {
  title: 'Who am I',
  description: [
    'A **rigorous and versatile Front-end Developer**, I excel in creating high-performance web applications. My journey led me to a solid mastery of the **React, Next.js, and TypeScript** ecosystem, further strengthened by earning a RNCP 5.',
    'I confidently wield modern tools like **Storybook, Emotion, Ark-UI, React Query, and Zustand**, ensuring optimized state and data management. My expertise also extends to **back-end** integration (Directus, MongoDB, Express), providing a comprehensive understanding of web architectures.',
    'My colleagues appreciate my ability to foster a **joyful and collaborative atmosphere**, and my **strong adaptability** allows me to approach every new challenge with enthusiasm. My experience in China and France has cultivated this team spirit and my eagerness to learn.',
    'I am actively seeking a **front-end or full-stack** developer position. I am available for remote work and open to all new opportunities.',
  ],
};

export const about_en = {
  title: 'About',
  cards: [
    {
      title: 'What I do',
      description: [
        {
          item: 'Front-end development',
          icon: faLaptopCode,
        },
        {
          item: 'Back-end development',
          icon: faServer,
        },
      ],
    },
    {
      title: 'Language',
      description: [
        {
          item: 'English BULATS C1',
          icon: faLanguage,
        },
        {
          item: 'Chinese native language',
          icon: faLanguage,
        },
        {
          item: 'French DELF B2',
          icon: faLanguage,
        },
      ],
    },
    {
      title: 'Certificate',
      description: [
        {
          item: 'Developper Web',
          icon: faCode,
        },
        {
          item: 'Building Applications in PHP',
          icon: faPhp,
          link: 'https://www.coursera.org/account/accomplishments/certificate/EVP5HDSN9TKZ',
        },
        {
          item: 'JavaScript, jQuery, and JSON',
          icon: faJs,
          link: 'https://www.coursera.org/account/accomplishments/certificate/JJPTBM8S8LJF',
        },
        {
          item: 'Linear Algebra for Machine Learning',
          icon: faInfinity,
          link: 'https://www.coursera.org/account/accomplishments/certificate/62K75UGCM2KC',
        },
      ],
    },
  ],
};

export const projects_en = {
  title: 'Projects',
  cards: [
    {
      type: 'Multi-condition product search page',
      category: 'Frontend',
      image: 'https://projects-image.s3.eu-west-3.amazonaws.com/puroak1.webp',
      title: 'Configurateur product',
      description:
        'An interactive configuration tool for that allows users to: browse through different options and select different dimensions to identify products; once the configuration is complete, the tool can generate a detailed summary PDF.',
      demo: 'https://configurateur.puroak.fr/',
      techniques: [
        'React',
        'Storybook',
        'TypeScript',
        'Formik',
        '@ark-ui/react',
        'HTML2Canvas & jsPDF',
        'Tailwind CSS, Emotion (CSS & Styled)',
      ],
      pictures: [
        'https://projects-image.s3.eu-west-3.amazonaws.com/puroak1.webp',
        'https://projects-image.s3.eu-west-3.amazonaws.com/puroak2.webp',
        'https://projects-image.s3.eu-west-3.amazonaws.com/puroak3-2025.webp',
      ],
    },
    {
      type: 'B2B Company Website',
      category: 'Frontend',
      image: 'https://projects-image.s3.eu-west-3.amazonaws.com/agp1-2025.webp',
      title: 'B2B Company Website',
      description:
        'The front end of the website focuses on presenting information and branding. Beyond static information, the website offers various interactive elements to enhance the user experience and facilitate engagement: navigation, forms, dynamic content, and responsive design.',
      demo: 'https://groupe-agp.com/',
      techniques: ['Nextjs', 'TypeScript', 'Swiper', 'React Query', 'formik', 'next-sitemap'],
      pictures: [
        'https://projects-image.s3.eu-west-3.amazonaws.com/agp1-2025.webp',
        'https://projects-image.s3.eu-west-3.amazonaws.com/agp2-2025.webp',
      ],
    },
    {
      type: 'Local discount website',
      category: 'Frontend',
      image: 'https://projects-image.s3.eu-west-3.amazonaws.com/eco1.webp',
      title: 'Local discount website',
      description:
        "The website delivers a dynamic and intuitive experience for discovering local discounts. It's designed to prominently display essential discount information and details for all partner shops. The site also features engaging dynamic content displays, paypal payment and integrates Google Maps for location-based features.",
      demo: 'https://www.economus.fr/',
      techniques: ['Nextjs', 'TypeScript', 'Swiper', 'React Query', '@vis.gl/react-google-maps'],
      pictures: [
        'https://projects-image.s3.eu-west-3.amazonaws.com/eco1.webp',
        'https://projects-image.s3.eu-west-3.amazonaws.com/eco2.webp',
      ],
    },
    {
      type: 'B2B Company Website',
      category: 'Frontend',
      image: 'https://projects-image.s3.eu-west-3.amazonaws.com/namkin1.webp',
      title: 'Site Namkin',
      description:
        'The Namkin website is an engaging and informative platform, capable of effectively presenting both static company information and dynamic content. It relies on a robust connection with Directus as a CMS, an integration that allows the frontend to dynamically retrieve and display a wide range of content. A key interactive feature is the form-based content unlocking mechanism, which allows users to access exclusive content by submitting their information.',
      demo: 'https://namkin.fr/',
      techniques: ['Nextjs', 'TypeScript', 'storybook', 'zustand', 'directus'],
      pictures: [
        'https://projects-image.s3.eu-west-3.amazonaws.com/namkin1.webp',
        'https://projects-image.s3.eu-west-3.amazonaws.com/namkin2.webp',
        'https://projects-image.s3.eu-west-3.amazonaws.com/namkin3.webp',
      ],
    },
    {
      type: 'Z Service: Online shop',
      category: 'Fullstack',
      image: 'https://projects-image.s3.eu-west-3.amazonaws.com/ordernew.png',
      title: 'Z Service',
      description:
        'An online personal shop that allows clients to choose and pay for services. The shop owner can log in to edit or delete services.',
      demo: 'https://github.com/yilizzz/order-f',
      techniques: ['React', 'Redux', '@stripe/react-stripe-js', 'Primereact', 'Express', 'MongoDB'],
      pictures: [
        'https://projects-image.s3.eu-west-3.amazonaws.com/ordernew.png',
        'https://projects-image.s3.eu-west-3.amazonaws.com/order1.jpg',
        'https://projects-image.s3.eu-west-3.amazonaws.com/order2.png',
      ],
    },
    {
      type: 'My Rooom: Rental site',
      category: 'Frontend',
      image: 'https://projects-image.s3.eu-west-3.amazonaws.com/rooom.webp',
      title: 'My Rooom',
      description:
        'A rental site, features: view rental information on Google Maps, publish and mark ads.',
      demo: 'https://github.com/yilizzz/rooom-f',
      techniques: ['Next.js', 'React-google-maps/api', 'axios', 'Primereact', 'Primeflex'],
      pictures: [
        'https://projects-image.s3.eu-west-3.amazonaws.com/rooom3.webp',
        'https://projects-image.s3.eu-west-3.amazonaws.com/rooom1.webp',
        'https://projects-image.s3.eu-west-3.amazonaws.com/rooom2.webp',
      ],
    },
    {
      type: 'Sniff Jobs: Job posting site',
      category: 'Fullstack',
      image: 'https://projects-image.s3.eu-west-3.amazonaws.com/jobs.webp',
      title: 'Sniff Jobs',
      description:
        'A tool for tracking posting jobs: CRUD function of resume posting records, it also distinguishes postings in various states.',
      demo: 'https://github.com/yilizzz/jobs-f',
      techniques: ['Node.js', 'Express', 'MongoDB', 'Vue3', 'Naive UI', 'Pinia'],
      pictures: [
        'https://projects-image.s3.eu-west-3.amazonaws.com/jobs1.webp',
        'https://projects-image.s3.eu-west-3.amazonaws.com/jobs2.webp',
      ],
    },
    {
      type: 'My Old Grimoire: Book rating site',
      category: 'Backend',
      image: 'https://projects-image.s3.eu-west-3.amazonaws.com/grimoire.gif',
      title: 'My Old Grimoire',
      description:
        'Back-end of a book rating site: implement a logical data model according to regulations, store data in a secure way, implement CRUD operations in a secure way.',
      demo: 'https://github.com/yilizzz/grimoire-book-site',
      techniques: [
        'Node.js',
        'Express',
        'MongoDB',
        'jsonwebtoken',
        'multer',
        'sharp',
        '@aws-sdk/client-s3',
      ],
      pictures: [
        'https://projects-image.s3.eu-west-3.amazonaws.com/grimoire1.webp',
        'https://projects-image.s3.eu-west-3.amazonaws.com/grimoire2.webp',
      ],
    },
    {
      type: 'Kasa : real estate agency',
      category: 'Frontend',
      image: 'https://projects-image.s3.eu-west-3.amazonaws.com/kasa.gif',
      title: 'Kasa real estate agency',
      description:
        'A React site: configure navigation between the pages with React Router, initialize an application with Create React App, develop the interface using React components.',
      demo: 'https://yilizzz.github.io/kasa-location',
      techniques: ['React', 'React Router', 'Carousel', 'JSON'],
      pictures: [
        'https://projects-image.s3.eu-west-3.amazonaws.com/kasa1.webp',
        'https://projects-image.s3.eu-west-3.amazonaws.com/kasa2.webp',
      ],
    },
    {
      type: 'Blog LabZZZ: Blog management',
      category: 'Backend',
      image: 'https://projects-image.s3.eu-west-3.amazonaws.com/blog.webp',
      title: 'Blog LabZZZ',
      description:
        'A blog management provides the following functions: user login, registration, CRUD of blog categories and content, reading and comments.',
      demo: 'https://github.com/yilizzz/blog-zzz',
      techniques: ['PHP', 'PDO', 'MySQL', 'jQuery', 'Xampp'],
      pictures: [
        'https://projects-image.s3.eu-west-3.amazonaws.com/blog1.png',
        'https://projects-image.s3.eu-west-3.amazonaws.com/blog2.png',
      ],
    },
    {
      type: 'Sophie Bluel : Portfolio Architect',
      category: 'Frontend',
      image: 'https://projects-image.s3.eu-west-3.amazonaws.com/sophie.gif',
      title: 'Portfolio Architect Sophie Bluel',
      description:
        'A dynamic web page in JavaScript: retrieve user data in JavaScript via forms, manipulate DOM elements with JavaScript, handle user events with JavaScript.',
      demo: 'https://github.com/yilizzz/portfolio-sophie-frontend',
      techniques: ['JavaScript', 'Fetch', 'Fenêtre modale', 'Postman'],
      pictures: [
        'https://projects-image.s3.eu-west-3.amazonaws.com/sophie1.webp',
        'https://projects-image.s3.eu-west-3.amazonaws.com/sophie2.webp',
      ],
    },
    {
      type: "SEO of a photographer's site",
      category: 'SEO',
      image: 'https://projects-image.s3.eu-west-3.amazonaws.com/seo.webp',
      title: 'SEO site of Nina Carducci',
      description:
        "Optimize a photographer's site: optimize the performance, debug the code using Chrome DevTools.",
      demo: 'https://yilizzz.github.io/nina-photographer-seo/',
      techniques: [
        'SEO',
        'Chrome DevTools',
        'Lighthouse',
        'Google Rich Snippet',
        'WAVE Evaluation Tool',
      ],
      pictures: ['https://projects-image.s3.eu-west-3.amazonaws.com/nina1.webp'],
    },
    {
      type: 'Booki : Homepage of a Travel agency',
      category: 'Frontend',
      image: 'https://projects-image.s3.eu-west-3.amazonaws.com/booki.gif',
      title: 'Booki Voyage',
      description:
        'A homepage of a travel agency in HTML & CSS: integrate content according to a model, implement a responsive interface.',
      demo: 'https://yilizzz.github.io/Booki/',
      techniques: ['HTML', 'CSS', 'Media Query', 'Flexbox'],
      pictures: ['https://projects-image.s3.eu-west-3.amazonaws.com/booki1.webp'],
    },
  ],
};

export const contact_en = {
  title: 'Contact me',
  description: 'Feel free to reach me!',
  buttons: [
    {
      title: 'Email',
      link: 'mailto:yilizhang3@gmail.com',
      isPrimary: true,
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/yili-zhang-902bb0134/',
      isPrimary: false,
    },
    {
      title: 'Github',
      link: 'https://github.com/yilizzz',
      isPrimary: false,
    },
  ],
};

// SEARCH ENGINE
export const SEO_en = {
  // 50 - 60 char
  title: 'Yili Zhang | Full Stack Developer',
  description: 'Creating modern and responsive websites for businesses and individuals.',
  image: profile.src,
};
