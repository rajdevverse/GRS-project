import "../styles/admin-dashboard.css";


function AdminDashboard(){

const stats = [

{
title:"TOTAL USERS",
count:"120",
icon:"bi-people",
color:"blue"
},


{
title:"TOTAL COMPLAINTS",
count:"85",
icon:"bi-file-earmark-text",
color:"red"
},


{
title:"PENDING",
count:"25",
icon:"bi-clock-history",
color:"yellow"
},


{
title:"CLOSED",
count:"50",
icon:"bi-check-circle",
color:"green"
},


{
title:"BLOCKED USERS",
count:"10",
icon:"bi-person-x",
color:"purple"
},


{
title:"TOTAL COLLEGES",
count:"8",
icon:"bi-building",
color:"pink"
}

];



return(

<div className="dashboard">


<h1>
Dashboard Overview
</h1>


<p className="subtitle">

Welcome back, Administrator. Here's what's happening today.

</p>




<div className="dashboard-cards">


{

stats.map((item,index)=>(


<div 
className="stat-card"
key={index}
>


<div className={`icon-box ${item.color}`}>

<i className={`bi ${item.icon}`}></i>

</div>



<div>


<h2>

{item.count}

</h2>


<p>

{item.title}

</p>


</div>



</div>


))


}



</div>




</div>


)

}


export default AdminDashboard;