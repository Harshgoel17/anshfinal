import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />

        <div className='py-14 px-20 grid grid-cols-6 w-full'>
            <span className='bg-red-300 w-full h-20'></span>
        </div>
    </div>
  )
}

export default page