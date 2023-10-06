import React from 'react'

const Gallery = () => {
  return (
    <div className='h-[80vh] flex'>
        <div className='grid grid-cols-3 h-full w-full flex-[2]  bg-blue-200'>
            <div className='flex flex-col h-full w-full bg-green-300'>
                <span className=''></span>
            </div>
        </div>

        <div className='grid grid-cols-3 h-full w-full flex-1  bg-blue-400'>
            <div className='flex flex-col h-full w-full bg-green-400'>
                <span className=''></span>
            </div>
        </div>
    </div>
  )
}

export default Gallery