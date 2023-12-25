import React from 'react'

const LinkSuppliersTableRow = ({isChecked, checkBoxChange, index}) => {
  return (
   <>
    {/* row 1 */}
    <tr className='hover'>
        <th>
            <label>
            <input type="checkbox" className="checkbox" checked = {isChecked} onChange={() => {
                   checkBoxChange(index)
                }} />
            </label>
        </th>
        <td>
            <div className="flex items-center gap-3">
            <div>
                <div className="font-bold">Hart Hagerty</div>
                <div className="text-sm opacity-50">United States</div>
            </div>
            </div>
        </td>
        <td>
            hagerty@gmail.com
        </td>
        <td>SUP0001</td>
        <th>
            <button className="btn btn-ghost btn-xs">details</button>
        </th>
    </tr>
   </>
  )
}

export default LinkSuppliersTableRow