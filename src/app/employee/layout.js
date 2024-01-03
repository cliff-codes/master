
import EmployeeMoblieNav from "../ui/mobileNavs/EmployeeMoblieNav"

export default function EmployeePageLayout({ children }) {
    return (
        <div className="w-full  overflow-y-auto  flex flex-col mb-8">
            <div>
                <EmployeeMoblieNav/>
            </div>
            {/* <SideNav/> */}
            <div className="mx-2">
                {children}
            </div>    
        </div>
    )
  }