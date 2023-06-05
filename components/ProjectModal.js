import styles from "../styles/ProjectModal.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Detail from "./Projectdetails";
import MyCarousel from "./MyCarousel";
import { projects } from "../config/config";
import { Footer } from "./Footer";
function ProjectModal({ title }) {
  const card = projects.cards.find((card) => card.title === title);
  const address = card["demo"];

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >{title}</Modal.Title>
      </Modal.Header>
      
      <div className="d-flex justify-content-center" style={{ padding: '20px', backgroundColor:'#F7F7F7' }}>
        <Button href={address} variant="primary" target="_blank">
            Cliquez sur moi pour voir la démo
        </Button>
      </div>

      <MyCarousel project={card}></MyCarousel>

      <div className={styles.pdetail}>
        <Detail project={card} detail="description"></Detail>
        <Detail project={card} detail="stack"></Detail>
      </div>
      <Footer />
    </div>
  );
}
export default ProjectModal;
