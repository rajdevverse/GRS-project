import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell
} from "recharts";


import DashboardCard from "../components/DashboardCard";
import RecentComplaints from "../components/RecentComplaints";




const AdminDashboard = () => {



const navigate = useNavigate();




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








const complaintData=[


{

name:"Pending",

count:stats.pending

},



{

name:"Progress",

count:stats.inProgress

},



{

name:"Resolved",

count:stats.resolved

}



];







const chartColors=[

"#f59e0b",

"#8b5cf6",

"#10b981"

];









return(



<div className="container-fluid py-4">






<div className="mb-4">


<h2 className="fw-bold text-dark">

Dashboard

</h2>


<p className="text-muted">

Welcome back, Administrator 👋

</p>


</div>









<div className="row g-4">





<div className="col-xl-3 col-md-6">

<DashboardCard

title="Total Complaints"

value={loading ? "..." : stats.totalComplaints}

icon="bi bi-file-earmark-text"

color="#2563eb"

onClick={()=>navigate("/admin/complaints")}

/>

</div>







<div className="col-xl-3 col-md-6">

<DashboardCard

title="Pending"

value={loading ? "..." : stats.pending}

icon="bi bi-hourglass-split"

color="#f59e0b"

onClick={()=>navigate("/admin/complaints?status=Pending")}

/>

</div>







<div className="col-xl-3 col-md-6">

<DashboardCard

title="In Progress"

value={loading ? "..." : stats.inProgress}

icon="bi bi-arrow-repeat"

color="#8b5cf6"

onClick={()=>navigate("/admin/complaints?status=In Progress")}

/>

</div>







<div className="col-xl-3 col-md-6">

<DashboardCard

title="Resolved"

value={loading ? "..." : stats.resolved}

icon="bi bi-check-circle"

color="#10b981"

onClick={()=>navigate("/admin/complaints?status=Resolved")}

/>

</div>







<div className="col-xl-3 col-md-6">

<DashboardCard

title="Registered Users"

value={loading ? "..." : stats.totalUsers}

icon="bi bi-people"

color="#ec4899"

onClick={()=>navigate("/admin/users")}

/>

</div>






</div>









{/* ANALYTICS */}



<div className="row mt-5">





<div className="col-lg-8">



<div className="card shadow-sm">


<div className="card-body">


<h4 className="fw-bold mb-4">

Complaint Status Analytics 📊

</h4>







<ResponsiveContainer

width="100%"

height={300}

>


<BarChart data={complaintData}>


<XAxis dataKey="name"/>



<YAxis />




<Tooltip

contentStyle={{

background:"#ffffff",

borderRadius:"10px",

border:"none",

boxShadow:"0 5px 20px rgba(0,0,0,.15)"

}}

/>





<Bar

dataKey="count"

radius={[12,12,0,0]}

>


{

complaintData.map((item,index)=>(


<Cell

key={index}

fill={chartColors[index]}

/>


))


}



</Bar>



</BarChart>



</ResponsiveContainer>





</div>


</div>



</div>









<div className="col-lg-4">



<div className="card shadow-sm">


<div className="card-body">


<h4 className="fw-bold mb-4">

Categories

</h4>





{

stats.categoryStats?.length > 0 ?


stats.categoryStats.map((item,index)=>(


<div

key={index}

className="d-flex justify-content-between border-bottom py-2"

>


<span>

{item._id || "Other"}

</span>


<b>

{item.count}

</b>


</div>



))


:

<p className="text-muted">

No category data available

</p>



}





</div>


</div>



</div>






</div>









<div className="mt-5">


<RecentComplaints/>


</div>






</div>



);


};



export default AdminDashboard;