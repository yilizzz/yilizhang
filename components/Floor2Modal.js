import { motion } from "framer-motion";
import styles from "../styles/Receptionist.module.css";

export default function Floor2Modal({ onClose }) {
  return (
    <motion.div
      className={styles.modalOverlay}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.modalContent}
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="d-flex flex-column align-items-center justify-content-between h-100 w-100 gap-3">
          <div className="d-flex flex-column align-items-start justify-content-start w-100 gap-1">
            {" "}
            <h2>EXPERIENCES</h2>
            <h3>Restauration – Hôtellerie</h3>
            <p>
              Commis de cuisine stagiaire, LE CHAT NOIR, Troyes, 2026 (1 sem.)
            </p>
            <p>
              Commis de cuisine, COURTEPAILLE, St-André-les-Vergers, 2019 à 2022
            </p>
            <p>
              Commis de cuisine (+ accueil et prise de commandes), PARISDELICES,
              Pékin (Chine), 2016 à 2017
            </p>
            <p>
              Manager réceptionniste (+ gestion des achats/stocks), HOTEL TEMPS
              A MEILI, Yunnan (Chine), 2011 à 2014
            </p>
            <h3>Développement Technique</h3>
            <p>Développeur front-end, NAMKIN, Troyes, 2024 à 2025</p>
            <p>
              Support technique & Intégration client, ZHU ZHE INFORMATION
              SYSTEM, Yunnan (Chine), 2015
            </p>
            <p>
              Rédactrice et ingénieure en développement, Missions de
              communication (CCTV, Parc d’attractions TULOU HAKKA) et
              Développement technique (YOKOGAWA), 2008 à 2011
            </p>
          </div>
          <div className="d-flex flex-column align-items-start justify-content-start w-100 gap-1">
            <h2>DIPLÔME</h2>
            <p>BAC + 2 développeur inrégrateur web, OPENCLASSROOMS, 2023</p>
            <p>
              BAC + 5 technicien d’application informatique, Institut de
              Technologie d’Harbin (Chine),2005-2008
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
