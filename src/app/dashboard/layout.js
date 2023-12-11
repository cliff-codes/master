import SideNav from "../ui/dashbaord/SideNav";


export default function DashboardLayout({ children }) {
    return (
        <div className="w-full flex">
            <SideNav/>
            {children}
        </div>
    )
  }