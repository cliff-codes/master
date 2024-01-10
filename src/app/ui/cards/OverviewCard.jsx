import Link from 'next/link'
import React from 'react'

const OverviewCard = ({count, name}) => {
  return (
   <Link href={""} className='cursor-pointer  rounded-sm bg-slate-600 text-slate-50 transition-all 100 ease-in'>
        <div className='h-40 flex flex-col place-items-center justify-center gap-4 py-4'>
            <div className='text-lg xs:text-2xl font-semibold'>{count}</div>
            <div className='text-xs xs:text-base sm:text-base text-clip'>{name}</div>
        </div>
   </Link>
  )
}
export default OverviewCard