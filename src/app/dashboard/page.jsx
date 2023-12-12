import React from 'react'
import NavBar from '../ui/dashbaord/NavBar'
import StatsCard from '../ui/dashbaord/cards/StatsCard'
import ChartTest from '../ui/dashbaord/charts/ChartTest'

const DashboardPage = () => {
  return (
    <div className='flex-1 mt-3 mr-3'>
        <NavBar/>
        <div className='w-full'>
          {/* cards section */}
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3'>
            <StatsCard title={"Total Purchase Order"} totalCount={380} percentageIncrease={'13%'} />
            <StatsCard title={"Total Purchase request"} totalCount={125} percentageIncrease={'3%'}/>
            <StatsCard title={"Material Outstanding"} totalCount={80} percentageIncrease={'24%'} />
          </div>

          <div className='w-full grid grid-cols-1 lg:grid-cols-2 my-7 gap-10'>
            <div className='w-full h-60'>
              <h1>Price Monitor</h1>
              <div className='w-full h-full bg-slate-100 shadow-lg mb-3 rounded-sm'>
                <ChartTest/>
              </div>
            </div>
            <div className='w-full h-60'>
              <h1>Total Purchase Order</h1>
              <div className='w-full h-full bg-slate-100 shadow-lg mb-3 rounded-sm'>
                  
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DashboardPage