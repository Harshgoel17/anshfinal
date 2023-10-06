import Navbar from '@/components/Navbar';
import React from 'react';

const Page = () => {
  const videoList = Array.from({ length: 4 }, (_, index) => index + 1); // Generate numbers from 1 to 4 for videos

  return (
    <div>
      <Navbar />

      <div className='py-14 px-20 grid grid-cols-6 w-full gap-3'>
        {videoList.map((videoNumber) => (
          <span
            key={`v${videoNumber}`}
            className='bg-neutral-900 w-full min-h-32 max-h-60 overflow-hidden flex items-center justify-center'
          >
            <video controls width="100%" height="100%" className='max-h-60'>
              <source src={`/videos/v${videoNumber}.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Page;
