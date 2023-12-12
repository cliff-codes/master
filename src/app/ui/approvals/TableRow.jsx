'use client'
import React from 'react'
import { RxDotsHorizontal } from "react-icons/rx";



const TableRow = ({isChecked, handleCheckBoxChange, index}) => {

  return (
    <>
        <tr className='hover:bg-slate-100 transition-all 200 ease-linear rounded-lg'>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" checked = {isChecked} onChange={() => {
                   handleCheckBoxChange(index)
                  }} />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:block avatar transition-all 100 ease-linear">
                    <div className="mask mask-squircle w-12 h-12 hidden">
                      <img src="/pic.jpg" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>
                10/12/2023
              </td>
              <td className='flex flex-col md:flex-row'>
                <span><button className='btn btn-success text-green-200'>approve</button></span>
                <span><button className='btn bg-red-500 text-red-200 hover:bg-red-600'>decline</button></span>
              </td>
              <td className='z-100 '>
                <button className="btn btn-ghost btn-xs">
                    <div className="dropdown dropdown-top dropdown-end">
                        <div tabIndex={0} role="button" className=""><RxDotsHorizontal size={24}/></div>
                            <ul tabIndex={0} className="dropdown-content  z-100 menu p-2 shadow bg-base-100 rounded-box w-40">
                                <li><a>total cost</a></li>
                                <li><a>budget</a></li>
                                <li><a>documents</a></li>
                            </ul>
                        </div>
                    </button>
              </td>
            </tr>
    </>
  )
}

export default TableRow