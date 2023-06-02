import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './Contact';
import Slider from './Slider';

interface LayoutProps {
  children: ReactNode;
}
/**Mendefinisikan interface LayoutProps untuk menggambarkan properti yang diterima oleh komponen Layout. Properti ini harus memiliki tipe ReactNode. */

const Layout: React.FC<LayoutProps> = ({ children }) => {
  /**Mendefinisikan fungsi komponen Layout sebagai fungsi komponen yang menerima properti dengan tipe LayoutProps. Properti tersebut dinamai children dan digunakan untuk menampung elemen-elemen yang diberikan sebagai isi komponen Layout. */
  return (
    <div>
      <Header />
      <Slider />
      <main className="container mx-auto px-4 py-8">{children}</main>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Layout;
