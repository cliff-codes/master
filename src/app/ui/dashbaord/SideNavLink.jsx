'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const SideNavLink = ({name , route, icon}) => {
    const pathname = usePathname()

    const routeName = pathname.split('/').pop()
  return (
    <div>
        <Link href={route} className={clsx('flex place-items-center gap-2 pl-2 py-3 hover:bg-slate-800 hover:text-slate-50 transition-all 100 ease-linear rounded-md', {
            'bg-slate-800 text-slate-50' : routeName === name.toLowerCase()
        })}>
            {icon}
            <button className='hidden sm:flex'>{name}</button>
        </Link>
    </div>
  )
}

export default SideNavLink