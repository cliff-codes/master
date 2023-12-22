import Link from 'next/link'
import React from 'react'

const OverviewCard = ({count, name}) => {
  return (
   <Link href={"/"} className='cursor-pointer border rounded-sm hover:border-none hover:bg-slate-600 hover:text-slate-50 transition-all 100 ease-in'>
        <div className='flex flex-col place-items-center py-4'>
            <div className='text-lg font-semibold'>{count}</div>
            <div className='text-xs xs:text-sm sm:text-base text-clip'>{name}</div>
        </div>
   </Link>
  )
}

export default OverviewCard