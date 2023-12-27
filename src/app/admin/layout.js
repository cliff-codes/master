import React from 'react'
import AdminMobileNav from '../ui/mobileNavs/AdminMobileNav'

function AdminDashLayout({children}) {
  return (
    <div className='w-full overflow-y-scroll'>
        <div>
            <AdminMobileNav/>
        </div>
        <div>{children}</div>
    </div>
  )
}

export default AdminDashLayout