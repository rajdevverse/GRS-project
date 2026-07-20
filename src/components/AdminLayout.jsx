import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

import "../styles/admin-layout.css";


function AdminLayout(){

return(

<div className="admin-layout">


<AdminSidebar />


<div className="admin-wrapper">


<AdminTopbar />


<main className="admin-content">

<Outlet />

</main>


</div>


</div>

)

}


export default AdminLayout;