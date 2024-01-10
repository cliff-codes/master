import React from 'react'
import {format} from 'date-fns'
import ReportCard from '../../ui/analyticsAndReports/cards/ReportCard';
import ReportTable from '../../ui/analyticsAndReports/table/ReportTable';



const page = () => {
    const timestamp = Date.now();
    const formattedDate = format(new Date(timestamp), 'MM/dd/yy');
    return (
      <div className='px-3'>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 mb-8'>
          <div className='w-full'>
            <ReportCard title = {'Total Reports'} value={22} />
          </div>
          <div className='w-full'>
            <ReportCard title = {'Approved Budgets'} value={"$500,000"} />
          </div>
          <div className='w-full xxs:col-span-2 sm:col-auto'>
            <ReportCard title = {'Total Declined Requests'} value={13}  />
          </div>
        </div>      
  
        <div className='flex justify-between mt-3'>
          <h1 className='font-bold'>Reports</h1>
          <div>{formattedDate}</div>
        </div>
  
        <div className='flex place-items-center mt-4'>
        
          <div className='flex place-items-center'>
            <input type="text" placeholder="search..." className="input input-bordered input-sm flex-1 w-full max-w-sm focus:outline-none focus:border-slate-500 pr-5" />
  
          </div>
        </div>
  
        <div className='mt-4'>
          <ReportTable />
        </div>
      </div>
    )
}

export default page