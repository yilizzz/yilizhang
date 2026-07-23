import { motion } from "framer-motion";
import styles from "../styles/Receptionist.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
export default function Floor1Modal({ onClose }) {
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
        <div className="d-flex flex-row align-items-between justify-content-between h-100 w-100 gap-5 p-5">
          <div className="d-flex flex-column align-items-start justify-content-start w-50">
            <div className="d-flex flex-column align-items-start justify-content-start w-100 h-50">
              {" "}
              <h2>CONTACT</h2>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                yilizhang3@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> 07.89.91.62.24
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> 27 rue Victor Hugo,
                10120 Saint-André-les-Vergers
              </p>
              <p>
                <FontAwesomeIcon icon={faCar} /> Permis B et voiture
              </p>
            </div>
            <div className="d-flex flex-column align-items-start justify-content-start w-100 h-50">
              <h2>INFORMATIQUE</h2>
              <p>
                Maitrise Pack Office, Teams, Canva, Apprentissage rapide des
                systèmes (POS/SaaS)
              </p>
            </div>
          </div>
          <div className="d-flex flex-column align-items-start justify-content-start w-50">
            <div className="d-flex flex-column align-items-start justify-content-start w-100 h-50">
              <h2>LANGUES</h2>
              <div className="w-100">
                <div style={{ marginBottom: "12px" }}>
                  <p style={{ marginBottom: "4px", fontWeight: "500" }}>
                    Anglais
                  </p>
                  <div className={styles.skillBar}>
                    <div
                      className={styles.skillFill}
                      style={{
                        width: "80%",
                      }}
                    ></div>
                  </div>
                </div>
                <div style={{ marginBottom: "12px" }}>
                  <p style={{ marginBottom: "4px", fontWeight: "500" }}>
                    Chinois
                  </p>
                  <div className={styles.skillBar}>
                    <div
                      className={styles.skillFill}
                      style={{
                        width: "100%",
                      }}
                    ></div>
                  </div>
                </div>
                <div>
                  <p style={{ marginBottom: "4px", fontWeight: "500" }}>
                    Français
                  </p>
                  <div className={styles.skillBar}>
                    <div
                      className={styles.skillFill}
                      style={{
                        width: "80%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column align-items-start justify-content-start w-100 h-50">
              <h2>HOBBIES</h2>
              <p>
                <FontAwesomeIcon icon={faKitchenSet} /> Cuisinе
              </p>
              <p>
                <FontAwesomeIcon icon={faEarthAsia} /> Voyages
              </p>
              <p>
                <FontAwesomeIcon icon={faPenToSquare} /> Création de contenu
                (rédaction, visuels et vidéo)
              </p>
              <p>
                <FontAwesomeIcon icon={faPersonHiking} /> Randonnée
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
