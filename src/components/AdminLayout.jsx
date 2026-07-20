import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import "../styles/admin-layout.css";


function AdminLayout(){

return(

<div className="admin-layout">

    <AdminSidebar />

    <main className="admin-content">

        <Outlet />

    </main>


</div>

)

}


export default AdminLayout;