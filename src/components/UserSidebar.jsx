import { useNavigate } from "react-router-dom";
import "./UserSidebar.css";


function UserSidebar(){

const navigate = useNavigate();


const logout = ()=>{

localStorage.removeItem("user");

navigate("/user-login");

};



return(

<div className="user-sidebar">


<div className="sidebar-logo">

🎓

<h2>
LNMU
</h2>

<p>
Grievance Portal
</p>

</div>




<div className="sidebar-menu">


<button onClick={()=>navigate("/user-dashboard")}>

🏠 Dashboard

</button>



<button onClick={()=>navigate("/submit-complaint")}>

➕ Submit Complaint

</button>



<button onClick={()=>navigate("/my-complaints")}>

📋 My Complaints

</button>



<button 
className="logout-menu"
onClick={logout}
>

🚪 Logout

</button>



</div>



</div>

)

}


export default UserSidebar;