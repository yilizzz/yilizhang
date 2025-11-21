import React, { useMemo } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ProjectModal from './ProjectModal';
import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

export const Projects = ({ title, cards }) => {
  const { language } = useContext(LanguageContext);
  const allCategory = language === 'en' ? 'All' : 'Tous';
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const categories = [allCategory, ...new Set(cards.map((project) => project.category))];

  const swiperKey = selectedCategory;

  let filteredProjects = useMemo(() => {
    if (selectedCategory === 'Tous' || selectedCategory === 'All') {
      return cards;
    } else {
      return cards.filter((project) => project.category === selectedCategory);
    }
  }, [cards, selectedCategory]);
  const enableLoop = filteredProjects.length >= 3;
  return (
    <div id="projects" className="bg-primary py-5 px-5">
      <div className="container">
        <h1 className="text-light fw-bold">{title}</h1>
        <div className={'d-flex flex-row flex-wrap justify-content-center'}>
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
            slidesPerView={'auto'}
            loop={enableLoop}
            navigation={true}
            pagination={{
              type: 'fraction',
              clickable: true,
              renderFraction: function (currentClass, totalClass) {
                return (
                  '<span class="' +
                  currentClass +
                  '"></span>' +
                  '<span class="swiper-pagination-separator">/</span>' +
                  '<span class="' +
                  totalClass +
                  '"></span>'
                );
              },
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: true,
            }}
            modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
            effect={'coverflow'}
            centeredSlides={true}
            speed={600}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 30,
              modifier: 1,
              slideShadows: false,
              scale: 0.95,
            }}
            className="!overflow-visible w-full"
            grabCursor={false}
            watchOverflow={true}
            touchStartPreventDefault={false}
          >
            {filteredProjects.map((value, index) => (
              <SwiperSlide
                key={index}
                className="mb-5 mx-2"
                style={{ width: '350px', height: '280px' }}
              >
                <Card title={value.title} image={value.image} type={value.type} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export const Card = ({ image, title, type, className }) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className={`card h-100 border-0 shadow-sm ${className || ''}`}
        onClick={handleShow}
        style={{
          cursor: 'pointer',
          overflow: 'hidden',
          transition: 'transform 0.2s ease',
        }}
        role="button"
      >
        <div className="position-relative w-100" style={{ height: '250px' }}>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        <div className="card-body d-flex flex-column justify-content-center flex-grow-1 p-3">
          <div className="fw-bold text-truncate" style={{ maxWidth: '100%' }}>
            {type}
          </div>
        </div>
      </div>
      <Modal size="lg" show={show} onHide={handleClose} centered>
        <div onClick={(e) => e.stopPropagation()}>
          <ProjectModal title={title}></ProjectModal>
        </div>
      </Modal>
    </>
  );
};
