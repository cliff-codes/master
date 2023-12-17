'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { IoMdNotifications } from "react-icons/io";

const NavBar = () => {
    const pathname = usePathname()
    const routeName = pathname.split('/').pop()

  return (
    <div className='w-full h-12 sm:h-14  rounded-lg flex place-items-center justify-between px-2 border-b shadow-lg'>
        <h1 className='capitalize text-sm font-bold sm:text-lg '>
            {routeName}
        </h1>

        
    </div>
  )
}

export default NavBar