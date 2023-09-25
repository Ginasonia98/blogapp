import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider: React.FC = () => {
  const images = [
    'https://www.beautyofindonesia.com/uploads/foto_wisata/PANTAI-CORO-KABUPATEN-TULUNGAGUNG.jpg',
    'https://www.beautyofindonesia.com/uploads/foto_wisata/AIR-TERJUN-TUJUH-KENANGAN-KOTA-PAGAR-ALAM.jpg',
    'https://www.beautyofindonesia.com/uploads/foto_wisata/DANAU-LINDU-KABUPATEN-SIGI.jpg',
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



