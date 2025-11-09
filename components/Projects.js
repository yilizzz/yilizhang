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
            onSlideChange={(swiper) => {
              console.log('Active index:', swiper.activeIndex);
              console.log('Slides count:', swiper.slides.length);
            }}
            onInit={(swiper) => {
              console.log('Swiper initialized with', swiper.slides.length, 'slides');
            }}
            key={swiperKey}
            slidesPerView={'auto'}
            loop={enableLoop}
            allowTouchMove={true}
            preventInteractionOnTransition={false}
            watchSlidesProgress={true}
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
            navigation={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: true,
            }}
            modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
            className="!overflow-visible w-full"
            effect={'coverflow'}
            grabCursor={false}
            centeredSlides={true}
            speed={600}
            observer={true}
            observeParents={true}
            watchOverflow={true}
            watchSlidesVisibility={true}
            updateOnWindowResize={true}
            touchStartPreventDefault={false}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 30,
              modifier: 1,
              slideShadows: false,
              scale: 0.95,
            }}
          >
            {filteredProjects.map((value, index) => (
              <SwiperSlide key={index} className="w-auto mr-5 mb-5">
                <Card title={value.title} image={value.image} type={value.type} />
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
    'Puroak : Page de recherche de produits multi-conditions',
    "Groupe AGP : Site Web de l'entreprise",
    'Economus : Site Web de réduction locaux',
    "Namkin : Site Web de l'entreprise",
    // English types
    'Puroak: Multi-condition product search page',
    'AGP Group: Company Website',
    'Economus: Local discount website',
    'Namkin : Company Website',
  ];

  // Check if the current type should show the "new" label
  const showNewLabel = newTypes.includes(type);

  return (
    <div
      className="card py-3 px-3 mx-sm-4 my-4 !w-[23rem]"
      onClick={handleShow}
      style={{
        cursor: 'pointer',
        position: 'relative',
        zIndex: 1,
        transition: 'transform 0.2s ease',
      }}
      role="button"
    >
      {/* "new" 标签直接放在卡片层级 */}
      {showNewLabel && (
        <span
          style={{
            color: '#a6522c',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            position: 'absolute',
            top: '12px',
            left: '12px',
            padding: '2px 6px',
            borderRadius: '8px',
            border: '2px solid #a6522c',
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 2px 4px rgba(166, 82, 44, 0.3)',
            animation: 'bounce-animation 2s infinite',
            zIndex: 10,
          }}
        >
          new
        </span>
      )}

      <div className="d-flex flex-column justify-content-center">
        <Image
          className="img-fluid my-3 card-image"
          width="400"
          height="250"
          object-fit="cover"
          src={image}
          alt={title}
        />

        <div
          className="fw-bold"
          style={{
            maxWidth: '400px', // 限制最大宽度
            overflow: 'hidden', // 隐藏溢出
            textOverflow: 'ellipsis', // 显示省略号
            whiteSpace: 'nowrap', // 不换行
          }}
        >
          {type}
        </div>
      </div>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onClick={(e) => e.stopPropagation()} // 阻止Modal内的点击事件冒泡
      >
        <div onClick={(e) => e.stopPropagation()}>
          <ProjectModal title={title}></ProjectModal>
        </div>
      </Modal>
    </div>
  );
};
