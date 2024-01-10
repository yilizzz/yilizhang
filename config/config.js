
import profile from './profile.png';
import { faLanguage, faInfinity, faCode, faServer, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faPhp, faJs } from "@fortawesome/free-brands-svg-icons";

export const navigation = {
	name: "Yili Zhang",
	links: [
		{
			title: "Présentation",
			// link: "http://localhost:3000/#presentation",
			link: "https://yilizhang.vercel.app/#presentation"
		},
		{
			title: "Projets",
			// link: "http://localhost:3000/#projects",
			link: "https://yilizhang.vercel.app/#projects"
		},
		{
			title: "A propos",
			// link: "http://localhost:3000/#about",
			link: "https://yilizhang.vercel.app/#about"
		},
		{
			title: "Contact",
			// link: "http://localhost:3000/#contact",
			link: "https://yilizhang.vercel.app/#contact"
		}

	],
}
export const intro = {
	title: "Bonjour, c'est Yili",
	description: "Une Développeuse Web Full Stack",

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
}

export const presentation = {
	title: "Qui suis-je",
	description: [
		"Diplômée en informatique, j'ai exercé le métier de programmeuse C++. Ma passion pour le développement web m'a poussée à obtenir un RNCP 5 dans ce secteur.",
		"Je maîtrise les techniques de front-end React, Next.js, JS, HTML+CSS, de back-end Node.js, MongoDB. Ayant travaillé en Chine et en France, je possède une forte adaptabilité et un bon esprit d'équipe. Je suis également ouverte à apprendre de nouvelles technologies et à relever de nouveaux défis, comme je l'ai toujours fait."
	],
}

export const about = {
	title: "A propos",
	cards: [
		{
			title: "Ce que je fais",
			description: [
				{
					item: "Développement Web - Frontend",
					icon: faLaptopCode
				},
				{
					item: "Développement Web - Backend",
					icon: faServer
				}
			]

		},
		{
			title: "Langues",
			description: [
				{
					item: "Anglais BULATS C1",
					icon: faLanguage,
					link: "https://www.docdroid.net/eJBLVi7/bulats-pdf"
				},
				{
					item: "Chinois langue maternelle",
					icon: faLanguage
				},
				{
					item: "Français DELF B2",
					icon: faLanguage,
					link: "https://www.docdroid.net/170zuKM/delfb2-rotated-pdf"
				}
			]

		},
		{
			title: "Certificats",
			description: [
				{
					item: "Développeur Web",
					icon: faCode,
					link: "https://www.docdroid.net/87wJxDS/proof-of-completion-pdf"
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
					link: "https://www.coursera.org/account/accomplishments/certificate/62K75UGCM2KC"
				}
			]
		}
	],
}

export const projects = {
	title: "Projets",
	cards: [
		{
			type: "React + Express + MongoDB",
			category: "Fullstack",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/ordernew.png",
			title: "Z Service",
			description: "Une boutique en ligne : Il permet aux clients de choisir et de payer leurs services en ligne. Le directeur de la boutique peut se connecter pour modifier ou supprimer des services.",
			demo: "https://zservice.vercel.app/",
			techniques: [
				"React.js",
				"Redux",
				"@stripe/react-stripe-js",
				"Primereact",
				"Express",
				"MongoDB"
			],
			pictures: [
				"https://projects-image.s3.eu-west-3.amazonaws.com/ordernew.png",
				"https://projects-image.s3.eu-west-3.amazonaws.com/order1.jpg",
				"https://projects-image.s3.eu-west-3.amazonaws.com/order2.png"
			],
		},
		{
			type: "Next.js",
			category: "Frontend",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/rooom.webp",
			title: "My Rooom",
			description: "Site de location, fonctionnalités: consulter les informations de location sur Google Maps, publier et marquer des annonces.",
			demo: "https://rooom-f.vercel.app/",
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
			type: "Node.js + Vue3",
			category: "Fullstack",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/jobs.webp",
			title: "Sniff Jobs",
			description: "Une application pour suivre les offres d'emploi : il est plus beau qu'un tableau de suivi de recherches en Excel, et possède la fonction CRUD.",
			demo: "https://jobs-f.vercel.app/",
			techniques: [
				"Node.js",
				"Express",
				"MongoDB",
				"Vue3",
				"Naive UI",
				"Pinia"
			],
			pictures: [
				"https://projects-image.s3.eu-west-3.amazonaws.com/jobs1.webp",
				"https://projects-image.s3.eu-west-3.amazonaws.com/jobs2.webp",
			],
		},
		{
			type: "Node.js",
			category: "Backend",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/grimoire.gif",
			title: "Mon Vieux Grimoire",
			description: "Back-end d'un site de notation de livres : implémenter un modèle logique de données conformément à la réglementation, stocker des données de manière sécurisée, mettre en œuvre des opérations CRUD de manière sécurisée.",
			demo: "https://grimoire-book-site-f.vercel.app/",
			techniques: [
				"Node.js",
				"Express",
				"MongoDB",
				"jsonwebtoken",
				"multer",
				"sharp",
				"@aws-sdk/client-s3"

			],
			pictures: [
				"https://projects-image.s3.eu-west-3.amazonaws.com/grimoire1.webp",
				"https://projects-image.s3.eu-west-3.amazonaws.com/grimoire2.webp",
			],
		},
		{
			type: "React",
			category: "Frontend",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/kasa.gif",
			title: "Kasa Immobilière ",
			description: "Un site React : configurer la navigation entre les pages de l'application avec React Router, initialiser une application avec Create React App, développer des éléments de l'interface d'un site web grâce à des composants React.",
			demo: "https://yilizzz.github.io/kasa-location",
			techniques: [
				"React",
				"React Router",
				"Carousel",
				"JSON"
			],
			pictures: [
				"https://projects-image.s3.eu-west-3.amazonaws.com/kasa1.webp",
				"https://projects-image.s3.eu-west-3.amazonaws.com/kasa2.webp"
			],
		},
		{
			type: "PHP",
			category: "Backend",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/blog.webp",
			title: "Gestion de Blogs",
			description: "La gestion du blog fournit les fonctions suivantes : connexion des utilisateurs, inscription, CRUD des catégories et contenus de blog, lecture et commentaires.",
			demo: "https://portfolio-sophie.alwaysdata.net/blogzzz/",
			techniques: [
				"PHP",
				"PDO",
				"MySQL",
				"jQuery",
				"Xampp"
			],
			pictures: [
				"https://projects-image.s3.eu-west-3.amazonaws.com/blog1.png",
				"https://projects-image.s3.eu-west-3.amazonaws.com/blog2.png"
			]
		},
		{
			type: "JavaScript",
			category: "Frontend",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/sophie.gif",
			title: "Portfolio Architecte Sophie Bluel",
			description: "Une page web dynamique en JavaScript : récupérer les données utilisateurs dans le JavaScript via des formulaires, manipuler les éléments du DOM avec JavaScript, gérer les événements utilisateurs avec JavaScript.",
			demo: "https://yilizzz.github.io/portfolio-sophie-frontend/",
			techniques: [
				"JavaScript",
				"Fetch",
				"Fenêtre modale",
				"Postman"
			],
			pictures: [
				"https://projects-image.s3.eu-west-3.amazonaws.com/sophie1.webp",
				"https://projects-image.s3.eu-west-3.amazonaws.com/sophie2.webp"
			]
		},
		{
			type: "SEO",
			category: "SEO",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/seo.webp",
			title: "SEO site de Nina Carducci",
			description: "Optimisez un site d'une photographe : optimiser les performances d'un site web, débugger un site web grâce aux Chrome DevTools, rédiger un cahier de recette pour tester un site.",
			demo: "https://yilizzz.github.io/nina-photographer-seo/",
			techniques: [
				"SEO",
				"Chrome DevTools",
				"Lighthouse",
				"Google Rich Snippet",
				"WAVE Evaluation Tool"
			],
			pictures: [
				"https://projects-image.s3.eu-west-3.amazonaws.com/nina1.webp"
			]
		},
		{
			type: "HTML+CSS",
			category: "Frontend",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/booki.gif",
			title: "Booki Voyage",
			description: "Un page d'accueil d'une agence de voyage en HTML & CSS : intégrer du contenu conformément à une maquette, implémenter une interface responsive.",
			demo: "https://yilizzz.github.io/Booki/",
			techniques: [
				"HTML",
				"CSS",
				"Media Query",
				"Flexbox"
			],
			pictures: [
				"https://projects-image.s3.eu-west-3.amazonaws.com/booki1.webp"
			]
		},
	],
}

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
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Yili Zhang | Full Stack Developer",
	description: "Creating modern and responsive websites for businesses and individuals.",
	image: profile.src,
}
