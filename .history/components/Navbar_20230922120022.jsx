import React from 'react'

const Navbar = () => {
  return (
    <div className='flex h-20 w-screen items-center justify-between border-b px-10'>
        <div className='flex gap-6 items-center'>
            <h1 className='text-xl font-semibold'>Gugulu</h1>
            <input type="text" className="bg-background border border-foreground/20 rounded-full h-11 w-20 px-5" value={'Who is my bestie?'}/>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Navbar