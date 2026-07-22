import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import DashboardCard from "../components/DashboardCard";
import "../styles/UserDashboard.css";


function UserDashboard(){


const navigate = useNavigate();



const [user,setUser] = useState(null);



const [stats,setStats] = useState({

    total:0,

    pending:0,

    inProgress:0,

    resolved:0

});



const [loading,setLoading] = useState(true);






useEffect(()=>{


const loggedUser = JSON.parse(

localStorage.getItem("user")

);



setUser(loggedUser);



if(loggedUser?.id){

fetchStats(loggedUser.id);

}


},[]);







const fetchStats = async(id)=>{


try{


const res = await axios.get(

`http://localhost:5000/api/complaints/stats/${id}`

);



setStats(res.data);



}

catch(error){


console.log(

"Stats Error:",

error

);


}

finally{


setLoading(false);


}


};









return(


<div className="dashboard">






<div className="dashboard-header">


<h1>

Welcome, {user?.name || "Student"} 👋

</h1>


<p>

LNMU Grievance Redressal Portal

</p>


</div>









<div className="user-info-card">


<div>


<i className="bi bi-envelope"></i>


<p>

{user?.email}

</p>


</div>


</div>









{/* COMPLAINT CARDS */}



<div className="row g-4">





<div className="col-xl-3 col-md-6 col-sm-12">


<DashboardCard

title="Total Complaints"

value={
loading ? "..." : stats.total
}

icon="bi bi-file-earmark-text"

color="#2563eb"

onClick={()=>navigate("/my-complaints")}

/>


</div>







<div className="col-xl-3 col-md-6 col-sm-12">


<DashboardCard

title="Pending"

value={
loading ? "..." : stats.pending
}

icon="bi bi-clock"

color="#f59e0b"

onClick={()=>navigate("/my-complaints?status=Pending")}

/>


</div>







<div className="col-xl-3 col-md-6 col-sm-12">


<DashboardCard

title="In Progress"

value={
loading ? "..." : stats.inProgress
}

icon="bi bi-arrow-repeat"

color="#8b5cf6"

onClick={()=>navigate("/my-complaints?status=In Progress")}

/>


</div>








<div className="col-xl-3 col-md-6 col-sm-12">


<DashboardCard

title="Resolved"

value={
loading ? "..." : stats.resolved
}

icon="bi bi-check-circle"

color="#10b981"

onClick={()=>navigate("/my-complaints?status=Resolved")}

/>


</div>





</div>









{/* QUICK ACTIONS */}



<div className="quick-actions">


<h2>

Quick Actions

</h2>





<div className="action-grid">






<Link to="/submit-complaint">


<div className="action-card">


<i className="bi bi-pencil-square"></i>


<h3>

Submit Complaint

</h3>


<p>

Register a new grievance

</p>


</div>


</Link>








<Link to="/my-complaints">


<div className="action-card">


<i className="bi bi-folder"></i>


<h3>

My Complaints

</h3>


<p>

Track complaint status

</p>


</div>


</Link>








<Link to="/profile">


<div className="action-card">


<i className="bi bi-person-circle"></i>


<h3>

Profile

</h3>


<p>

Manage your account

</p>


</div>


</Link>







</div>


</div>






</div>


);


}


export default UserDashboard;