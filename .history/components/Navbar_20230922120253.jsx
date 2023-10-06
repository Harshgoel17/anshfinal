import React from 'react'
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className='flex h-24 w-screen items-center justify-between border-b px-10'>
        <div className='flex gap-7 items-center'>
            <h1 className='text-xl font-semibold'>Gugulu</h1>
            <input type="text" className="bg-background border border-foreground/20 rounded-full h-11 w-[20vw] px-5" value={'Who is my bestie?'}/>
        </div>
        <div className='flex items-center gap-6'>
            <Button variant="outline" >Sign In</Button>
        </div>
    </div>
  )
}

export default Navbar