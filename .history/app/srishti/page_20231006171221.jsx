import Gallery from '@/components/Gallery'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {

    

  return (
    <div className='overflow-x-hidden'>
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

            <div className='text-lol py-2 flex flex-col gap-4'>
                <p>
                My cherished bestie is the anchor of my life, a steadfast rock upon which I can always rely. Her unwavering support and unfaltering reliability have created an unbreakable bond of trust and friendship that I hold dear. Whether in moments of joy or times of trouble, she stands by my side, offering her unwavering assistance and a reassuring presence.

                
                </p>

                <p>
                Our shared passion for culinary exploration is a delightful and unforgettable aspect of our friendship. Together, we embark on exciting gastronomic adventures, savoring the diverse and delectable flavors the world has to offer. From cozy brunches to extravagant dinners, every meal becomes an opportunity to revel in each other's company and create cherished memories.


                </p>

                <p>
                What truly distinguishes her is the love and kindness she radiates, wearing her heart on her sleeve for all to see. Her genuine care for those around her extends beyond words to thoughtful actions that make everyone feel truly cherished and valued. Her infectious optimism and cheerful demeanor bring a ray of sunshine to even the gloomiest days, leaving a trail of smiles and laughter in her wake.


                </p>

                <p>
                In the sanctuary of our friendship, I've found a confidante in whom I can safely entrust my deepest secrets and fondest dreams. Our shared laughter and shared tears have fortified the unbreakable bond we've forged over the years. She has a remarkable ability to bring out the best in me, elevating every moment we spend together. My bestie is an invaluable treasure in my life, a source of unwavering support, endless joy, and heartfelt connection. Each day spent with her is a gift, a reminder of the profound and enduring beauty of true friendship. Together, we navigate the winding paths of life, knowing that we are stronger, happier, and more fulfilled because of the remarkable bond we share.
                </p>
            </div>

            <Gallery />

            
            <a href="/srishti/images">
                <Button >Show More</Button>
            </a>
                
           

            <div className='mt-12 mb-[-20px] text-center'>
                made with ♥ by ansh
            </div>
        </div>
    </div>
  )
}

export default page