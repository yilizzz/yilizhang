import React, { Fragment, useEffect, useState } from "react";
import { useContext } from "react";
import { Nav } from "../components/Navbar";
import { Intro, Presentation, About } from "../components/Intro";
import { Projects } from "../components/Projects";
import { Footer, Contact } from "../components/Footer";
import {
  about,
  contact,
  intro,
  navigation,
  projects,
  SEO,
  presentation,
} from "../config/config";
import {
  about_en,
  contact_en,
  intro_en,
  navigation_en,
  projects_en,
  SEO_en,
  presentation_en,
} from "../config/config_en";
import { MyHead } from "../components/MyHead";
import { Chat } from "@/components/Chat";
import { LanguageContext } from "../components/LanguageContext";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
export default function Home() {
  const { language } = useContext(LanguageContext);
  const content =
    language === "en"
      ? {
          about: about_en,
          contact: contact_en,
          intro: intro_en,
          navigation: navigation_en,
          projects: projects_en,
          SEO: SEO_en,
          presentation: presentation_en,
        }
      : {
          about,
          contact,
          intro,
          navigation,
          projects,
          SEO,
          presentation,
        };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="position-relative">
      <PanelGroup direction="horizontal" style={{ height: "100vh" }}>
        <Panel defaultSize={100} style={{ height: "100%", overflowY: "auto" }}>
          <Fragment>
            <MyHead seo={content.SEO} />
            <Nav
              title={content.navigation.name}
              links={content.navigation.links}
            />
            <Intro
              title={content.intro.title}
              description={content.intro.description}
              buttons={content.intro.buttons}
            />
            <Presentation
              title={content.presentation.title}
              description={content.presentation.description}
            />
            <Projects
              title={content.projects.title}
              cards={content.projects.cards}
            />
            <About title={content.about.title} cards={content.about.cards} />
            <Contact
              title={content.contact.title}
              description={content.contact.description}
              buttons={content.contact.buttons}
            />
            <button
              id="dynamicBtn"
              className={"position-fixed top-50 end-0 translate-middle-y"}
              onClick={() => setIsOpen(true)}
              style={{ display: isOpen ? "none" : "block" }}
            >
              button
            </button>
            <Footer />
          </Fragment>
        </Panel>
        {isOpen && (
          <>
            <PanelResizeHandle />
            <Panel defaultSize={30} minSize={20} maxSize={50}>
              <div className="d-flex justify-content-center w-100 h-100 p-3">
                <button
                  className={"position-fixed top-0 end-0"}
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>
                <Chat />
              </div>
            </Panel>
          </>
        )}
      </PanelGroup>
    </div>
  );
}
