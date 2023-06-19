import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, Presentation, About } from '../components/Intro';
import { Projects } from '../components/Projects';
import { Footer, Contact } from '../components/Footer';
import { about, contact, intro, navigation, projects, SEO, presentation } from '../config/config';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <Intro
        title={intro.title}
        description={intro.description}
        buttons={intro.buttons}
      />
      <Presentation
        title={presentation.title}
        description={presentation.description}
      />
      <Projects
        title={projects.title}
        cards={projects.cards}
      />
      <About
        title={about.title}
        cards={about.cards}
      />
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      <Footer />
    </Fragment>
  );
}
