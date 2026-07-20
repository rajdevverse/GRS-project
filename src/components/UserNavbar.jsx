import { useNavigate } from "react-router-dom";
import "./UserNavbar.css";


function UserNavbar(){

const navigate = useNavigate();


const user = JSON.parse(
localStorage.getItem("user")
);



const logout=()=>{

localStorage.removeItem("user");

navigate("/user-login");

};



return(

<div className="user-navbar">


<div>

<h2>
LNMU Grievance Portal
</h2>

</div>



<div className="navbar-user">


<span>
👤 {user?.name || "Student"}
</span>



<button onClick={logout}>
Logout
</button>


</div>



</div>

)

}


export default UserNavbar;