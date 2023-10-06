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

                <div className='bg-red-500 lg:w-[15vw] h-[28vh]  rounded-xl flex gap-1 overflow-hidden'>
                        
                </div>
                
                <div className='bg-red-500 lg:w-[25vw] h-[28vh]  rounded-xl flex gap-1 overflow-hidden'>
                        
                </div>
            </div>

            <div className='text-lol pr-48'>
                <p>
                Elon Reeve Musk (/ˈiːlɒn/ EE-lon; born June 28, 1971) is a business magnate and investor. Musk is the founder, chairman, CEO and chief technology officer of SpaceX; angel investor, CEO, product architect and former chairman of Tesla, Inc.; owner, chairman and CTO of X Corp.; founder of the Boring Company; co-founder of Neuralink and OpenAI; and president of the Musk Foundation. He is the wealthiest person in the world, with an estimated net worth of US$232 billion as of September 2023, according to the Bloomberg Billionaires Index, and $253 billion according to Forbes, primarily from his ownership stakes in both Tesla and SpaceX.[4][5]
                </p>
            </div>
        </div>
    </div>
  )
}

export default page