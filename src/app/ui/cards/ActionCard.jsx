import Link from 'next/link'
import React from 'react'

const ActionCard = ({name, Icon}) => {
  return (
    <Link href={'/'}>
        <div className='flex place-items-center gap-2 hover:bg-slate-800 h-full hover:text-slate-50 rounded-sm transition-all 100 ease-linear py-1 pl-1'>
            <div>{Icon}</div>
            <div>{name}</div>
        </div>
    </Link>
  )
}

export default ActionCard