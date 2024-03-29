'use client'
import React, {useState} from 'react'
import { TbArrowsSort } from 'react-icons/tb'
import TableRow from '../../../ui/approvals/TableRow'

const AdminApprovals = () => {
    const [checkAll, setCheckAll] = useState(false)
    const [checkboxes, setCheckboxes] = useState(Array(2).fill(false))
  
    const handleCheckAll = () => {
      setCheckAll(!checkAll)
      setCheckboxes((prevCheckboxes) => prevCheckboxes.map(() => !checkAll))
    }
  
    const handleCheckboxChange = (index) => {
      setCheckboxes((prevCheckboxes) => {
        const updatedCheckboxes = [...prevCheckboxes];
        updatedCheckboxes[index] = !prevCheckboxes[index];
        return updatedCheckboxes;
      });
  
      // Check if all checkboxes are checked
      if (checkboxes.every((checkbox) => checkbox)) {
        setCheckAll(true);
      } else {
        setCheckAll(false);
      }
    };
  
    return (
      <div className='flex-1 flex flex-col px-4'>
      
          <div className="pt-14">
            <div className='w-full flex justify-between mb-2 place-items-center'>
              <div className="dropdown dropdown-right">
                <div tabIndex={0} role="button" className=" h-8 bg-slate-300 px-2 m-1 flex gap-1 hover:bg-slate-200 text-xs transition-all 100s ease-out place-items-center rounded-lg sm:text-base">sort by <span><TbArrowsSort size={16}/></span></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Date</a></li>
                  <li><a>Status </a></li>
                </ul>
              </div>
  
              {
                checkboxes.some((isChecked) => isChecked) ? <div className=' h-12 rounded-lg'>
                <div><button className='btn btn-error'>Delete</button></div>
              </div> : null
              }
            </div>
            
            <div className="overflow-x-auto bg-slate-50 rounded-sm">
              <table className="table border">
              {/* head */}
              <thead>
                <tr className='bg-slate-700 text-slate-50'>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" checked = {checkAll} onChange={handleCheckAll} />
                    </label>
                  </th>
                  <th>Name</th>
                  <th className='hidden sm:block'>Date</th>
                  <th>Budget</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className=' pb-3 '>
                {/* table rows */}
                {
                  checkboxes.map((isChecked, index) => (
                    <TableRow key={index} isChecked = {isChecked} handleCheckBoxChange = {handleCheckboxChange} index={index}/>
                  ))
                }
              </tbody>
              {/* foot */}
              </table>
            </div>
            {/* overflow-x-auto bg-slate-50 rounded-sm */}
          </div>
      </div> 
    )
}

export default AdminApprovals