'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import ProcurementSideNav from './ProcurementSideNav'
import AdminSideNav from './AdminSideNav'
import BudgetOwnerSideNav from './BudgetOwnerSideNav'


const SideNavType = () => {
    const pathname = usePathname()
    
  return (
    <>
        {
            pathname.includes('admin') ? <AdminSideNav/> :
                pathname.includes('login') ? null
            : pathname.includes('employee') ? <ProcurementSideNav/> :
            <BudgetOwnerSideNav/>
        }
    </>
  )
}

export default SideNavType