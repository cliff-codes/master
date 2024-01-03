


export default function DashboardLayout({ children }) {
    return (
        <div className="w-full  overflow-y-auto  flex flex-col mb-8">
            <div>
                {/* <MobileNav/> */}<nav>mobileNav</nav>
            </div>
            {/* <SideNav/> */}
            <div className="mx-2">
                {children}
            </div>    
        </div>
    )
  }