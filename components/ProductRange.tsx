import React from 'react';
import Image from 'next/image';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';

const ProductRange = () => {
  return (
    <div className="mt-10 text-center" style={{ padding:'150px 150px 50px 150px ',margin: '0px' ,backgroundColor: 'whitesmoke'  }}>
      <h2 className="text-5xl font-bold mb-8" style={{ color: '#261B6C', margin:'0 0 80px 0' }}>Our Product Range</h2>
      <div className="grid grid-cols-4 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative h-[350px]">
          <Image src={product1} alt="Product 1" layout="fill" objectFit="cover" />
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative h-[350px]">
          <Image src={product2} alt="Product 2" layout="fill" objectFit="cover" />
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative h-[350px]">
          <Image src={product3} alt="Product 3" layout="fill" objectFit="cover" />
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative h-[350px]">
          <Image src={product4} alt="Product 4" layout="fill" objectFit="cover" />
        </div>
      </div>
      <button className="bg-[#a17c48] font-bold text-white border-none  cursor-pointer rounded text-[23px] py-[10px] px-[50px]">
        VIEW COMPLETE RANGE
      </button>
    </div>
  );
};

export default ProductRange; 