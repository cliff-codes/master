'use client'
import React,{useState} from 'react'
import NavBar from '../../ui/dashbaord/NavBar'
import TableRow from '../../ui/approvals/TableRow'
import { IoIosArrowDown } from "react-icons/io";


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
    <div className='flex-1 mt-3 mr-3'>
        <NavBar/>
        
        <div className="overflow-x-auto overflow-y-hidden pt-14">
          <div className='w-full flex justify-between mb-2 place-items-center'>
            <div className="dropdown dropdown-right">
              <div tabIndex={0} role="button" className="btn m-1">sort by <span><IoIosArrowDown/></span></div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Date</a></li>
                <li><a>Status </a></li>
              </ul>
            </div>

            {
              checkboxes.some((isChecked) => isChecked) ? <div className=' h-12 rounded-lg'>
              <div><button className='btn bg-red-400 text-white hover:bg-red-500'>Delete</button></div>
            </div> : null
            }
          </div>
          <table className="table border  ">
          {/* head */}
          <thead>
            <tr className=''>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" checked = {checkAll} onChange={handleCheckAll} />
                </label>
              </th>
              <th>Name</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
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
  )
}

export default ApprovalsPage