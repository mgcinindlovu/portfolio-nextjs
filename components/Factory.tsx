import React from 'react';
import Image from 'next/image';
import factoryImage from '../assets/factory bread.png';

const Factory = () => {
  return (
    <div className="flex justify-between items-center mt-10" style={{ margin: '100px 150px', }}>
      <div className="text-left" style={{ flexBasis: '50%', color: '#261B6C' }}>
        <h2 className="text-4xl font-bold mb-4" >Book a Factory Tour</h2>
        <p className="text-2xl mb-4">Keep on seeing how Baker&apos;s Inn products are made? Are you interested in a field trip day for your school&apos;s class? Get in touch with us to book a tour of our factory that is closest to you. Fill in the booking form and we&apos;ll get back to you.</p>
       < button style={{ margin: '10px 0 0 0' }} className="bg-[#a17c48] font-bold text-white border-none  cursor-pointer rounded text-[20px] py-[10px] px-[50px]">
          BOOK FACTORY TOUR
        </button>
      </div>
      <div className="flex-grow">
        <Image src={factoryImage} alt="Factory Image" width={450} height={450} objectFit="cover" />
      </div>
    </div>
  );
};

export default Factory; 