import Link from 'next/link'
import React from 'react'

const CreateRequestBtn = ({route}) => {
  return (
    <div>
        <Link href={route}>
            <button className='btn btn-success text-slate-50'>create request</button>
        </Link>
    </div>
  )
}

export default CreateRequestBtn