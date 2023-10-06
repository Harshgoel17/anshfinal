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

            <div className='text-lol pr-64 pt-2 flex flex-col gap-4'>
                <p>
                Elon Reeve Musk (/ˈiːlɒn/ EE-lon; born June 28, 1971) is a business magnate and investor. Musk is the founder, chairman, CEO and chief technology officer of SpaceX; angel investor, CEO, product architect and former chairman of Tesla, Inc.; owner, chairman and CTO of X Corp.; founder of the Boring Company; co-founder of Neuralink and OpenAI; and president of the Musk Foundation. He is the wealthiest person in the world, with an estimated net worth of US$232 billion as of September 2023, according to the Bloomberg Billionaires Index, and $253 billion according to Forbes, primarily from his ownership stakes in both Tesla and SpaceX.[4][5]

                
                </p>

                <p>
                Musk was born in Pretoria, South Africa, and briefly attended the University of Pretoria before immigrating to Canada at age 18, acquiring citizenship through his Canadian-born mother. Two years later, he matriculated at Queen's University in Kingston, Ontario. Musk later transferred to the University of Pennsylvania, and received bachelor's degrees in economics and physics there. He moved to California in 1995 to attend Stanford University. However, Musk dropped out after two days and, with his brother Kimbal, co-founded online city guide software company Zip2. The startup was acquired by Compaq for $307 million in 1999, and with $12 million of the money he made, that same year Musk co-founded X.com, a direct bank. X.com merged with Confinity in 2000 to form PayPal.

                </p>

                <p>
                In 2002, eBay acquired PayPal for $1.5 billion, and that same year, with $100 million of the money he made, Musk founded SpaceX, a spaceflight services company. In 2004, he became an early investor in electric vehicle manufacturer Tesla Motors, Inc. (now Tesla, Inc.). He became its chairman and product architect, assuming the position of CEO in 2008. In 2006, Musk helped create SolarCity, a solar-energy company that was acquired by Tesla in 2016 and became Tesla Energy. In 2013, he proposed a hyperloop high-speed vactrain transportation system. In 2015, he co-founded OpenAI, a nonprofit artificial intelligence research company. The following year, Musk co-founded Neuralink—a neurotechnology company developing brain–computer interfaces—and the Boring Company, a tunnel construction company. In 2022, he acquired Twitter for $44 billion. He subsequently merged the company into newly created X Corp. and rebranded the service as X the following year. In March 2023, he founded xAI, an artificial-intelligence company.


                </p>

                <p>
                Musk has expressed views that have made him a polarizing figure. He has been criticized for making unscientific and misleading statements, including spreading COVID-19 misinformation and promoting conspiracy theories. His Twitter ownership has been similarly controversial, including laying off a large number of employees, an increase in hate speech on the platform, and changes to Twitter Blue verification. In 2018, the U.S. Securities and Exchange Commission (SEC) sued him for falsely tweeting that he had secured funding for a private takeover of Tesla. To settle the case, Musk stepped down as the chairman of Tesla and paid a $20 million fine.
                </p>
            </div>
        </div>
    </div>
  )
}

export default page