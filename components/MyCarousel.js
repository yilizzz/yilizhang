import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = ({ project }) => {
  const nextIcon = <div className='iconSpan'><span>{'→'}</span></div>;
  const prevIcon = <div className='iconSpan'><span>{'←'}</span></div>;

  return (
    <div>
      <Carousel 
        nextIcon={nextIcon} 
        prevIcon={prevIcon}
        className='custom-carousel'
      >
        {project.pictures.map((address, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center align-content-center w-100 my-4 by"> <img
              src={address}
              alt={`Slide ${index}`}
              style={{
                maxWidth: '100%',
                width: '600px',
                height: '450px',
                objectFit: 'contain'
              }}
            /></div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MyCarousel
