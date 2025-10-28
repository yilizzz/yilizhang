import React, {useMemo} from "react";
import { useState } from "react";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ProjectModal from "./ProjectModal";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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

    const swiperKey = selectedCategory;

    let filteredProjects = useMemo(() => {
        if (selectedCategory === "Tous" || selectedCategory === "All") {
            return cards;
        } else {
            return cards.filter(
                (project) => project.category === selectedCategory
            );
        }
    }, [cards, selectedCategory]);
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
          <Swiper
              key={swiperKey}
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
              disableOnInteraction: true,
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

  // Define which types should show the "new" label
  const newTypes = [
    // French types
    "Puroak : Page de recherche de produits multi-conditions",
    "Groupe AGP : Site Web de l'entreprise",
    "Economus : Site Web de réduction locaux",
    "Namkin : Site Web de l'entreprise",
    // English types
    "Puroak: Multi-condition product search page",
    "AGP Group: Company Website",
    "Economus: Local discount website",
    "Namkin : Company Website"
  ];

  // Check if the current type should show the "new" label
  const showNewLabel = newTypes.includes(type);

  return (
    <div
      className="card py-3 px-3 mx-sm-4 my-4 !w-[23rem]"
    >
      <div className="d-flex flex-column justify-content-center">
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
        <div className="fw-bold position-relative">
          {showNewLabel && (
            <span 
              style={{ 
                color: '#a6522c', 
                fontSize: '0.85rem', 
                fontWeight: 'bold', 
                position: 'absolute', 
                top: '-18px', 
                left: '0px',
                padding: '1px 4px',
                borderRadius: '8px',
                border: '2px solid #a6522c',
                background: 'rgba(255, 255, 255, 0.8)',
                boxShadow: '0 1px 3px rgba(166, 82, 44, 0.3)',
                animation: 'bounce-animation 2s infinite'
              }}
            >
              new
            </span>
          )}
          {type}
        </div>
      </div>
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
  );
};
