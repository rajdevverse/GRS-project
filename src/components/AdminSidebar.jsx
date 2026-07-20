import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AdminSidebar.css";


function AdminSidebar(){

const navigate = useNavigate();
const location = useLocation();


const [complaintsOpen,setComplaintsOpen] = useState(
location.pathname.includes("/admin/complaints")
);



const logout = ()=>{

localStorage.removeItem("adminToken");

navigate("/admin-login");

};




const active = (path)=>{

return location.pathname === path ? "active" : "";

};




return(

<aside className="admin-sidebar">



{/* BRAND */}

<div className="admin-brand">


<div className="brand-logo">

🎓

</div>


<div>

<h2>
LNMU
</h2>

<p>
Admin Panel
</p>


</div>


</div>








{/* MAIN */}

<div className="sidebar-section">


<h4>
MAIN
</h4>


<button

className={active("/admin-dashboard")}

onClick={()=>navigate("/admin-dashboard")}

>

<i className="bi bi-speedometer2"></i>

Dashboard

</button>


</div>









{/* MANAGEMENT */}

<div className="sidebar-section">


<h4>
MANAGEMENT
</h4>




<button

className={active("/admin/college")}

onClick={()=>navigate("/admin/college")}

>

<i className="bi bi-building"></i>

College Management

</button>





<button

className={active("/admin/session")}

onClick={()=>navigate("/admin/session")}

>

<i className="bi bi-calendar"></i>

Session Management

</button>





<button

className={active("/admin/complaint-types")}

onClick={()=>navigate("/admin/complaint-types")}

>

<i className="bi bi-card-text"></i>

Complaint Types

</button>







<button

className="dropdown-btn"

onClick={()=>setComplaintsOpen(!complaintsOpen)}

>

<i className="bi bi-file-earmark-text"></i>


Complaints


<span>

{complaintsOpen ? "⌃":"⌄"}

</span>


</button>







{
complaintsOpen &&

<div className="submenu">


<button

className={active("/admin/complaints")}

onClick={()=>navigate("/admin/complaints")}

>

All Complaints

</button>





<button

className={active("/admin/complaints/pending")}

onClick={()=>navigate("/admin/complaints/pending")}

>

Pending

</button>





<button

className={active("/admin/complaints/not-processed")}

onClick={()=>navigate("/admin/complaints/not-processed")}

>

Not Processed

</button>





<button

className={active("/admin/complaints/closed")}

onClick={()=>navigate("/admin/complaints/closed")}

>

Closed

</button>


</div>

}



</div>









{/* USERS */}

<div className="sidebar-section">


<h4>
USERS
</h4>





<button

className={active("/admin/users")}

onClick={()=>navigate("/admin/users")}

>

<i className="bi bi-people"></i>

User Management

</button>







<button

className={active("/admin/users/blocked")}

onClick={()=>navigate("/admin/users/blocked")}

>

<i className="bi bi-person-x"></i>

Blocked Users

</button>



</div>









{/* COMMUNITY */}

<div className="sidebar-section">


<h4>
COMMUNITY
</h4>





<button

className={active("/admin/discussion")}

onClick={()=>navigate("/admin/discussion")}

>

<i className="bi bi-chat"></i>

Discussion Forum

</button>


</div>









{/* ACCOUNT */}

<div className="sidebar-section">


<h4>
ACCOUNT
</h4>





<button

className={active("/admin/change-password")}

onClick={()=>navigate("/admin/change-password")}

>

<i className="bi bi-key"></i>

Change Password

</button>








<button

className="logout-btn"

onClick={logout}

>

<i className="bi bi-box-arrow-right"></i>

Logout

</button>



</div>





</aside>

)

}


export default AdminSidebar;