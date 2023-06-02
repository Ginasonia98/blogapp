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
/**Return Komponen:

<Carousel showArrows={true} infiniteLoop={true} showThumbs={false}> ... </Carousel>: Menggunakan komponen Carousel dari pustaka 'react-responsive-carousel'. Properti showArrows diatur ke true untuk menampilkan tombol panah navigasi, infiniteLoop diatur ke true agar carousel dapat berputar secara tak terbatas, dan showThumbs diatur ke false untuk menyembunyikan thumbnail navigasi.
{images.map((image, index) => ( ... ))}: Menggunakan metode map untuk melakukan iterasi melalui array images dan menghasilkan elemen-elemen <div> dalam Carousel. Setiap elemen div ini berisi sebuah <img> yang menampilkan gambar dari URL yang sesuai dengan indeksnya dalam array images.
<img src={image} alt={Slide ${index}} className="w-full" style={{ height: '500px' }} />: Menampilkan gambar dalam elemen <img>. Properti src diatur dengan URL gambar yang diteruskan melalui iterasi map, properti alt digunakan untuk memberikan deskripsi alternatif gambar, dan properti className dan style digunakan untuk mengatur ukuran gambar menjadi lebar penuh (w-full) dan tinggi 500px. */
export default Slider;



