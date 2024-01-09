import React from 'react'
import SuperAdminNav from '../ui/mobileNavs/SuperAdminNav'

function SuperAdminDashLayout({children}) {
    return (
      <div className='w-full overflow-y-scroll box-border'>
          <div>
             <SuperAdminNav/>
          </div>
          <div>{children}</div>
      </div>
    )
}

export default SuperAdminDashLayout