import React from 'react'

const Gallery = () => {
  return (
    <div className='h-[80vh] flex gap-2'>
        <div className='grid grid-cols-3 gap-2 h-full w-full flex-[2]  '>
            <div className='flex flex-col h-full w-full  gap-2'>
                <span className='bg-red-300 w-full h-full'></span>
                <span className='bg-red-300 w-full h-full'></span>
                <span className='bg-red-300 w-full h-full'></span>
            </div>

            <div className='flex flex-col h-full w-full  gap-2'>
                <span className='bg-red-300 w-full h-full flex-[1.8]'></span>
                <span className='bg-red-300 w-full h-full flex-1'></span>
                
            </div>

            <div className='flex flex-col h-full w-full  gap-2'>
                <span className='bg-red-300 w-full h-full flex-1'></span>
                
                <span className='bg-red-300 w-full h-full flex-[1.8]'></span>
            </div>
        </div>

        <div className='flex h-full flex-col w-full flex-1 gap-2  bg-blue-400'>
            <span className='bg-red-300 w-full h-full flex-1'></span>
        </div>
    </div>
  )
}

export default Gallery