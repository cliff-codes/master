import React from 'react'

const ReportCard = ({title, value}) => {
  return (
    <div className=' h-32 text-center flex flex-col place-items-center justify-center shadow bg-slate-700 rounded-md'>
        <h1 className='font-normal text-lg xs:text-xl sm:font-normal text-slate-50'>{title}</h1>
        <h1 className='font-medium text-2xl sm:font-normal text-slate-50 '>{value}</h1>
    </div>
  )
}
export default ReportCard