import React, { Fragment, useEffect, useState } from 'react';
import { useContext } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, Presentation, About } from '../components/Intro';
import { Projects } from '../components/Projects';
import { Footer, Contact } from '../components/Footer';
import { about, contact, intro, navigation, projects, SEO, presentation } from '../config/config';
import {
  about_en,
  contact_en,
  intro_en,
  navigation_en,
  projects_en,
  SEO_en,
  presentation_en,
} from '../config/config_en';
import { MyHead } from '../components/MyHead';
import { Chat } from '@/components/Chat';
import { LanguageContext } from '../components/LanguageContext';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import Image from 'next/image';
import p from '../assets/image/entry.png';
import { motion } from 'framer-motion';
import useResponsivePanelSize from '@/hooks/useResponsivePanelSize';
export default function Home() {
  const { language } = useContext(LanguageContext);
  const content =
    language === 'en'
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
  const DEFAULT_DESKTOP_WIDTH = 30;
  const MOBILE_RIGHT_WIDTH = 80;
  const isMobile = useResponsivePanelSize();

  const rightPanelSize = isMobile ? MOBILE_RIGHT_WIDTH : DEFAULT_DESKTOP_WIDTH;
  const leftPanelSize = 100 - rightPanelSize; // 自动计算左侧宽度

  const minSizeRight = isMobile ? MOBILE_RIGHT_WIDTH : 20;
  const maxSizeRight = isMobile ? MOBILE_RIGHT_WIDTH : 50;
  return (
    <div className="position-relative">
      <PanelGroup direction="horizontal" style={{ height: '100vh' }}>
        <Panel defaultSize={100} style={{ height: '100%', overflowY: 'auto' }}>
          <Fragment>
            <MyHead seo={content.SEO} />
            <Nav title={content.navigation.name} links={content.navigation.links} />
            <Intro
              title={content.intro.title}
              description={content.intro.description}
              buttons={content.intro.buttons}
            />
            <Presentation
              title={content.presentation.title}
              description={content.presentation.description}
            />
            <Projects title={content.projects.title} cards={content.projects.cards} />
            <About title={content.about.title} cards={content.about.cards} />
            <Contact
              title={content.contact.title}
              description={content.contact.description}
              buttons={content.contact.buttons}
            />
            <button
              id="dynamicBtn"
              className={'position-fixed top-50 end-0 translate-middle-y border-0 bg-transparent '}
              onClick={() => setIsOpen(true)}
              style={{ display: isOpen ? 'none' : 'block' }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{
                  x: -25,
                  rotate: [0, -45, 0],
                  scale: 1.2,
                }}
                transition={{
                  duration: 1,
                  times: [0, 0.5, 1],
                }}
              >
                <Image src={p.src} alt={'chatbot'} width={100} height={100} />
              </motion.div>
            </button>
            <Footer />
          </Fragment>
        </Panel>
        {isOpen && (
          <>
            <PanelResizeHandle />
            <Panel defaultSize={rightPanelSize} minSize={minSizeRight} maxSize={maxSizeRight}>
              <div className="d-flex justify-content-center w-100 h-100 p-3">
                <button className={'position-fixed top-0 end-0'} onClick={() => setIsOpen(false)}>
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
