import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <div className='py-14 px-36 gap-5 flex flex-col'>
            <div>
                <h1 className='text-2xl font-medium'>Srishti Bhatiya</h1>
                <p className='text-sm opacity-75'>Most beautiful birthday girl</p>
            </div>

            <div className='flex items-center gap-4'>
                <div className='bg-red-500 lg:w-[27vw] h-[28vh]  rounded-xl flex gap-1 overflow-hidden'>
                    <span className='bg-blue-200 w-[50%] h-full'></span>

                    <div className='flex flex-col gap-1 w-[50%] h-full'>
                        <span className='bg-blue-200 h-[50%] w-full'></span>
                        <span className='bg-blue-200 h-[50%] w-full'></span>
                    </div>
                </div>

                <div className='bg-red-500 lg:w-[18vw] py-4 rounded-xl'>

                </div>
                
                <div className='bg-red-500 lg:w-[18vw] py-4 rounded-xl'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default page