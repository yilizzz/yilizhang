import React from "react";
import Image from 'next/image';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ProjectModal from "./ProjectModal";

export const Projects = ({ title, cards }) => {
  return (
    <div id='projects' className="bg-primary py-5 px-5">
      <div className="container">
        <h1 className="text-light fw-bold">{title}</h1>
        <div className={'d-flex flex-row flex-wrap justify-content-center'}>
          {cards.map((value, index) => (
            <Card key={index} title={value.title} image={value.image} type={value.type}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Card = ({ image, title, type }) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="card py-3 px-3 mx-sm-4 my-4 card-work"
      style={{ width: "23rem" }}
    >
      <Image
        className="img-fluid my-3 card-image"
        width="400"
        height="250"
        object-fit='cover'
        src={image}
        alt={title}
      />
      <div className="d-flex flex-row justify-content-between">
        <div className="fw-bold">Projet {type}</div>
        <div className="text-center">
            <Button variant="primary" onClick={handleShow} size="sm">
            Plus Details
            </Button>
            <Modal 
            size="lg"
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
              <ProjectModal title={title}></ProjectModal>
            </Modal>
            </div>
        </div>
      </div>
  );
};
