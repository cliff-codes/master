import Link from 'next/link'
import React from 'react'

const RfqProcessItemTableRow = () => {
  return (
    <tr className='hover'>
        <th>RFQ0001</th>
        <td>12/24/20323</td>
        <td>12/30/20323</td>
        
        <td>
            <Link href={'/employee/requisition-item-details'}>
                <button className='btn btn-success btn-sm text-slate-50'>view</button>
            </Link>
        </td>
    </tr>
  )
}

export default RfqProcessItemTableRow