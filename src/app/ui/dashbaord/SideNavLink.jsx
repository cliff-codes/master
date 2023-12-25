'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const SideNavLink = ({name , route, icon}) => {
    const pathname = usePathname()
    
    const routeName = pathname.split('/').pop()
  return (
    <Link href={route} className={clsx('w-full group   hover:bg-slate-600 hover:text-white text-slate-400 transition-all 100 ease-linear rounded-md group', {
      'bg-slate-600 text-white' : routeName === name.toLowerCase()
  })}>
      <div>
        <div className='flex place-items-center gap-2 pl-2 py-3 px-2'>
            {icon}
            <button className='sm:flex '>{name}</button>
        </div>
    </div>
    </Link>
  )
}

export default SideNavLink