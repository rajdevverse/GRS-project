import "../styles/admin-dashboard.css";


function AdminDashboard(){


const stats=[

{
title:"Total Users",
count:3,
icon:"👥",
class:"users"
},


{
title:"Not Processed",
count:0,
icon:"📂",
class:"processed"
},


{
title:"Pending",
count:2,
icon:"⏳",
class:"pending"
},


{
title:"Closed",
count:1,
icon:"✅",
class:"closed"
},


{
title:"Total Colleges",
count:0,
icon:"🏫",
class:"colleges"
},


{
title:"Blocked Users",
count:0,
icon:"🚫",
class:"blocked"
}

];




return(

<div className="admin-dashboard">



<h1>
Admin Panel
</h1>



<h2 className="dashboard-title">
Dashboard Overview
</h2>



<p className="dashboard-subtitle">

Welcome back, Admin. Here is what is happening today.

</p>






<div className="admin-stats">


{

stats.map((item,index)=>(


<div 
className={`admin-card ${item.class}`}
key={index}
>


<div className="card-icon">

{item.icon}

</div>



<div className="card-content">


<h3>
{item.title}
</h3>


<h2>
{item.count}
</h2>



</div>


</div>



))


}



</div>





</div>

)

}


export default AdminDashboard;