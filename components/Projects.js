import React, { useMemo } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ProjectModal from './ProjectModal';
import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

export const Projects = ({ title, cards }) => {
  const { language } = useContext(LanguageContext);
  const allCategory = language === 'en' ? 'All' : 'Tous';
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const categories = [allCategory, ...new Set(cards.map((project) => project.category))];

  let filteredProjects = useMemo(() => {
    let projects =
      selectedCategory === 'Tous' || selectedCategory === 'All'
        ? [...cards]
        : cards.filter((project) => project.category === selectedCategory);
    return projects.sort((a, b) => {
      return b.time.localeCompare(a.time);
    });
  }, [cards, selectedCategory]);

  const navButtonStyle = {
    width: '50px',
    height: '50px',
    zIndex: 10,
    cursor: 'pointer',
    background: '#2f465b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
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

        <div className="position-relative px-md-5 px-3">
          <div
            className="swiper-prev-custom position-absolute top-50 start-0 translate-middle-y ms-2 rounded-circle"
            style={navButtonStyle}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" className="text-secondary" />
          </div>

          <div
            className="swiper-next-custom position-absolute top-50 end-0 translate-middle-y me-2 rounded-circle"
            style={navButtonStyle}
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" className="text-secondary" />
          </div>

          <Swiper
            key={`${selectedCategory}-${filteredProjects.length}`}
            navigation={{
              prevEl: '.swiper-prev-custom',
              nextEl: '.swiper-next-custom',
            }}
            slidesPerView={'auto'}
            spaceBetween={16}
            loop={false}
            watchSlidesProgress={true}
            centeredSlides={true}
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
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 30,
              modifier: 1.5,
              slideShadows: false,
              scale: 0.95,
            }}
            className="!overflow-visible w-full"
            grabCursor={false}
            watchOverflow={false}
            touchStartPreventDefault={false}
          >
            {filteredProjects.map((value, index) => (
              <SwiperSlide key={index} className="mb-5" style={{ width: '350px', height: '280px' }}>
                <Card title={value.title} image={value.image} type={value.type} time={value.time} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export const Card = ({ image, title, type, className, time }) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const style = {
    top: '0',
    right: '-1px',
    fontSize: '0.75rem',
    transform: 'rotate(-15deg)',
    zIndex: 2,
    background: '#2f465b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
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

        <div className="card-body d-flex flex-column justify-content-center flex-grow-1 p-3 position-relative">
          <div className="fw-bold text-truncate" style={{ maxWidth: '100%' }}>
            {type}
          </div>
          <div className="position-absolute px-2 py-1 text-white small rounded" style={style}>
            {time.split('-')[0]}
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
