import React from 'react'

const StatsCard = ({title, percentageIncrease, totalCount}) => {
  return (
    <div className='w-full py-2 px-1 pl-2 mt-3 rounded-md shadow-md flex flex-col gap-1 '>
        <h1 className='text-slate-500 text-xs sm:text-sm'>{title}</h1>
        <div className='sm:text-lg'>{totalCount}</div>
        <div className='text-xs text-green-500'>{percentageIncrease}</div>
    </div>
  )
}

export default StatsCard