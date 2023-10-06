import React from 'react'

const Gallery = () => {
  return (
    <div className='h-[100vh] max-h-[100vh] flex flex-col gap-2'>
        <div className='grid grid-cols-2 gap-2 h-full  w-full flex-[2]  '>
            <div className='flex flex-col h-full w-full  gap-2'>
                <span className=' w-full h-full relative overflow-hidden'>
                    <img src="/images/34.jpg" alt="" className='absolute scale-[2]'/>
                </span>
                <span className=' w-full h-full relative overflow-hidden'>
                    <img src="/images/33.jpg" alt="" className='absolute scale-[2]'/>
                </span>
                <span className=' w-full h-full relative overflow-hidden'>
                    <img src="/images/25.jpg" alt="" className='absolute scale-[2]'/>
                </span>
            </div>

            <div className='flex flex-col h-full w-full  gap-2'>
                <span className=' w-full h-full flex-1 relative overflow-hidden'>
                    <img src="/images/79.jpg" alt="" className='absolute '/>
                </span>
                
                <span className=' w-full h-full flex-[1.8] relative overflow-hidden'>
                    <img src="/images/50.jpg" alt="" className='absolute '/>
                </span>
            </div>

            <div className='flex h-full w-full  gap-2'>
                <span className=' w-full h-full flex-[1.8] relative overflow-hidden'>
                    <img src="/images/89.jpg" alt="" className='absolute '/>
                </span>
                <span className=' w-full h-full flex-1 relative overflow-hidden'>
                    <img src="/images/36.jpg" alt="" className='absolute '/>
                </span>
                
            </div>

            
        </div>

        <div className='flex bg-red-100 h-full flex-col w-full flex-1 gap-2  '>
            <span className=' w-full h-full flex-1 relative overflow-hidden'>
                    <img src="/images/13.jpg" alt="" className='absolute scale-[1.13]'/>
                </span>
                
                <span className=' w-full h-full flex-[1.8] relative overflow-hidden'>
                    <img src="/images/38.jpg" alt="" className='absolute translate-y-[-230px]'/>
                </span>
        </div>
    </div>
  )
}

export default Gallery