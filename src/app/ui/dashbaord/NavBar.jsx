'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { IoMdNotifications } from "react-icons/io";

const NavBar = () => {
    const pathname = usePathname()
    const routeName = pathname.split('/').pop()

  return (
    <div className='w-full h-16 bg-slate-100 rounded-lg flex place-items-center justify-between px-2'>
        <h1 className='capitalize sm:text-lg'>
            {routeName}
        </h1>

        {/* notifications */}
        <div>
            <button className='btn'>
                <IoMdNotifications size={24}/>
                </button>
        </div>
    </div>
  )
}

export default NavBar