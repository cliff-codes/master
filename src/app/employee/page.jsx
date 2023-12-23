import React from 'react'
import { format } from 'date-fns';
import OverviewCard from '../ui/cards/OverviewCard';

const Employee = () => {
    const myDate = new Date();
    const formattedDate = format(myDate, 'yyyy-MM-dd');
  
  return (
    <div className='w-full'>
        <div className='mt-5 px-6 flex justify-between '>
            <h1>Overview</h1>
            {/* date*/}
            <div>{formattedDate}</div>
        </div>
        <div className='w-full grid grid-cols-2 gap-1 sm:grid-cols-4 px-3 mt-2'>
            <OverviewCard name={"Requests for quote"} count={13}/>
            <OverviewCard name={"Purchase request"} count={10}/>
            <OverviewCard name={"Purchase order"} count={5}/>
            <OverviewCard name={"Invoice(s)"} count={5}/>
        </div>

    </div>
  )
}

export default Employee