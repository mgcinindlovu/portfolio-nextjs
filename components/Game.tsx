import React from 'react';
import Image from 'next/image';
import backgroundImage from '../assets/african.png';
import rightImage from '../assets/mariofinal.png';

const Game = () => {
  return (
   

    <div className="relative h-[70vh] bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor: '#261B6C', margin: '150px 120px 0 120px' }}>
     <div className="absolute top-1/2 left-[1%] transform -translate-y-1/2">
      <Image src={rightImage} alt="Right Side Image" height={500} />
    </div>

    <div className="absolute right-[3%] top-1/2  transform -translate-y-1/2 text-white text-center">
      <h1 className="text-5xl font-bold leading-tight mb-5">Kid's <br/> Corner</h1>
      <p className="text-xl mb-5 max-w-md text-[18px]" >
      let your children join the fun. Explore a place with exciting games and the top winners stand a chance to win exciting monthly prices!
      </p>
      <button className="bg-[#ff0000] font-bold text-white border-none  cursor-pointer rounded text-[23px] py-[10px] px-[50px]">
       PLAY <br/> GAMES
      </button>
    </div>

   
  </div>
  
);
};

export default Game
