import Link from 'next/link'
import React from 'react'

const ManageRequisitionBtn = ({route}) => {
  return (
    <div>
        <Link href={route}><button className='btn btn-sm btn-success text-slate-50'>manage</button></Link>
    </div>
  )
}
export default ManageRequisitionBtn