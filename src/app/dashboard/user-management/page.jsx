import React from 'react'
import NavBar from '../../ui/dashbaord/NavBar' 
import UsersLists from '../../ui/userManagement/UsersLists'
import Link from 'next/link'

const UserManagementPage = () => {
  return (
    <div className='flex-1 w-full mt-3 mr-1' >
      <NavBar/>
      <div className='mt-6'>
        <h1 className='text-base sm:text-xl'>Users Lists</h1>
        <div className='w-full flex justify-end'>
          <Link href={'/user-management/adduser'}>
            <button className='btn  btn-sm'>
            add user</button>
          </Link>
        </div>
      </div>
      <div className='w-full'>
        <UsersLists/>
      </div>
    </div>
  )
}

export default UserManagementPage