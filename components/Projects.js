import React from "react";
import { useState } from "react";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ProjectModal from "./ProjectModal";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination,Navigation, Autoplay,EffectCoverflow } from "swiper/modules";
export const Projects = ({ title, cards }) => {
  const { language } = useContext(LanguageContext);
  const allCategory = language === "en" ? "All" : "Tous";
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const categories = [
    allCategory,
    ...new Set(cards.map((project) => project.category)),
  ];

  let filteredProjects = [];
  if (selectedCategory === "Tous" || selectedCategory === "All") {
    filteredProjects = cards;
  } else {
    filteredProjects = cards.filter(
      (project) => project.category === selectedCategory
    );
  }
  // const filteredProjects = selectedCategory === allCategory
  //   ? cards
  //   : cards.filter(project => project.category === selectedCategory);
  return (
    <div id="projects" className="bg-primary py-5 px-5">
      <div className="container">
        <h1 className="text-light fw-bold">{title}</h1>
        <div className={"d-flex flex-row flex-wrap justify-content-center"}>
          {categories.map((category) => (
            <Button
              variant="primary"
              key={category}
              className={`custom-button ${selectedCategory === category ? 'custom-button-selected' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div>
          {/* {filteredProjects.map((value, index) => (
            <Card key={index} title={value.title} image={value.image} type={value.type}/>
          ))} */}
          <Swiper
            slidesPerView={"auto"}
            loop={true}
            pagination={{
              type: 'fraction',
              clickable: true,
              renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                       '<span class="swiper-pagination-separator">/</span>' +
                       '<span class="' + totalClass + '"></span>';
              }
            }}
            navigation={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation,Autoplay,EffectCoverflow]}
            className="!overflow-visible w-full"
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}


          >
            {filteredProjects.map((value, index) => (
              <SwiperSlide key={index} className="w-auto mr-5 mb-5">
                <Card
                  title={value.title}
                  image={value.image}
                  type={value.type}
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
      className="card py-3 px-3 mx-sm-4 my-4 !w-[23rem]"
    >
      <Image
        className="img-fluid my-3 card-image"
        role="button"
        width="400"
        height="250"
        object-fit="cover"
        src={image}
        alt={title}
        onClick={handleShow}
      />
      <div className="d-flex flex-row justify-content-between">
        <div className="fw-bold">{type}</div>
        <div className="text-center">
          <Button variant="primary" onClick={handleShow} size="sm">
            🗂️Details
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
