import React from 'react';
import Image from 'next/image';
import factoryImage from '../assets/factory bread.png';

const Factory = () => {
  return (
    <div className="flex justify-between items-center mt-10" style={{ margin: '100px 150px', }}>
      <div className="text-left" style={{ flexBasis: '50%', color: '#261B6C' }}>
        <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Dumb' }}>Book a Factory Tour</h2>
        <p className="text-2xl mb-4">Keep on seeing how Baker's Inn products are made? Are you intrested in a feild trip day for your school's className? Get in touch with us to book a tour of our factory that is closest to you. Fill in the booking form and will get back to you.</p>
       < button style={{ margin: '10px 0 0 0' }} className="bg-[#a17c48] font-bold text-white border-none  cursor-pointer rounded text-[23px] py-[10px] px-[50px]">
          BOOK FACTORY TOUR
        </button>
      </div>
      <div className="flex-grow">
        <Image src={factoryImage} alt="Factory Image" width={600} height={400} objectFit="cover" />
      </div>
    </div>
  );
};

export default Factory; 