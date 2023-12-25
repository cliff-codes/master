import React from 'react'
import {FaSearch} from 'react-icons/fa'
import RfqProcessItemTableRow from '../../ui/tables/RfqProcessItemTableRow'

function RfqPage() {
  return (
    <div className='mt-4 px-4'>
        <h1 className='font-semibold'>Process Requests for Quotation</h1>

        <div className='w-full relative mt-4'>
            <input type="text" placeholder="search..." className="input w-full s max-w-xs bg-slate-200 focus:outline-none focus:border-slate-600 pl-8" />
            <FaSearch className='absolute top-1/3 left-2'/>
        </div>

        <div className="overflow-x-auto mt-3">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className='bg-slate-800 text-slate-50'>
                <th>RFQ Number</th>
                <th>RFQ Date Created</th>
                <th>RFQ Expiry Date</th>
                <th>RFQ Description</th>
                <th>RFQ Condition</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <RfqProcessItemTableRow/>
              <RfqProcessItemTableRow/>
              <RfqProcessItemTableRow/>
              <RfqProcessItemTableRow/>
              <RfqProcessItemTableRow/>
              <RfqProcessItemTableRow/>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default RfqPage