import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />

        <div className='py-14 px-20 grid grid-cols-5 w-full gap-2'>
            <img src="/images/1.jpg" alt="" className='max-h-64'/>
        </div>
    </div>
  )
}

export default page