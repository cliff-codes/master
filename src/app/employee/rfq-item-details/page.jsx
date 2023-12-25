import React from 'react'
import RfqItemDetailsRow from '../../ui/tables/RfqItemDetailsRow'
import Link from 'next/link'

const RfqDetailsAndLinkingPage = () => {
  return (
    <div>
      <div className="overflow-x-auto mt-3">
          <table className="table table-zebra border">
            {/* head */}
            <thead>
              <tr className='bg-slate-700 text-slate-50'>
                <th>RFQ Number</th>
                <th>RFQ Item Id</th>
                <th>RFQ Item Description</th>
                <th>RFQ Items Qty</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <RfqItemDetailsRow/>
              <RfqItemDetailsRow/>
              <RfqItemDetailsRow/>
            </tbody>
          </table>

          <div className=' mt-6 w-full'>
            <Link href={'/employee/link-quote-to-service'}>
              <button className='btn btn-success text-slate-50 w-full'>Link to potential suppliers</button>
            </Link>

            <Link href={'/employee/rfqs'}>
              <button className='btn btn-ghost w-full mt-2'>{"Back to RFQ's"}</button>
            </Link>
          </div>

        </div>
    </div>
  )
}

export default RfqDetailsAndLinkingPage