import Navbar from '@/components/Navbar';
import React from 'react';

const Page = () => {
  const imageList = Array.from({ length: 90 }, (_, index) => index + 1); // Generate numbers from 1 to 90

  return (
    <div>
      <Navbar />

      <div className='py-14 px-20 grid grid-cols-6 w-full gap-3 overflow-x-hidden'>
        {imageList.map((imageNumber) => (
          <span
            key={imageNumber}
            className='bg-neutral-900 w-full min-h-32 max-h-60 overflow-hidden flex items-center justify-center'
          >
            <img src={`/images/${imageNumber}.jpg`} alt={`Image ${imageNumber}`} className='max-h-60' />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Page;
