import React from 'react'

const RfqItemsTableRow = () => {
  return (
    <tr className='hover:bg-slate-50'>
      <th>2</th>
      <td>RFQ0002</td>
      <td>Desktop Support Technician</td>
      <td>123</td>
      <td className='flex gap-1 place-items-center'><span><button className='btn btn-success text-slate-50 btn-sm'>edit</button></span> <span><button className='btn btn-error text-slate-50 btn-sm'>delete</button></span></td>
    </tr>
  )
}

export default RfqItemsTableRow