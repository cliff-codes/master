import React from 'react'
import NavBar from '../ui/dashbaord/NavBar'
import StatsCard from '../ui/dashbaord/cards/StatsCard'
import ChartTest from '../ui/dashbaord/charts/ChartTest'
import DashBarChart from '../ui/dashbaord/charts/DashBarChart'

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

          <div className='w-full grid grid-cols-1 my-7 gap-16'>
            <div className='w-full h-72'>
              <h1>Price Monitor</h1>
              <div className='w-full h-full rounded-xl shadow-lg mb-3 py-3'>
                <ChartTest/>
              </div>
            </div>
            <div className='w-full h-60'>
              <h1>Total Purchase Order</h1>
              <div className='w-full h-full rounded-xl shadow-lg mb-3 py-3'>
                  <DashBarChart/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DashboardPage