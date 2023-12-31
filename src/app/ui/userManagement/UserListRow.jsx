import React from 'react'
import Image from 'next/image'
import {MdModeEditOutline, MdDelete} from 'react-icons/md'



const UserListRow = ({isChecked, handleCheckBoxChange, index}) => {
  return (
    <tr>
             <th>
                <label>
                    <input type="checkbox" className="checkbox w-5 h-5" checked = {isChecked} onChange={() => {
                        handleCheckBoxChange(index)
                    }} />
                </label>
                </th>
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-8 h-12 hidden">
                        <Image src="/pic.jpg" width={20} height={20} quality={70} alt="user image" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold text-xs xs:text-sm">Hart Hagerty</div>
                    </div>
                </div>
                </td>
                <td className='text-xs sm:text-base'>
                    developer
                </td>
                <th>
                    <button className="btn btn-ghost text-sm btn-xs sm:btn-sm sm:text-lg">
                        <MdModeEditOutline/>
                    </button>
                    <button className='btn btn-ghost text-sm btn-xs sm:btn-sm sm:text-lg'>
                        <MdDelete/>
                    </button>
                </th>
            </tr>
  )
}

export default UserListRow