import React from 'react'
import NavBar from '../../ui/dashbaord/NavBar' 
import UsersLists from '../../ui/userManagement/UsersLists'

const UserManagementPage = () => {
  return (
    <div className='flex-1 mt-3 mr-3' >
      <NavBar/>
      <div className='mt-6 mr-2'>
        <h1 className='text-xl'>Users Lists</h1>
        <div className='w-full flex justify-end'>
          <button className='btn  btn-sm'>
          add user</button>
        </div>
      </div>
      <div className='w-full '>
        <UsersLists/>
      </div>
    </div>
  )
}

export default UserManagementPage