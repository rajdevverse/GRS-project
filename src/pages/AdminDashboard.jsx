import { useEffect, useState } from "react";
import axios from "axios";

import DashboardCard from "../components/DashboardCard";
import RecentComplaints from "../components/RecentComplaints";



const AdminDashboard = () => {



const [stats,setStats] = useState({

    totalComplaints:0,

    pending:0,

    inProgress:0,

    resolved:0,

    totalUsers:0,

    categoryStats:[]

});



const [loading,setLoading] = useState(true);






useEffect(()=>{


fetchDashboard();


},[]);







const fetchDashboard = async()=>{


try{


const token = localStorage.getItem("adminToken");



const res = await axios.get(

"http://localhost:5000/api/admin/stats",

{

headers:{

Authorization:`Bearer ${token}`

}

}

);





setStats(res.data);



}
catch(error){


console.log(

"Dashboard Error:",

error.response?.data || error.message

);



}
finally{


setLoading(false);


}



};








return(



<div className="container-fluid py-4">





{/* HEADER */}


<div className="mb-4">


<h2 className="fw-bold text-dark">

Dashboard

</h2>


<p className="text-muted">

Welcome back, Administrator 👋

</p>


</div>









{/* DASHBOARD CARDS */}



<div className="row g-4">





<div className="col-xl-3 col-md-6">

<DashboardCard

title="Total Complaints"

value={loading ? "..." : stats.totalComplaints}

icon="bi bi-file-earmark-text"

color="#2563eb"

/>

</div>







<div className="col-xl-3 col-md-6">

<DashboardCard

title="Pending"

value={loading ? "..." : stats.pending}

icon="bi bi-hourglass-split"

color="#f59e0b"

/>

</div>







<div className="col-xl-3 col-md-6">

<DashboardCard

title="In Progress"

value={loading ? "..." : stats.inProgress}

icon="bi bi-arrow-repeat"

color="#8b5cf6"

/>

</div>







<div className="col-xl-3 col-md-6">

<DashboardCard

title="Resolved"

value={loading ? "..." : stats.resolved}

icon="bi bi-check-circle"

color="#10b981"

/>

</div>







<div className="col-xl-3 col-md-6">

<DashboardCard

title="Registered Users"

value={loading ? "..." : stats.totalUsers}

icon="bi bi-people"

color="#ec4899"

/>

</div>




</div>









{/* CATEGORY SUMMARY */}



<div className="card shadow-sm mt-5">


<div className="card-body">


<h4 className="fw-bold mb-4">

Complaint Categories

</h4>





<div className="row">



{

stats.categoryStats?.length > 0 ?


stats.categoryStats.map((item,index)=>(


<div

className="col-md-3 mb-3"

key={index}

>


<div className="border rounded p-3">


<h6 className="text-muted">

{item._id || "Other"}

</h6>


<h3 className="fw-bold">

{item.count}

</h3>


</div>


</div>


))


:

<div className="text-muted">

No category data available

</div>



}



</div>



</div>


</div>









{/* RECENT COMPLAINTS */}



<div className="mt-5">


<RecentComplaints/>


</div>






</div>



);


};



export default AdminDashboard;