import { motion } from "framer-motion";
import styles from "../styles/Receptionist.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function Floor3Modal({ onClose }) {
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
        <div className="d-flex flex-column align-items-center justify-content-center h-100 w-100 gap-3">
          <h2>COMPETENCES</h2>
          <div className="d-flex flex-row align-items-start justify-content-start h-100 w-70 gap-1">
            <div className="d-flex flex-column align-items-start justify-content-start h-100 w-10 gap-1">
              {Array.from({ length: 12 }).map((_, index) => (
                <p>
                  <FontAwesomeIcon key={index} icon={faCheck} />
                </p>
              ))}
            </div>
            <div className="d-flex flex-column align-items-start justify-content-start h-100 w-90 gap-1">
              <p>Accueillir les clients par téléphone et physiquement</p>
              <p>Renseigner le client sur les prestations de l’établissement</p>
              <p>
                Gérer le planning de réservations et d’occupation des chambres
              </p>
              <p>Enregistrer les arrivées et départs</p>
              <p>Procéder aux encaissements et établir une facture</p>
              <p>Veiller au calme et à la sécurité de l'établissement</p>
              <p>Traiter les litiges et proposer un compromis</p>
              <p>
                Orienter les clients vers les restaurants ou autres commerces
              </p>
              <p>Assurer la coordination entre les différents services</p>
              <p>
                Gérer la communication sur les réseaux et créer des contenus
              </p>
              <p>Travailler de façon autonome avec un esprit d’équipe</p>
              <p>
                Appliquer la charte de l’établissement et les règles de sécurité
                et d’hygiène
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
