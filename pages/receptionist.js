import React, { useContext, useState } from 'react';
import { Nav } from '../components/Navbar';
import { MyHead } from '../components/MyHead';
import { Footer } from '../components/Footer';
import { LanguageContext } from '../components/LanguageContext';
import {
  navigation,
  intro,
  SEO,
} from '../config/config';
import { navigation_en, intro_en, SEO_en } from '../config/config_en';
import { motion } from 'framer-motion';
import styles from '../styles/Receptionist.module.css';

export default function Receptionist() {
  const { language } = useContext(LanguageContext);
  const content =
    language === 'en'
      ? { nav: navigation_en, intro: intro_en, seo: SEO_en }
      : { nav: navigation, intro, seo: SEO };

  const experiences = [
    {
      role: 'Front Desk Receptionist',
      place: 'Grand Hôtel Lux',
      period: '2019 - Present',
      details:
        'Welcomed guests, managed reservations, coordinated with housekeeping and concierge, handled check-ins/outs and guest requests with a focus on hospitality and problem-solving.',
    },
    {
      role: 'Guest Relations Assistant',
      place: 'City Boutique Hotel',
      period: '2016 - 2019',
      details:
        'Assisted VIP guests, handled multilingual requests, processed invoices and supported event coordination for small conferences.',
    },
  ];

  const skills = [
    { name: 'Guest Communication', value: 95 },
    { name: 'Reservation Systems (PMS)', value: 85 },
    { name: 'Problem Solving', value: 90 },
    { name: 'Languages', value: 88 },
  ];

  const [activeExp, setActiveExp] = useState(0);

  return (
    <div className={styles.page}>
      <MyHead seo={content.seo} />
      <Nav title={content.nav.name} links={content.nav.links} />

      <main className={`container py-5 ${styles.container}`}>
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h1>Hotel Receptionist — CV</h1>
          <p className="lead">Interactive résumé showcasing guest-facing skills and experience.</p>
          <a
            className={`btn btn-primary ${styles.download}`}
            href={content.intro.buttons[1].link}
            target="_blank"
            rel="noreferrer"
          >
            Download PDF
          </a>
        </motion.header>

        <section className={`row ${styles.grid}`}>
          <aside className={`col-md-4 ${styles.aside}`}>
            <div className={styles.card}>
              <h3>Summary</h3>
              <p>
                Warm, professional receptionist with strong multi-language communication, reservation
                system experience and a guest-first mindset.
              </p>

              <h4 className="mt-4">Skills</h4>
              <div>
                {skills.map((s) => (
                  <div key={s.name} className={styles.skillRow}>
                    <div className={styles.skillLabel}>{s.name}</div>
                    <motion.div
                      className={styles.skillBar}
                      initial={{ width: 0 }}
                      animate={{ width: `${s.value}%` }}
                      transition={{ duration: 1 }}
                    />
                    <div className={styles.skillValue}>{s.value}%</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className={`col-md-8 ${styles.main}`}>
            <h3>Experience</h3>
            <div className={styles.experienceList}>
              {experiences.map((e, i) => (
                <motion.div
                  key={e.role}
                  className={`${styles.experience} ${i === activeExp ? styles.active : ''}`}
                  onClick={() => setActiveExp(i)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={styles.expHeader}>
                    <strong>{e.role}</strong>
                    <span className={styles.expMeta}>{e.place} • {e.period}</span>
                  </div>
                  {i === activeExp && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={styles.expDetails}
                    >
                      {e.details}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <h3 className="mt-4">Interactive Timeline</h3>
            <div className={styles.timeline}>
              {experiences.map((e, i) => (
                <motion.div key={i} className={styles.timelineItem} whileHover={{ x: 5 }}>
                  <div className={styles.dot} />
                  <div>
                    <strong>{e.role}</strong>
                    <div className={styles.expMetaSmall}>{e.place} — {e.period}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-5">
              <h4>Contact / Availability</h4>
              <p>Available for part-time or full-time receptionist positions. Fluent in EN / FR / CN.</p>
              <a className="btn btn-outline-secondary" href="mailto:yilizhang3@gmail.com">Email: yilizhang3@gmail.com</a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
