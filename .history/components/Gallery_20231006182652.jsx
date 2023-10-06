import React from 'react'

//34 33 25 79 50 89 36 13 38

const Gallery = () => {
  return (
    <div className=' flex flex-col'>
        <div className=' flex flex-col gap-2'>
            <span className='w-full h-[25vh] overflow-hidden'>
                <img src="images/34.jpg" alt="w-full" />
            </span>

            <span className='w-full h-[23.8vh] overflow-hidden'>
                <img src="images/33.jpg" alt="w-full" />
            </span>
        </div>

        <div className=' flex gap-2'>
            <span className='w-full h-[25vh] overflow-hidden'>
                <img src="images/79.jpg" alt="w-full" />
            </span>

            <span className='w-full h-[25vh] overflow-hidden'>
                <img src="images/50.jpg" alt="w-full" />
            </span>
        </div>

        <div className=' flex flex-col gap-2'>
            <span className='w-full h-[25vh] overflow-hidden'>
                <img src="images/36.jpg" alt="w-full" />
            </span>

            <span className='w-full h-[23.8vh] overflow-hidden'>
                <img src="images/33.jpg" alt="w-full" />
            </span>
        </div>
    </div>
  )
}

export default Gallery