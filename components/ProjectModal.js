import styles from "../styles/ProjectModal.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Detail from "./Projectdetails";
import MyCarousel from "./MyCarousel";
import { projects } from "../config/config";
import { projects_en } from "../config/config_en";
import { Footer } from "./Footer";
import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
function ProjectModal({ title }) {
  const { language } = useContext(LanguageContext);
  const card =
    language === 'fr' ?
    projects.cards.find((card) => card.title === title) :
    projects_en.cards.find((card) => card.title === title);

  const address = card["demo"];
  const linkButton = 
    language === 'fr' ?
    "Cliquez pour voir la démo":
    "Site URL / Demo";

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >{title}</Modal.Title>
      </Modal.Header>
      
      <div className="d-flex justify-content-center" style={{ padding: '20px', backgroundColor:'#F7F7F7' }}>
        <Button href={address} variant="primary" target="_blank">
         🌐{linkButton}
        </Button>
      </div>

      <MyCarousel project={card}></MyCarousel>

      <div className={styles.pdetail}>
        <Detail project={card} detail="description"></Detail>
        <Detail project={card} detail="techniques"></Detail>
      </div>
      <Footer />
    </div>
  );
}
export default ProjectModal;
