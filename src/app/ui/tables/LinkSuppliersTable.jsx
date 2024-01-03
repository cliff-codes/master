'use client'
import React, {useState} from 'react'
import LinkSuppliersTableRow from './LinkSuppliersTableRow'
const LinkSuppliersTable = () => {
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
    <div>
        <div className="overflow-x-auto">
            <table className="table border">
            {/* head */}
            <thead>
                <tr>
                <th>
                    <label>
                    <input type="checkbox" className="checkbox" checked = {checkAll} onChange={handleCheckAll} />
                    </label>
                </th> 
                <th>Company Name</th>
                <th>Contact Person Email</th>
                <th>Supplier Id</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    checkboxes.map((isChecked, index) => (

                        <LinkSuppliersTableRow key={index} index={index} isChecked = {isChecked} checkBoxChange = {handleCheckboxChange}/>
                    ))
                }
            </tbody>

            </table>
        </div>
        {   
            checkboxes.includes(true) ? <button className='btn btn-success text-slate-50 w-full my-4'>Send quotes to selected suppliers</button> : null
        }
    </div>
  )
}

export default LinkSuppliersTable