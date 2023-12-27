'use client'

import React, {useState} from 'react'
import UserListRow from './UserListRow'

const UsersLists = () => {

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
    <div className="w-full mt-2 box-border">
        <table className="table border">
            {/* head */}
            <thead>
            <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox w-5 h-5"checked = {checkAll} onChange={handleCheckAll}/>
                </label>
                </th>
                <th>Name</th>
                <th>Role</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            {checkboxes.map((isChecked, index) => (
                <UserListRow key={index} isChecked = {isChecked} handleCheckBoxChange = {handleCheckboxChange} index={index}/>
              ))}
            </tbody>
        </table>
    </div>
  )
}

export default UsersLists