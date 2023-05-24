import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Slider/>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
