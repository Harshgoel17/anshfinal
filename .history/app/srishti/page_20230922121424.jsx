import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <div className='py-14 px-36 gap-2 flex flex-col'>
            <div>
                <h1 className='text-xl font-semibold'>Srishti Bhatiya</h1>
                <p className='text-sm opacity-75'>Most beautiful birthday girl</p>
            </div>

            <div className='flex items-center justify-center gap-10'>
                <div className='bg-red-500 w-[20vw]'>

                </div>

                <div>

                </div>
                
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default page