import React from 'react'
import { Carousel } from 'react-bootstrap';

const MyCarousel = ({ project }) => {
  const nextIcon = <div className='iconSpan'>{'>'}</div>;
  const prevIcon = <div className='iconSpan'>{'<'}</div>;
    return (
      <div>
        <Carousel nextIcon={nextIcon} prevIcon={prevIcon}>
          {project.pictures.map((address, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={address}
                alt={`Slide ${index}`}
                max-width= '100%'
                height= 'auto'
                object-fit='cover'
                unoptimized="true"

              />
            </Carousel.Item>
          ))}
        </Carousel>
       
        </div>
      );
}

export default MyCarousel
