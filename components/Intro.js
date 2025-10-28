import React from 'react';
import Link from 'next/link';
import Stamp from './Stamp';
import Introtext from './Introtext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown';


export const Intro = ({ title, description, buttons }) => {

	return (
		<div className="bg-secondary py-5 px-5">
			<div className="container">
				<div className=" row align-items-center">
					<div className="col-sm-6">
						<Introtext title={title} description={description}></Introtext>
						<div className="text-center">
							{buttons.map((value, index) => (
								(value.isPrimary) ?
									<Link key={index} href={value.link} className="btn btn-primary my-1 mx-3">
										{value.title}
									</Link>
									:
									<Link key={index} href={value.link} target="_blank" className="btn btn-outline-primary my-1 mx-3">
										{value.title}
									</Link>
							))}
						</div>
					</div>
					<div className="col-sm-6 text-center" style={{ marginTop: '20px' }}>
						<Stamp></Stamp>

					</div>
				</div>
			</div>
		</div>
	);
}

export const Presentation = ({ title, description }) => {
	return (
		<div id="presentation" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-4">
					{description.map((value, index) => (
						// <p className="fs-5" key={index} >{value}</p>
						<ReactMarkdown  key={index}>{value}</ReactMarkdown>
					))}
				</div>
				<div className='d-flex flex-row justify-content-center'>
					<a href="#projects">
						<FontAwesomeIcon icon={faAnglesDown} />
					</a>
				</div>
			</div>
		</div>
	);
}

export const About = ({ title, cards }) => {
	return (
		<div id="about" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export const Card = ({ title, description }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
			<h4 className="text-primary">{title}</h4>
			<ul className="text-dark">
				{description.map((value, index) => (
					<li key={index}>
						{value.link ? (
							<Link key={index} href={value.link} target="_blank">
								{value.item}
								<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} />
							</Link>
						) : (
							<>
								{value.item}
								<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} />

							</>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}