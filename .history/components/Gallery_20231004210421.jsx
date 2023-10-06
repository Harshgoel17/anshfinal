import React from 'react'

const Gallery = () => {
  return (
    <div className='h-[80vh] flex'>
        <div className='grid grid-cols-3 h-full w-full flex-[1.8]  bg-blue-200'>
            <div className='flex flex-col h-full w-full bg-green-300'>
                <span className=''></span>
            </div>

            <div className='flex flex-col h-full w-full bg-green-300'>
                <span className=''></span>
            </div>

            <div className='flex flex-col h-full w-full bg-green-300'>
                <span className=''></span>
            </div>
        </div>

        <div className='flex h-full w-full flex-1  bg-blue-400'>
            
        </div>
    </div>
  )
}

export default Gallery