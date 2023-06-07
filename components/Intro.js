import React from 'react';
import getConfig from 'next/config';
import Link from 'next/link';
import Stamp from './Stamp';
import Introtext from './Introtext';


const { publicRuntimeConfig } = getConfig();

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

export const About = ({ title, description }) => {
	return (
		<div id="about" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					{description.map((value, index) => (
						<p key={index} >{value}</p>
					))}
				</div>
			</div>
		</div>
	);
}