import React from 'react'
import SearchUser from '../../ui/userManagement/adduser/SearchUser'
import Link from 'next/link'
import UsersLists from '../../ui/userManagement/UsersLists'

const UserManagementPage = () => {
    return (
      <div className='flex-1 full mt-3 mx-2 ml-4' >
  
        <div className='mt-6'>
          <h1 className='text-base sm:text-xl'>Users Lists</h1>
          <div className='w-full flex justify-between place-items-center mt-5 mb-3'>
            {/* search bar */}
            <SearchUser/>
  
  
            <Link href={'/admin/user-management/adduser'}>
            <button className="btn  btn-xs h-10 w-30 px-4 relative ">+</button>
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