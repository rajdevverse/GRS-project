import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import UserNavbar from "./UserNavbar";


function UserLayout(){


return(

<div>


<UserSidebar/>



<div className="user-main">


<UserNavbar/>


<div className="page-content">

<Outlet/>

</div>


</div>



</div>

)

}


export default UserLayout;