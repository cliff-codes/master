import React from 'react'
import { format } from 'date-fns';
import OverviewCard from '../ui/cards/OverviewCard';
import ChartTest from '../ui/dashbaord/charts/ChartTest'
import DashBarChart from '../ui/dashbaord/charts/DashBarChart'

const Employee = () => {
    const myDate = new Date();
    const formattedDate = format(myDate, 'yyyy-MM-dd');
  
  return (
    <div className='w-full'>
        <div className='mt-5 px-6 flex justify-between font-medium sm:text-xl'>
            <h1>Overview</h1>
            {/* date*/}
            <div>{formattedDate}</div>
        </div>
        <div className='w-full grid grid-cols-2 gap-1 sm:grid-cols-4 px-3 mt-3'>
            <OverviewCard name={"Requests for quote"} count={13}/>
            <OverviewCard name={"Purchase request"} count={10}/>
            <OverviewCard name={"Purchase order"} count={5}/>
            <OverviewCard name={"Invoice(s)"} count={5}/>
        </div>

        <div className='w-full h-72 mt-10'>
          <ChartTest/>
        </div>
        
    </div>
  )
}

export default Employee