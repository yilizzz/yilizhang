import profile from "./profile.png";
import {
  faLanguage,
  faInfinity,
  faCode,
  faServer,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { faPhp, faJs } from "@fortawesome/free-brands-svg-icons";

export const navigation = {
  name: "Yili Zhang",
  links: [
    {
      title: "Présentation",
      // link: "http://localhost:3000/#presentation",
      link: "https://yilizhang.vercel.app/#presentation",
    },
    {
      title: "Projets",
      // link: "http://localhost:3000/#projects",
      link: "https://yilizhang.vercel.app/#projects",
    },
    {
      title: "A propos",
      // link: "http://localhost:3000/#about",
      link: "https://yilizhang.vercel.app/#about",
    },
    {
      title: "Contact",
      // link: "http://localhost:3000/#contact",
      link: "https://yilizhang.vercel.app/#contact",
    },
  ],
};
export const intro = {
  title: "Bonjour, c'est Yili",
  description: "Une Développeuse Web",

  buttons: [
    {
      title: "Contactez moi",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "CV",
      link: "https://docdro.id/ufErgPb",
      isPrimary: false,
    },
  ],
};

export const presentation = {
  title: "Qui suis-je",
  description: [
    "**Développeuse Front-end rigoureuse et polyvalente**, j'excelle dans la création d'applications web performantes. Mon parcours, initié en programmation C++, m'a conduite à une solide maîtrise de l'écosystème **React, Next.js et TypeScript**, renforcée par l'obtention d'un RNCP 5.",
    "Je manie avec aisance des outils modernes comme **Storybook, Emotion, Ark-UI, React Query et Zustand**, assurant une gestion d'état et des données optimisée. Mon expertise s'étend également à l'intégration **back-end** (Directus, MongoDB, Express), offrant une compréhension globale des architectures web.",
    "Mes collègues apprécient ma capacité à apporter une **ambiance joyeuse et collaborative**, et ma **forte adaptabilité** me permet d'aborder chaque nouveau défi avec enthousiasme. Mon expérience en Chine et en France a cultivé cet esprit d'équipe et ma soif d'apprendre.",
    "Je recherche activement un poste de développeur **front-end ou full-stack**. Disponible pour le télétravail et ouverte à toute nouvelle opportunité."],
};

export const about = {
  title: "A propos",
  cards: [
    {
      title: "Ce que je fais",
      description: [
        {
          item: "Développement Web - Frontend",
          icon: faLaptopCode,
        },
        {
          item: "Développement Web - Backend",
          icon: faServer,
        },
      ],
    },
    {
      title: "Langues",
      description: [
        {
          item: "Anglais BULATS C1",
          icon: faLanguage,
        },
        {
          item: "Chinois langue maternelle",
          icon: faLanguage,
        },
        {
          item: "Français DELF B2",
          icon: faLanguage,
        },
      ],
    },
    {
      title: "Certificats",
      description: [
        {
          item: "Développeur Web",
          icon: faCode,
        },
        {
          item: "Building Applications in PHP",
          icon: faPhp,
          link: "https://www.coursera.org/account/accomplishments/certificate/EVP5HDSN9TKZ",
        },
        {
          item: "JavaScript, jQuery, and JSON",
          icon: faJs,
          link: "https://www.coursera.org/account/accomplishments/certificate/JJPTBM8S8LJF",
        },
        // {
        // 	item:"Freecodecamp : Responsive web design",
        // 	icon:faStamp,
        // 	link:"https://www.freecodecamp.org/certification/fcc2df687aa-93b1-4a59-a754-5fe38aa4b645/responsive-web-design"
        // },
        {
          item: "Linear Algebra for Machine Learning",
          icon: faInfinity,
          link: "https://www.coursera.org/account/accomplishments/certificate/62K75UGCM2KC",
        },
      ],
    },
  ],
};

export const projects = {
  title: "Projets",
  cards: [
    {
      type: "Puroak : Page de recherche de produits multi-conditions",
      category: "Frontend",
      image: "https://projects-image.s3.eu-west-3.amazonaws.com/puroak3.webp",
      title: "Configurateur Puroak",
      description:
          "Un outil de configuration interactif pour les produits Puroak qui permet aux utilisateurs de : parcourer les différentes options et sélectionner différentes dimensions pour identifier les produits; une fois la configuration terminée, l'outil peut générer un PDF récapitulatif détaillé.",
      demo: "https://configurateur.puroak.fr/",
      techniques: [
        "React",
        "Storybook",
        "TypeScript",
        "Formik",
        "@ark-ui/react",
        "HTML2Canvas & jsPDF",
        "Tailwind CSS, Emotion (CSS & Styled)",
      ],
      pictures: [
        "https://projects-image.s3.eu-west-3.amazonaws.com/puroak1.PNG",
        "https://projects-image.s3.eu-west-3.amazonaws.com/puroak2.PNG",
        "https://projects-image.s3.eu-west-3.amazonaws.com/puroak3.webp",
      ],
    },
    {
      type: "Groupe AGP : Site Web de l'entreprise",
      category: "Frontend",
      image: "https://projects-image.s3.eu-west-3.amazonaws.com/agp1.webp",
      title: "Website Groupe AGP",
      description:
          "Le frontend du site web de Groupe AGP est centrée sur la présentation de l'information et de l'image de marque. Au-delà des informations statiques, le site web propose divers éléments interactifs pour améliorer l'expérience utilisateur et faciliter l'engagement : navigation, formulaires, contenu dynamique et responsive design.",
      demo: "https://groupe-agp.com/",
      techniques: [
        "Nextjs",
        "TypeScript",
        "Swiper",
        "React Query",
        "formik",
        "next-sitemap",
      ],
      pictures: [
        "https://projects-image.s3.eu-west-3.amazonaws.com/agp1.webp",
        "https://projects-image.s3.eu-west-3.amazonaws.com/agp2.webp",
      ],
    },
    {
      type: "Economus : Site Web de réduction locaux",
      category: "Frontend",
      image: "https://projects-image.s3.eu-west-3.amazonaws.com/economus1.webp",
      title: "Website Economus",
      description:
          "Le site web Economus offre une expérience dynamique et conviviale pour la découverte de réductions locales. Il est conçu pour afficher de manière proéminente les informations essentielles sur les remises et les détails de tous les commerces partenaires. Le site propose également des affichages de contenu dynamiques attrayants, paypal payment et intègre Google Maps pour des fonctionnalités de localisation.",
      demo: "https://www.economus.fr/",
      techniques: [
        "Nextjs",
        "TypeScript",
        "Swiper",
        "React Query",
        "@vis.gl/react-google-maps",
      ],
      pictures: [
        "https://projects-image.s3.eu-west-3.amazonaws.com/economus1.webp",
        "https://projects-image.s3.eu-west-3.amazonaws.com/economus2.webp",
      ],
    },
    {
      type: "Namkin : Site Web de l'entreprise",
      category: "Frontend",
      image: "https://projects-image.s3.eu-west-3.amazonaws.com/namkin1.webp",
      title: "Website Namkin",
      description:
          "Le site web Namkin est une plateforme engageante et informative, capable de présenter efficacement à la fois les informations statiques de l'entreprise et le contenu dynamique. Il s'appuie sur une connexion robuste avec Directus en tant que CMS, une intégration qui permet au frontend de récupérer et d'afficher dynamiquement une vaste gamme de contenus. Une fonctionnalité interactive clé est le mécanisme de déverrouillage de contenu basé sur un formulaire, qui permet aux utilisateurs d'accéder à du contenu exclusif en soumettant leurs informations.",
      demo: "https://namkin.fr/",
      techniques: ["Nextjs", "TypeScript", "storybook", "zustand", "directus"],
      pictures: [
        "https://projects-image.s3.eu-west-3.amazonaws.com/namkin1.webp",
        "https://projects-image.s3.eu-west-3.amazonaws.com/namkin2.webp",
        "https://projects-image.s3.eu-west-3.amazonaws.com/namkin3.webp",
      ],
    },
    {
      type: "Z Service : Site de commande en ligne",
      category: "Fullstack",
      image: "https://projects-image.s3.eu-west-3.amazonaws.com/ordernew.png",
      title: "Z Service",
      description:
        "Une boutique en ligne : Il permet aux clients de choisir et de payer leurs services. Le directeur de la boutique peut se connecter pour modifier ou supprimer des services.",
      demo: "https://github.com/yilizzz/order-f",
      techniques: [
        "React.js",
        "Redux",
        "@stripe/react-stripe-js",
        "Primereact",
        "Express",
        "MongoDB",
      ],
      pictures: [
        "https://projects-image.s3.eu-west-3.amazonaws.com/ordernew.png",
        "https://projects-image.s3.eu-west-3.amazonaws.com/order1.jpg",
        "https://projects-image.s3.eu-west-3.amazonaws.com/order2.png",
      ],
    },
    {
      type: "My Rooom : Site de location",
      category: "Frontend",
      image: "https://projects-image.s3.eu-west-3.amazonaws.com/rooom.webp",
      title: "My Rooom",
      description:
        "Site de location, fonctionnalités: consulter les informations de location sur Google Maps, publier et marquer des annonces.",
      demo: "https://github.com/yilizzz/rooom-f",
      techniques: [
        "Next.js",
        "React-google-maps/api",
        "axios",
        "Primereact",
        "Primeflex",
      ],
      pictures: [
        "https://projects-image.s3.eu-west-3.amazonaws.com/rooom3.webp",
        "https://projects-image.s3.eu-west-3.amazonaws.com/rooom1.webp",
        "https://projects-image.s3.eu-west-3.amazonaws.com/rooom2.webp",
      ],
    },
    {
      type: "Sniff Jobs : Un outil pour la recherche d'emploi",
      category: "Fullstack",
      image: "https://projects-image.s3.eu-west-3.amazonaws.com/jobs.webp",
      title: "Sniff Jobs",
      description:
        "Un outil pour suivre les offres d'emploi : il est plus beau qu'un tableau de suivi de recherches en Excel, et possède la fonction CRUD.",
      demo: "https://github.com/yilizzz/jobs-f",
      techniques: [
        "Node.js",
        "Express",
        "MongoDB",
        "Vue3",
        "Naive UI",
        "Pinia",
      ],
      pictures: [
        "https://projects-image.s3.eu-west-3.amazonaws.com/jobs1.webp",
        "https://projects-image.s3.eu-west-3.amazonaws.com/jobs2.webp",
      ],
    },
    {
      type: "Mon Vieux Grimoire : Back-end d'un site de notation de livres",
      category: "Backend",
      image: "https://projects-image.s3.eu-west-3.amazonaws.com/grimoire.gif",
      title: "Mon Vieux Grimoire",
      description:
        "Back-end d'un site de notation de livres : implémenter un modèle logique de données conformément à la réglementation, stocker des données de manière sécurisée, mettre en œuvre des opérations CRUD de manière sécurisée.",
      demo: "https://github.com/yilizzz/grimoire-book-site",
      techniques: [
        "Node.js",
        "Express",
        "MongoDB",
        "jsonwebtoken",
        "multer",
        "sharp",
        "@aws-sdk/client-s3",
      ],
      pictures: [
        "https://projects-image.s3.eu-west-3.amazonaws.com/grimoire1.webp",
        "https://projects-image.s3.eu-west-3.amazonaws.com/grimoire2.webp",
      ],
    },
    {
      type: "Kasa Immobilière : Site de location",
      category: "Frontend",
      image: "https://projects-image.s3.eu-west-3.amazonaws.com/kasa.gif",
      title: "Kasa Immobilière",
      description:
        "Un site React : configurer la navigation entre les pages de l'application avec React Router, initialiser une application avec Create React App, développer des éléments de l'interface d'un site web grâce à des composants React.",
      demo: "https://yilizzz.github.io/kasa-location",
      techniques: ["React", "React Router", "Carousel", "JSON"],
      pictures: [
        "https://projects-image.s3.eu-west-3.amazonaws.com/kasa1.webp",
        "https://projects-image.s3.eu-west-3.amazonaws.com/kasa2.webp",
      ],
    },
    {
      type: "Blog ZZZ : Gestion de Blogs",
      category: "Backend",
      image: "https://projects-image.s3.eu-west-3.amazonaws.com/blog.webp",
      title: "Gestion de Blogs",
      description:
        "La gestion du blog fournit les fonctions suivantes : connexion des utilisateurs, inscription, CRUD des catégories et contenus de blog, lecture et commentaires.",
      demo: "https://github.com/yilizzz/blog-zzz",
      techniques: ["PHP", "PDO", "MySQL", "jQuery", "Xampp"],
      pictures: [
        "https://projects-image.s3.eu-west-3.amazonaws.com/blog1.png",
        "https://projects-image.s3.eu-west-3.amazonaws.com/blog2.png",
      ],
    },
    {
      type: "Sophie Bluel : Portfolio Architecte",
      category: "Frontend",
      image: "https://projects-image.s3.eu-west-3.amazonaws.com/sophie.gif",
      title: "Portfolio Architecte Sophie Bluel",
      description:
        "Une page web dynamique en JavaScript : récupérer les données utilisateurs dans le JavaScript via des formulaires, manipuler les éléments du DOM avec JavaScript, gérer les événements utilisateurs avec JavaScript.",
      demo: "https://github.com/yilizzz/portfolio-sophie-frontend",
      techniques: ["JavaScript", "Fetch", "Fenêtre modale", "Postman"],
      pictures: [
        "https://projects-image.s3.eu-west-3.amazonaws.com/sophie1.webp",
        "https://projects-image.s3.eu-west-3.amazonaws.com/sophie2.webp",
      ],
    },
    {
      type: "Nina Carducci : SEO",
      category: "SEO",
      image: "https://projects-image.s3.eu-west-3.amazonaws.com/seo.webp",
      title: "SEO site de Nina Carducci",
      description:
        "Optimisez un site d'une photographe : optimiser les performances d'un site web, débugger un site web grâce aux Chrome DevTools, rédiger un cahier de recette pour tester un site.",
      demo: "https://yilizzz.github.io/nina-photographer-seo/",
      techniques: [
        "SEO",
        "Chrome DevTools",
        "Lighthouse",
        "Google Rich Snippet",
        "WAVE Evaluation Tool",
      ],
      pictures: [
        "https://projects-image.s3.eu-west-3.amazonaws.com/nina1.webp",
      ],
    },
    {
      type: "Booki : Page d'accueil d'une agence de voyage",
      category: "Frontend",
      image: "https://projects-image.s3.eu-west-3.amazonaws.com/booki.gif",
      title: "Booki Voyage",
      description:
        "Un page d'accueil d'une agence de voyage en HTML & CSS : intégrer du contenu conformément à une maquette, implémenter une interface responsive.",
      demo: "https://yilizzz.github.io/Booki/",
      techniques: ["HTML", "CSS", "Media Query", "Flexbox"],
      pictures: [
        "https://projects-image.s3.eu-west-3.amazonaws.com/booki1.webp",
      ],
    },
  ],
};

export const contact = {
  title: "Contactez moi",
  description: "N'hésitez pas à me contacter!",
  buttons: [
    {
      title: "Email",
      link: "mailto:yilizhang3@gmail.com",
      isPrimary: true,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/yili-zhang-902bb0134/",
      isPrimary: false,
    },
    {
      title: "Github",
      link: "https://github.com/yilizzz",
      isPrimary: false,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: "Yili Zhang | Full Stack Developer",
  description:
    "Creating modern and responsive websites for businesses and individuals.",
  image: profile.src,
};
