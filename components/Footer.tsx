import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiBell } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-4 bottom-0 left-0 w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left">
            <p className="text-white">Natural Destinations Blog</p>
          </div>
          <div className="text-center sm:text-left mt-4 sm:mt-0">
            <p className="text-white">Follow Us</p>
            <div className="flex justify-center sm:justify-start mt-2">
              <a
                href="https://www.instagram.com/chikogina_/?igshid=YmMyMTA2M2Y="
                className="text-white mx-2"
              >
                <FaInstagram size={32} />
              </a>
              <a href="https://www.linkedin.com/in/ginatobing/" className="text-white mx-2">
                <FaLinkedin size={32}  />
              </a>
              <a href="https://github.com/Ginasonia98?tab=repositories" className="text-white mx-2">
                <FaGithub size={32}  />
              </a>
            </div>
          </div>
          <div className="text-center lg:text-center sm:text-right mt-4 sm:mt-0">
            <p className="text-white text-start">Subscribe:</p>
            <div className="relative mt-2">
              <input
                type="text"
                className="bg-white text-gray font-bold py-2 px-4 pl-10 rounded mr-2 focus:outline-none focus:ring-0"
                placeholder="Input Your Email"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <FiBell className="text-gray-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
