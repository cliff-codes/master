import React from 'react'
import {FaSearch} from 'react-icons/fa'
import ReqProcessItemTableRow from '../../ui/tables/ReqProcessItemTableRow'

function RfqPage() {
  return (
    <div className='mt-4 px-4'>
        <h1 className='font-semibold'>Process Requisitions</h1>

        <div className='w-full relative mt-4'>
            <input type="text" placeholder="search..." className="input w-full s max-w-xs bg-slate-200 focus:outline-none focus:border-slate-600 pl-8" />
            <FaSearch className='absolute top-1/3 left-2'/>
        </div>

        <div className="overflow-x-auto mt-3">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className='bg-slate-800 text-slate-50'>
                <th>REQ Number</th>
                <th>REQ Date Created</th>
                <th>REQ Expiry Date</th> 
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <ReqProcessItemTableRow/>
              <ReqProcessItemTableRow/>
              <ReqProcessItemTableRow/>
              <ReqProcessItemTableRow/>
              <ReqProcessItemTableRow/>
              <ReqProcessItemTableRow/>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default RfqPage