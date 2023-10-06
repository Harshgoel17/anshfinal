import React from 'react';

const Gallery = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <div className='flex flex-col gap-2'>
          <span className='relative overflow-hidden'>
            <img src="/images/34.jpg" alt="" className='absolute w-full h-full object-cover' />
          </span>
          <span className='relative overflow-hidden'>
            <img src="/images/33.jpg" alt="" className='absolute w-full h-full object-cover' />
          </span>
          <span className='relative overflow-hidden'>
            <img src="/images/25.jpg" alt="" className='absolute w-full h-full object-cover' />
          </span>
        </div>

        <div className='flex flex-col gap-2'>
          <span className='relative overflow-hidden'>
            <img src="/images/79.jpg" alt="" className='absolute w-full h-full object-cover' />
          </span>
          <span className='relative overflow-hidden'>
            <img src="/images/50.jpg" alt="" className='absolute w-full h-full object-cover' />
          </span>
        </div>

        <div className='flex flex-col gap-2'>
          <span className='relative overflow-hidden'>
            <img src="/images/89.jpg" alt="" className='absolute w-full h-full object-cover' />
          </span>
          <span className='relative overflow-hidden'>
            <img src="/images/36.jpg" alt="" className='absolute w-full h-full object-cover' />
          </span>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <span className='relative overflow-hidden'>
          <img src="/images/13.jpg" alt="" className='absolute w-full h-full object-cover' />
        </span>
        <span className='relative overflow-hidden'>
          <img src="/images/38.jpg" alt="" className='absolute w-full h-full object-cover' />
        </span>
      </div>
    </div>
  );
};

export default Gallery;
