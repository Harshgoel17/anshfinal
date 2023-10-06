import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />

        <div className='py-14 px-20 grid grid-cols-5 w-full gap-2'>
            <span className='bg-neutral-900 w-full min-h-32 max-h-52 overflow-hidden flex items-center justify-center'>
                <img src="/images/1.jpg" alt="" className='max-h-52'/>
            </span>

            <span className='bg-red-300 w-full min-h-32 max-h-52 overflow-hidden flex items-center justify-center'>
                <img src="/images/2.jpg" alt="" className='max-h-52'/>
            </span>
            
        </div>
    </div>
  )
}

export default page