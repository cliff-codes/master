'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import ProcurementSideNav from './ProcurementSideNav'
import AdminSideNav from './AdminSideNav'


const SideNavType = () => {
    const pathname = usePathname()
    
  return (
    <>
        {
            pathname.includes('admin') ? <AdminSideNav/> :
                pathname.includes('login') ? null
            : <ProcurementSideNav/>
        }
    </>
  )
}

export default SideNavType