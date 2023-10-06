import React from 'react'

//34 33 25 79 50 89 36 13 38

const Gallery = () => {
  return (
    <div className='h-[100vh] max-h-[100vh] flex flex-col gap-2'>
        <div className=' flex flex-col gap-2'>
            <span className='w-full h-[25vh] overflow-hidden'>
                <img src="images/34.jpg" alt="w-full" />
            </span>

            <span className='w-full h-[25vh] overflow-hidden'>
                <img src="images/33.jpg" alt="w-full" />
            </span>
        </div>

        <div className=' flex gap-2'>
            <span className='w-full h-[25vh] overflow-hidden'>
                <img src="images/34.jpg" alt="w-full" />
            </span>

            <span className='w-full h-[25vh] overflow-hidden'>
                <img src="images/33.jpg" alt="w-full" />
            </span>
        </div>
    </div>
  )
}

export default Gallery