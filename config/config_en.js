
import profile from './profile.png';
import { faLanguage, faInfinity, faCode, faServer, faLaptopCode} from '@fortawesome/free-solid-svg-icons';
import {faPhp, faJs} from "@fortawesome/free-brands-svg-icons";

export const navigation_en = {
	name: "Yili Zhang",
	links: [
		{
			title: "Presentation",
			// link: "http://localhost:3000/#presentation",
			link: "https://yilizhang.vercel.app/#presentation"
		},
		{
			title: "Projects",
			// link: "http://localhost:3000/#projects",
			link: "https://yilizhang.vercel.app/#projects"
		},
		{
			title: "About",
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
export const intro_en = {
	title: "Hello, I'm Yili",
	description: "A full stack developer",
	
	buttons: [
		{
			title: "Contact me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "CV",
			link: "https://docdro.id/eQ14GqX",
			isPrimary: false,
		},
	],
}

export const presentation_en = {
	title: "Who am I",
	description: [
		"I got my diploma in computer applied technology in China, then I became a programmer of Manufacturing Execution System, using C++.",
        "I've tried several different careers and eventually found my first job to be the most interesting.",
        "Now I upgraded my knowledge and skills in HTML+CSS, JavaScript, Git/GitHub, React, Node.js, PHP and MySQL."
	],
}

export const about_en = {
	title: "About",
	cards: [
		{
			title: "What I do",
			description: [
				{
					item:"Front-end development",
					icon: faLaptopCode
				}, 
				{
					item:"Back-end development",
					icon: faServer
				}
			]
			
		},
		{
			title: "Language",
			description: [
				{
					item:"English BULATS C1",
					icon: faLanguage,
					link: "https://www.docdroid.net/eJBLVi7/bulats-pdf"
				}, 
				{
					item:"Chinese native language",
					icon: faLanguage
				},
				{
					item:"French DELF B2",
					icon: faLanguage,
					link: "https://www.docdroid.net/170zuKM/delfb2-rotated-pdf"
				}
			]
			
		},
		{
			title: "Certificate",
			description: [
				{
					item:"Developper Web",
					icon: faCode, 
					link:"https://www.docdroid.net/87wJxDS/proof-of-completion-pdf"
				},
				{
					item:"Building Applications in PHP",
					icon: faPhp,
					link: "https://www.coursera.org/account/accomplishments/certificate/EVP5HDSN9TKZ",
				},
				{
					item:"JavaScript, jQuery, and JSON",
					icon: faJs,
					link: "https://www.coursera.org/account/accomplishments/certificate/JJPTBM8S8LJF",
				},
				// {
				// 	item:"Freecodecamp : Responsive web design",
				// 	icon:faStamp,
				// 	link:"https://www.freecodecamp.org/certification/fcc2df687aa-93b1-4a59-a754-5fe38aa4b645/responsive-web-design"
				// },
				{
					item:"Linear Algebra for Machine Learning",
					icon: faInfinity,
					link:"https://www.coursera.org/account/accomplishments/certificate/62K75UGCM2KC"
				}
			]
		}
	],
}

export const projects_en = {
	title: "Projects",
	cards: [
		{
			type:"Node.js",
			category:"Backend",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/grimoire.gif",
			title: "My Old Grimoire",
			description: "Back-end of a book rating site: implement a logical data model according to regulations, store data in a secure way, implement CRUD operations in a secure way.",
			demo:"https://grimoire-book-site-f.vercel.app/",
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
			type:"React",
			category:"Frontend",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/kasa.gif",
			title: "Kasa real estate agency",
			description: "A React site: configure navigation between the pages with React Router, initialize an application with Create React App, develop the interface using React components.",
			demo:"https://yilizzz.github.io/kasa-location",
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
			type:"PHP",
			category:"Backend",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/blog.webp",
			title: "Blog LabZZZ",
			description: "A blog management provides the following functions: user login, registration, CRUD of blog categories and content, reading and comments.",
			demo:"https://portfolio-sophie.alwaysdata.net/blogzzz/",
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
			type:"JavaScript",
			category:"Frontend",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/sophie.gif",
			title: "Portfolio Architect Sophie Bluel",
			description: "A dynamic web page in JavaScript: retrieve user data in JavaScript via forms, manipulate DOM elements with JavaScript, handle user events with JavaScript.",
			demo:"https://yilizzz.github.io/portfolio-sophie-frontend/",
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
			type:"SEO",
			category:"SEO",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/seo.webp",
			title: "SEO site of Nina Carducci",
			description: "Optimize a photographer's site: optimize the performance, debug the code using Chrome DevTools.",
			demo:"https://yilizzz.github.io/nina-photographer-seo/",
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
			type:"HTML+CSS",
			category:"Frontend",
			image: "https://projects-image.s3.eu-west-3.amazonaws.com/booki.gif",
			title: "Booki Voyage",
			description: "A homepage of a travel agency in HTML & CSS: integrate content according to a model, implement a responsive interface.",
			demo:"https://yilizzz.github.io/Booki/",
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

export const contact_en = {
	title: "Contact me",
	description: "Feel free to reach me!",
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
export const SEO_en = {
	// 50 - 60 char  
	title: "Yili Zhang | Full Stack Developer",
	description: "Creating modern and responsive websites for businesses and individuals.",
	image: profile.src,
}
