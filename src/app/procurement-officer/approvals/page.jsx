'use client'
import React,{useState} from 'react'
import TableRow from '../../ui/approvals/TableRow'
import { TbArrowsSort } from "react-icons/tb";


const ApprovalsPage = () => {

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
    <div className='flex-1 flex flex-col justify-center mt-3 w-full px-3'>
    
        <div className="pt-5">
          <div className='w-full flex justify-between mb-2 place-items-center'>
            <div className="dropdown dropdown-right">
              <div tabIndex={0} role="button" className="btn btn-sm">sort <span><TbArrowsSort size={16}/></span></div>
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

          <div className='overflow-x-auto bg-slate-50 rounded-sm'>
            <table className="table border ">
            {/* head */}
            <thead>
              <tr className='bg-slate-700 text-slate-50'>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" checked = {checkAll} onChange={handleCheckAll} />
                  </label>
                </th>
                <th>Name</th>
                <th className=''>Date</th>
                <th>Budget</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className=' pb-3 '>
              {/* row 1 */}
              {
                checkboxes.map((isChecked, index) => (
                  <TableRow key={index} isChecked = {isChecked} handleCheckBoxChange = {handleCheckboxChange} index={index}/>
                ))
              }
            </tbody>
            {/* foot */}
            </table>
          </div>
        </div>
    </div> 
  )
}

export default ApprovalsPage