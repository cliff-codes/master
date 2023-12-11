import SideNav from "../ui/dashbaord/SideNav";


export default function DashboardLayout({ children }) {
    return (
        <div className="w-full flex gap-4">
            <SideNav/>
            {children}
        </div>
    )
  }