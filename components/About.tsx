import React from 'react';
import Image from 'next/image';
import image1 from '../assets/sandwich1.png';
import image2 from '../assets/pie2.png';
import image3 from '../assets/tea3.png';
import image4 from '../assets/slices3.png';

const About = () => {
  return (
    <div className="mt-10" style={{ margin: '100px 150px' }}>
      <div className="flex justify-between items-center mb-10 gap-20" style={{ margin: '80px 0' }}>
        <h1 className="text-5xl font-bold " style={{ color: '#261B6C', marginTop: '-150px' }}>About Baker's Inn</h1>
        <div className="text-left" style={{ flexBasis: '60%', color: '#261B6C', marginLeft: '-50px' }}>
          <p className="text-3xl mb-4">It all started in the eighties when Baker's Inn was just a small confectionery company that employed 40 people and produced about 30,000 loaves a day. We now aim to provide a nourishing, convenient and accessible answer to hunger's call.</p>
          <button style={{ margin: '10px 0 0 0' }} className="bg-[#a17c48] font-bold text-white border-none  cursor-pointer rounded text-[23px] py-[10px] px-[50px]">
           READ MORE
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative h-[300px]">
          <Image src={image1} alt="Image 1" layout="fill" objectFit="cover" />
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative h-[300px]">
          <Image src={image2} alt="Image 2" layout="fill" objectFit="cover" />
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative h-[300px]">
          <Image src={image3} alt="Image 3" layout="fill" objectFit="cover" />
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative h-[300px]">
          <Image src={image4} alt="Image 4" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default About; 