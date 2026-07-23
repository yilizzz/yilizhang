import React, { useContext, useState, useRef } from "react";
import { Nav } from "../components/Navbar";
import { MyHead } from "../components/MyHead";
import { Footer } from "../components/Footer";
import { LanguageContext } from "../components/LanguageContext";
import { navigation, intro, SEO } from "../config/config";
import { navigation_en, intro_en, SEO_en } from "../config/config_en";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Receptionist.module.css";
import Image from "next/image";
import hotelImg from "../assets/image/bg.png";
import cloudImg from "../assets/image/cloud2.png";
import Floor4Modal from "../components/Floor4Modal";
import Floor3Modal from "../components/Floor3Modal";
import Floor2Modal from "../components/Floor2Modal";
import Floor1Modal from "../components/Floor1Modal";

export default function Receptionist() {
  const SEO_FR = {
    title: "Yili Zhang Emprin- Réceptionniste Polyvalente",
    description:
      "Réceptionniste trilingue expérimentée en hôtellerie restauration. Polyvalente, avec 7 ans d'expérience et 3 ans en gestion. Compétences en accueil client, gestion de réservations et coordination d'équipe.",
    image: "/y.png",
  };

  const [activeModal, setActiveModal] = useState(null);
  const containerRef = useRef(null);

  const handleClick = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const y = e.clientY - rect.top;
    const height = rect.height;
    const quarterHeight = height / 4;

    // Divide into 4 equal sections by height
    const section = Math.floor(y / quarterHeight);

    if (section === 0) {
      setActiveModal("section1");
    } else if (section === 1) {
      setActiveModal("section2");
    } else if (section === 2) {
      setActiveModal("section3");
    } else if (section === 3) {
      setActiveModal("section4");
    } else {
      setActiveModal(null);
    }
  };
  const transition = {
    duration: 12,
    repeat: Infinity,
    repeatType: "loop",
  };
  return (
    <div className={styles.receptionist}>
      <MyHead seo={SEO_FR} />
      <div
        ref={containerRef}
        className={styles.hotelContainer}
        onClick={handleClick}
        style={{ cursor: "pointer", position: "relative" }}
      >
        <Image
          src={hotelImg}
          alt="Hotel"
          className={styles.hotelImage}
          priority
        />

        {/* Cloud Animations */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          {/* Cloud 1 - Section 1 (Top Quarter) */}
          <motion.div
            style={{
              position: "absolute",
              top: "7.5%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            animate={{ opacity: [0.5, 1, 0.5], x: [-20, 20, -20] }}
            transition={{ ...transition, delay: 0 }}
          >
            <Image
              src={cloudImg}
              alt="Cloud 1"
              width={360}
              height={240}
              style={{ objectFit: "contain" }}
            />
          </motion.div>

          {/* Cloud 2 - Section 2 (Upper Middle) */}
          <motion.div
            style={{
              position: "absolute",
              top: "25.5%",
              left: "30%",
              transform: "translateX(-50%)",
            }}
            animate={{ opacity: [0.5, 1, 0.5], x: [20, -20, 20] }}
            transition={{ ...transition, delay: 3 }}
          >
            <Image
              src={cloudImg}
              alt="Cloud 2"
              width={300}
              height={200}
              style={{ objectFit: "contain" }}
            />
          </motion.div>

          {/* Cloud 3 - Section 3 (Lower Middle) */}
          <motion.div
            style={{
              position: "absolute",
              top: "50.5%",
              right: "17%",
              transform: "translateX(-50%)",
            }}
            animate={{ opacity: [0.5, 1, 0.5], x: [-25, 25, -25] }}
            transition={{ ...transition, delay: 6 }}
          >
            <Image
              src={cloudImg}
              alt="Cloud 3"
              width={450}
              height={300}
              style={{ objectFit: "contain" }}
            />
          </motion.div>

          {/* Cloud 4 - Section 4 (Bottom Quarter) */}
          <motion.div
            style={{
              position: "absolute",
              top: "75%",
              right: "10%",
              transform: "translateX(-50%)",
            }}
            animate={{ opacity: [0.5, 1, 0.5], x: [25, -25, 25] }}
            transition={{ ...transition, delay: 9 }}
          >
            <Image
              src={cloudImg}
              alt="Cloud 4"
              width={360}
              height={240}
              style={{ objectFit: "contain" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Modal Container */}
      <AnimatePresence mode="wait">
        {activeModal === "section1" && (
          <Floor4Modal onClose={() => setActiveModal(null)} />
        )}

        {activeModal === "section2" && (
          <Floor3Modal onClose={() => setActiveModal(null)} />
        )}

        {activeModal === "section3" && (
          <Floor2Modal onClose={() => setActiveModal(null)} />
        )}

        {activeModal === "section4" && (
          <Floor1Modal onClose={() => setActiveModal(null)} />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
