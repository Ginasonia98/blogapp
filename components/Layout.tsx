import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './Contact';
import Slider from './Slider';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  
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
