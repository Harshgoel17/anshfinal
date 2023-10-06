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
                My bestie is someone I can rely on in times of need. She goes out of her way to offer assistance and support, making her a dependable and trusted friend and we both share enjoyable culinary adventures together. Her love, kindness, and optimism create a special bond between us , making her an indispensable part of my life and her positive attitude spreads good vibe whenever we are together

                
                </p>

                <p>
                she's always willing to lend a hand or a listening ear when you need it most. Her passion for food isn't just about eating; it's a genuine enthusiasm for exploring new tastes and culinary adventures together. 


                </p>

                <p>
                What sets her apart is her loving heart, which she wears on her sleeve. She cares deeply for those around her, and her affectionate gestures and words make you feel truly cherished. Her positive attitude is like a ray of sunshine, brightening up even the darkest days. Spending time with her is not just enjoyable; it's a source of inspiration and joy. 
When I share my secrets with her, I know they are safe, guarded by a bond of trust that you've built over time. She's not just a friend; she's your confidante, your partner in laughter and tears, and the person who brings out the best in you. She's an invaluable treasure in your life, and you're grateful for every moment spent together.


                </p>

                <p>
                Musk has expressed views that have made him a polarizing figure. He has been criticized for making unscientific and misleading statements, including spreading COVID-19 misinformation and promoting conspiracy theories. His Twitter ownership has been similarly controversial, including laying off a large number of employees, an increase in hate speech on the platform, and changes to Twitter Blue verification. In 2018, the U.S. Securities and Exchange Commission (SEC) sued him for falsely tweeting that he had secured funding for a private takeover of Tesla. To settle the case, Musk stepped down as the chairman of Tesla and paid a $20 million fine.
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