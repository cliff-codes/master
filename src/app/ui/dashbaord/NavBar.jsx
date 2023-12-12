'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { IoMdNotifications } from "react-icons/io";

const NavBar = () => {
    const pathname = usePathname()
    const routeName = pathname.split('/').pop()

  return (
    <div className='w-full h-12 sm:h-14 bg-slate-100 rounded-lg flex place-items-center justify-between px-2'>
        <h1 className='capitalize text-sm font-bold sm:text-lg '>
            {routeName}
        </h1>

        {/* notifications */}
        <div>
            <button className='h-9 hover:bg-slate-200 px-2 rounded-full transition-all 50 ease-linear'>
                <IoMdNotifications size={20}/>
                </button>
        </div>
    </div>
  )
}

export default NavBar