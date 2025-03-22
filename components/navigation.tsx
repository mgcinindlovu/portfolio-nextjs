import React from 'react';
import Image from 'next/image';
import logo from '../assets/bakersinnlogo.png';

const Navigation = () => {
  return (
    <nav className="flex items-center p-5 bg-gray-100">
      <div className="mr-auto">
        <Image src={logo} alt="Logo" height={50} />
      </div>
      <ul className="flex items-center gap-5 m-0 text-purple-500 text-xl font-bold">
        <li><a href="#about-us" className="hover:text-purple-700">About Us</a></li>
        <li><a href="#products" className="hover:text-purple-700">Products</a></li>
        <li><a href="#recipe" className="hover:text-purple-700">Recipe</a></li>
        <li><a href="#kids-corner" className="hover:text-purple-700">Kids Corner</a></li>
        <li>
          <button className="bg-yellow-800 text-white px-5 py-2 rounded-lg hover:bg-yellow-900">
            <a href="#contact-us" className="text-white no-underline">Contact Us</a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
