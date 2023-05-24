import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider: React.FC = () => {
  const images = [
    'https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*',
    'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg',
    'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2021/11/23/forest-6765636_1280jpg-20211123025043.jpg',
  ];

  return (
    <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} className="w-full" style={{ height: '500px' }} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;



