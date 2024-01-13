import Link from 'next/link'
import React from 'react'

const ViewRequestBtn = ({route}) => {
  return (
    <div>
        <Link href={route}><button className='btn btn-sm btn-success text-slate-50'>view</button></Link>
    </div>
  )
}

export default ViewRequestBtn