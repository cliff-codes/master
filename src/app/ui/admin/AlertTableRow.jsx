import React from 'react'

const AlertTableRow = () => {

    // fetch date time and request type from database

  return (
    <tr className='hover:bg-slate-600 hover:text-white cursor-pointer'>
        <td>12/03/22</td>
        <td>10:15 AM</td>
        <td>Requistion Approval</td>
        <td>
            <button className='btn btn-xs'>details</button>
        </td>
    </tr>
  )
}

export default AlertTableRow