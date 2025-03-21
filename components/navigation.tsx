import React from 'react';
import Image from 'next/image';
import logo from '../assets/bakersinnlogo.png';

const Navigation = () => {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', padding: '20px 40px', backgroundColor: '#f8f9fa' }}>
      <div style={{ marginRight: 'auto' }}>
        <Image src={logo} alt="Logo" height={80} />
      </div>
      <ul style={{ listStyleType: 'none', display: 'flex', alignItems: 'center', gap: '40px', margin: 0, color: '#9588B8', fontSize: '28px', fontWeight: 'bold' }}>
        <li><a href="#about-us" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</a></li>
        <li><a href="#products" style={{ textDecoration: 'none', color: 'inherit' }}>Products</a></li>
        <li><a href="#recipe" style={{ textDecoration: 'none', color: 'inherit' }}>Recipe</a></li>
        <li><a href="#kids-corner" style={{ textDecoration: 'none', color: 'inherit' }}>Kids Corner</a></li>
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <button style={{ backgroundColor: '#965b07', color: 'white', border: 'none', padding: '10px 40px', cursor: 'pointer', borderRadius: '5px' }}>
            <a href="#contact-us" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation; 