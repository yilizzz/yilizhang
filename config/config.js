
import profile from './profile.png';
//import grimoire from './grimoire.webm';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Yili Zhang",
	links: [
		{
			title: "A propos",
			link: "#about",
		},
		{
			title: "Projets",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
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
			link: "",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Qui suis-je",
	description: [
		"Je étais diplômé en informatique en Chine. J'étais programmeuse de Manufacturing Execution System en langage C++.","Ensuite, j'ai changé de métier plusieurs fois, 🖖🏻 juste pour trouver un fait : le développement est le plus intéressant.","Maintenant en France, j'ai repris des savoir-faire en développement web sur Freecodecamp, Coursera et Openclassrooms."
	],
}


export const projects = {
	title: "Projets",
	cards: [
		{
			type:"Node.js",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/grimoire.gif",
			title: "Mon Vieux Grimoire",
			description: "Back-end d'un site de notation de livres: implémenter un modèle logique de données conformément à la réglementation, stocker des données de manière sécurisée, mettre en œuvre des opérations CRUD de manière sécurisée.",
			demo:"https://grimoire-book-site-f.vercel.app/",
			stack: [
				"Node.js", 
				"Express",
				"MongoDB"
			],
			pictures: [
				"https://projects-image.s3.eu-west-3.amazonaws.com/grimoire1.webp",
				"https://projects-image.s3.eu-west-3.amazonaws.com/grimoire2.webp",
			],
		},
		{
			type:"React",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/kasa.gif",
			title: "Kasa Immobilière ",
			description: "Tâche de projet: configurer la navigation entre les pages de l'application avec React Router, initialiser une application avec Create React App, développer des éléments de l'interface d'un site web grâce à des composants React.",
			demo:"https://yilizzz.github.io/kasa-location",
			stack: [
				"React", 
				"React Router"
			],
			pictures: [
				"https://projects-image.s3.eu-west-3.amazonaws.com/kasa1.webp",
				"https://projects-image.s3.eu-west-3.amazonaws.com/kasa2.webp"
			],
		},
		{
			type:"PHP",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/blog.webp",
			title: "Gestion de Blogs",
			description: "Gestion du blog, fournit les fonctions : connexion des utilisateurs, inscription, CRUD de catégorie et contenu de blog, lire et commenter.",
			demo:"https://portfolio-sophie.alwaysdata.net/blogzzz/",
			stack: [
				"PHP", 
				"PDO",
				"MySQL"
			],
			pictures: [
				"https://projects-image.s3.eu-west-3.amazonaws.com/blog1.png",
				"https://projects-image.s3.eu-west-3.amazonaws.com/blog2.png"
				]
		},
		{
			type:"JavaScript",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/sophie.gif",
			title: "Portfolio Architecte Sophie Bluel",
			description: "Créez une page web dynamique avec JavaScript: récupérer les données utilisateurs dans le JavaScript via des formulaires, manipuler les éléments du DOM avec JavaScript, gérer les événements utilisateurs avec JavaScript.",
			demo:"https://yilizzz.github.io/portfolio-sophie-frontend/",
			stack: [
				"JavaScript", 
				"Fetch"
			],
			pictures: [
				"https://projects-image.s3.eu-west-3.amazonaws.com/sophie1.webp",
				"https://projects-image.s3.eu-west-3.amazonaws.com/sophie2.webp"
				]
		},
		{
			type:"SEO",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/seo.webp",
			title: "SEO site de Nina Carducci",
			description: "Optimisez un site de photographe: optimiser les performances d'un site web, débugger un site web grâce aux Chrome DevTools, rédiger un cahier de recette pour tester un site.",
			demo:"https://yilizzz.github.io/nina-photographer-seo/",
			stack: [
				"SEO", 
				"Chrome DevTools"
			],
			pictures: [
				"https://projects-image.s3.eu-west-3.amazonaws.com/nina1.webp"
				]
		},
		{   
			type:"HTML+CSS",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/booki.gif",
			title: "Booki Voyage",
			description: "Créez la page d'accueil d'une agence de voyage avec HTML & CSS: intégrer du contenu conformément à une maquette, implémenter une interface responsive.",
			demo:"https://yilizzz.github.io/Booki/",
			stack: [
				"HTML", 
				"CSS"
			],
			pictures: [
				"https://projects-image.s3.eu-west-3.amazonaws.com/booki1.webp"
				]
		},
	],
}

export const contact = {
	title: "Contactez moi",
	description: " Mode service 7*24...c'est une blague, mais contactez-moi !",
	buttons: [
		{
			title: "Email",
			link: "mailto:yilizhang3@gmail.com",
			isPrimary: true,
		},
		{
			title: "Linkin",
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
	title: "Yili Zhang | developer",
	description: "I create websites.",
	image: profile.src,
}
