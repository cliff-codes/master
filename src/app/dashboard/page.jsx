import React from 'react'
import NavBar from '../ui/dashbaord/NavBar'
import ChartTest from '../ui/dashbaord/charts/ChartTest'
import BarChart from '../ui/dashbaord/charts/BarChart'

const DashboardPage = () => {
  return (
    <div className='flex-1 mt-3 mr-3'>
        <NavBar/>

        <div className='w-full'>
            <BarChart/>
        </div>
    </div>
  )
}

export default DashboardPage