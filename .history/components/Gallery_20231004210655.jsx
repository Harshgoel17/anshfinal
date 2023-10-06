import React from 'react'

const Gallery = () => {
  return (
    <div className='h-[80vh] flex'>
        <div className='grid grid-cols-3 gap-2 h-full w-full flex-[2]  bg-blue-200'>
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

        <div className='flex h-full w-full flex-1  bg-blue-400'>
            
        </div>
    </div>
  )
}

export default Gallery