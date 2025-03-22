import React from 'react';
import Image from 'next/image';
import backgroundImage from '../assets/african.png';
import rightImage from '../assets/hero.png';
import About from './About';

const Hero = () => {
  console.log('Background Image Path:', backgroundImage);

  return (
    <div className="relative h-[80vh] bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor: '#261B6C', margin: '0 120px' }}>
      <div className="absolute left-[5%] top-1/2 left-5 transform -translate-y-1/2 text-white">
        <h1 className="text-4xl font-bold leading-tight mb-5">Bringing you the <br/>
        <span className="underline" style={{ textDecorationColor: '#a17c48' }}>best value</span> at the <br/>
        <span className="underline" style={{ textDecorationColor: '#a17c48' }}>best prices</span>.</h1>
        <p className="text-lg mb-5 max-w-md text-[20px]">
        The freshest sandwiches you can <br/> make with Baker&apos;s inn soft white <br/> loaf.
        </p>
        <button className="bg-[#a17c48] font-bold text-white border-none  cursor-pointer rounded text-[23px] py-[10px] px-[50px]">
          READ MORE
        </button>
      </div>
      <div className="absolute top-1/2 right-[5%] transform -translate-y-1/2">
        <Image src={rightImage} alt="Right Side Image" height={450} />
      </div>
    </div>
  );
};

export default Hero; 