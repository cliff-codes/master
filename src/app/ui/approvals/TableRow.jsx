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
                    <div className="text-xs font-bold sm:text-base">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td className='text-xs sm:text-base hidden sm:block'>
                10/12/2023
              </td>
              <td className='font-medium text-xs'>
                1200.00
              </td>
              <td>
                    <button className="bg-slate-200 rounded-md px-1 hover:bg-slate-200" onClick={()=>document.getElementById('my_modal_3').showModal()}>
                      <RxDotsHorizontal size={24}/>
                    </button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box w-80">
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