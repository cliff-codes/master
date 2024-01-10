import Image from 'next/image'
import React from 'react'
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ReportTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table border">
        {/* head */}
        <thead>
          <tr className='bg-slate-700 text-slate-50'>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Status</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className='hover:bg-slate-200 cursor-pointer'>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div>Staff</div>
              </div>
            </td>
            <td>
              [mothly]StartJan2018
            </td>
            <td className='flex'>
              <div className='hover:bg-slate-100 p-2 rounded-full'>
                <FaEye />
              </div>
              
              <div className='hover:bg-slate-100 p-2 rounded-full'>
                <MdDelete/>
              </div>
            </td>
            
          </tr>

          <tr className='hover:bg-slate-200 cursor-pointer'>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div>Staff</div>
              </div>
            </td>
            <td>
              [mothly]StartJan2018
            </td>
            <td className='flex'>
              <div className='hover:bg-slate-100 p-2 rounded-full'>
                <FaEye />
              </div>
              
              <div className='hover:bg-slate-100 p-2 rounded-full'>
                <MdDelete/>
              </div>
            </td>
            
          </tr>

          <tr className='hover:bg-slate-200 cursor-pointer'>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div>Staff</div>
              </div>
            </td>
            <td>
              [mothly]StartJan2018
            </td>
            <td className='flex'>
              <div className='hover:bg-slate-100 p-2 rounded-full'>
                <FaEye />
              </div>
              
              <div className='hover:bg-slate-100 p-2 rounded-full'>
                <MdDelete/>
              </div>
            </td>
            
          </tr>
        </tbody>  
      </table>
    </div>
  )
}

export default ReportTable