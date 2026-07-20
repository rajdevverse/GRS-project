import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/admin-topbar.css";


function AdminTopbar(){

const [time,setTime] = useState(new Date());

const location = useLocation();


useEffect(()=>{

const timer = setInterval(()=>{

setTime(new Date());

},1000);


return ()=>clearInterval(timer);

},[]);



const pathName = location.pathname
.replace("/admin","")
.replace("-"," ")
.replace("/"," ");



return(

<header className="admin-topbar">


<div className="breadcrumb">

Admin Panel / {pathName || "dashboard"}

</div>



<div className="topbar-right">


<div className="datetime">

<div>
{time.toLocaleTimeString()}
</div>

<div>
{time.toDateString()}
</div>

</div>



<div className="admin-avatar">

<i className="bi bi-person-fill"></i>

</div>


</div>



</header>

)

}


export default AdminTopbar;