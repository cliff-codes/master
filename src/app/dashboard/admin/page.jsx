
import React from 'react'
import OverviewCard from '../../ui/cards/OverviewCard'
import AlertsTable from '../../ui/admin/AlertsTable'
import RequisitionsTable from '../../ui/admin/RequisitionsTable'

const page = () => {
  return (
    <div>
        <div className='mt-5'>
            <h1 className='text-md xs:text-lg sm:text-xl '>Overview</h1>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2'>
                <OverviewCard name={'All Requisitions'} count={15}/>
                <OverviewCard name={'Pending Requisitions'} count={"03"}/>
                <OverviewCard name={'Approved Requisitions'} count={24}/>
                <OverviewCard name={'Declined Requisitions'} count={"0"}/>
            </div>
        </div>


        {/* alerts */}
        <div className='mt-10'>
            <h1 className='mb-2'>Alerts <span className='text-red-400'>(20)</span></h1>

            {/* table displaying incoming alerts */}
            <AlertsTable/>
        </div>

        {/* requisitions */}
        <div className='mt-10'>
            <h1 className='mb-2'>Requisitions <span className='text-green-600'>(20)</span></h1>

            {/* table displaying requisitions */}
            <RequisitionsTable/>
        </div>
    </div>
  )
}

export default page