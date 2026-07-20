import { useNavigate } from "react-router-dom";
import "./AdminSidebar.css";


function AdminSidebar(){

const navigate = useNavigate();


const logout = ()=>{

localStorage.removeItem("adminToken");

navigate("/admin-login");

};



return(

<div className="admin-sidebar">


<div className="admin-brand">

<h2>
🎓 LNMU
</h2>

<p>
Admin Panel
</p>

</div>



<div className="sidebar-section">

<h4>
MAIN
</h4>

<button onClick={()=>navigate("/admin-dashboard")}>
🏠 Dashboard
</button>


</div>





<div className="sidebar-section">

<h4>
MANAGEMENT
</h4>


<button>
🏫 College Management
</button>


<button>
📅 Session Management
</button>


<button>
📝 Complaint Type
</button>


<button onClick={()=>navigate("/admin-complaints")}>
📋 Complaints
</button>


</div>







<div className="sidebar-section">

<h4>
USERS
</h4>


<button>
👥 User Management
</button>


<button>
🚫 Blocked Users
</button>


</div>







<div className="sidebar-section">

<h4>
COMMUNITY
</h4>


<button>
💬 Discussion Forum
</button>


</div>







<div className="sidebar-section">

<h4>
ACCOUNT
</h4>


<button>
🔐 Change Password
</button>


<button 
className="logout-btn"
onClick={logout}
>
🚪 Logout
</button>


</div>



</div>

)

}


export default AdminSidebar;