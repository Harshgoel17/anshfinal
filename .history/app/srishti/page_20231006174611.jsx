import Gallery from '@/components/Gallery'
import HappyBirthday from '@/components/HappyBirthday'
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
                <div className='bg-neutral-900 lg:w-[27vw] h-[28vh]  rounded-xl flex gap-1 overflow-hidden'>
                    <span className=' w-[50%] h-full relative overflow-hidden'>
                        <img src="images/84.jpg" alt="" className='absolute' />
                    </span>

                    <div className='flex flex-col gap-1 w-[50%] h-full overflow-hidden'>
                        <span className=' h-[50%] w-full relative overflow-hidden'>
                            <img src="images/71.jpg" alt="" className='absolute' />
                        </span>
                        <span className=' h-[50%] w-full relative overflow-hidden'>
                            <img src="images/33.jpg" alt="" className='absolute' />
                        </span>
                    </div>
                </div>

                <div className='bg-neutral-900 lg:w-[15vw] h-[28vh]  rounded-xl flex gap-1 overflow-hidden items-center justify-center text-center px-5 text-3xl relative'>
                    <p className='absolute text-lg top-5 left-5 font-medium'>Age</p>
                    <p>
                    21 Years
                    </p>
                </div>
                
                <div className='bg-neutral-900 lg:w-[25vw] h-[28vh]  rounded-xl flex gap-1 overflow-hidden items-center justify-center text-center px-5  relative'>
                        <p className='text-xl '><span className='italic text-2xl'>"You're the most beautiful thing that ever happened to me."</span>  <br /><span className='translate-y-5'>
                        Ansh</span></p>
                </div>
            </div>

            <div className='text-lol py-2 flex flex-col gap-4'>
                <p>
                My cherished bestie is the anchor of my life, a steadfast rock upon which I can always rely. Her unwavering support and unfaltering reliability have created an unbreakable bond of trust and friendship that I hold dear. Whether in moments of joy or times of trouble, she stands by my side, offering her unwavering assistance and a reassuring presence.

                
                </p>

                <p>
                my bestie is someone I can rely on in times of need. She goes out of her way to offer assistance and support, making her a dependable and trusted friend and we both share enjoyable culinary adventures together. Her love, kindness, and optimism create a special bond between us , making her an indispensable part of my life and her positive attitude spreads good vibe whenever we are together


                </p>

                <p>
                she's always willing to lend a hand or a listening ear when you need it most. Her passion for food isn't just about eating; it's a genuine enthusiasm for exploring new tastes and culinary adventures together. 



                </p>

                <p>
                What sets her apart is her loving heart, which she wears on her sleeve. She cares deeply for those around her, and her affectionate gestures and words make you feel truly cherished. Her positive attitude is like a ray of sunshine, brightening up even the darkest days. Spending time with her is not just enjoyable; it's a source of inspiration and joy. 
When I share my secrets with her, I know they are safe, guarded by a bond of trust that you've built over time. She's not just a friend; she's your confidante, your partner in laughter and tears, and the person who brings out the best in you. She's an invaluable treasure in your life, and you're grateful for every moment spent together.
                </p>
            </div>

            <HappyBirthday />

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