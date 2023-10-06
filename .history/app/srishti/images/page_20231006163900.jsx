import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />

        <div className='py-14 px-20 grid grid-cols-5 w-full gap-2'>
            <span className='bg-red-300 w-full min-h-32 max-h-64'>
                <img src="/images/1.jpg" alt="" className=''/>
            </span>
            <span className='bg-red-300 w-full min-h-32 h-48'></span>
            <span className='bg-red-300 w-full min-h-32 h-48'></span>
            <span className='bg-red-300 w-full min-h-32 h-48'></span>
            <span className='bg-red-300 w-full min-h-32 h-48'></span>
            <span className='bg-red-300 w-full min-h-32 h-48'></span>
            <span className='bg-red-300 w-full min-h-32 h-48'></span>
            <span className='bg-red-300 w-full min-h-32 h-48'></span>
            <span className='bg-red-300 w-full min-h-32 h-48'></span>
            <span className='bg-red-300 w-full min-h-32 h-48'></span>
            <span className='bg-red-300 w-full min-h-32 h-48'></span>
            <span className='bg-red-300 w-full min-h-32 h-48'></span>
        </div>
    </div>
  )
}

export default page