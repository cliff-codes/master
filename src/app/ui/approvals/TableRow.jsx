'use client'
import React from 'react'
import { RxDotsHorizontal } from "react-icons/rx"
import ApproveRequestModal from "../../ui/approvals/ApproveRequestModal"



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
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>
                      <RxDotsHorizontal size={24}/>
                    </button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                        {/* Approve request modal section */}
                        <ApproveRequestModal/>
                      </div>
                    </dialog>
              </td>
            </tr>
    </>
  )
}

export default TableRow