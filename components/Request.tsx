import React from 'react'
import Image from 'next/image';
import factoryImage from '../assets/donate .png';

const Request = () => {
  return (
    <div className="flex justify-between items-center mt-10" style={{ margin: '100px 150px', }}>
      
      <div className="flex-grow">
        <Image src={factoryImage} alt="Factory Image" width={450} height={450} objectFit="cover" />
      </div>

      <div className="text-left" style={{ flexBasis: '50%', color: '#261B6C' }}>
        <h2 className="text-4xl font-bold mb-4">Request A Donation</h2>
        <p className="text-2xl mb-4">If you are holding an event that you wish to have us donate to we're more than glad to help. Fill in the donation form for us to best understand how we can increase your event's impact in the local community.</p>
       < button style={{ margin: '10px 0 0 0' }} className="bg-[#a17c48] font-bold text-white border-none  cursor-pointer rounded text-[20px] py-[10px] px-[50px]">
          REQUEST DONATION
        </button>
      </div>
    </div>
  );
};

export default Request
