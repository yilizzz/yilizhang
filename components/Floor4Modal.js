import { motion } from "framer-motion";
import styles from "../styles/Receptionist.module.css";
import photo from "../assets/image/y.png";
export default function Floor4Modal({ onClose }) {
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
        <div className="d-flex flex-row align-items-center justify-content-center h-100 w-100 gap-3">
          <div className="d-flex flex-column align-items-center justify-content-center h-100 w-75 gap-3">
            <h2>RECEPTIONNISTE POLYVALENTE</h2>
            <p>
              <b>Trilingue, polyvalente</b> et forte d’une experience de 7 ans
              dans l’hôtellerie restauration, dont 3 ans en qualité de manager
              réceptionniste, vous pouvez compter sur ma{" "}
              <b>capacité d’adaptation</b>, mon sens aigu de l’accueil et de
              l’organisation.
            </p>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center h-100 w-25 gap-3">
            <img
              src={photo.src}
              alt="Receptionist"
              width="150"
              height="200"
              style={{ borderRadius: "16px" }}
            />
            <p>Yili ZHANG EMPRIN</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
