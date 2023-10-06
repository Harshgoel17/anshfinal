import Navbar from '@/components/Navbar';
import React from 'react';

const Page = () => {
  const imageList = [1, 2, 3, 4, 5, 6, 7]; // List of image numbers

  return (
    <div>
      <Navbar />

      <div className='py-14 px-20 grid grid-cols-6 w-full gap-2'>
        {imageList.map((imageNumber) => (
          <span
            key={imageNumber}
            className='bg-neutral-900 w-full min-h-32 max-h-60 overflow-hidden flex items-center justify-center'
          >
            <img src={`/images/${imageNumber}.jpg`} alt={`Image ${imageNumber}`} className='max-h-52' />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Page;
