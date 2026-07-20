import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";


function UserDashboard(){

const navigate = useNavigate();


const user = JSON.parse(
    localStorage.getItem("user")
);


const [complaints,setComplaints] = useState([]);



const logout = ()=>{

    localStorage.removeItem("user");

    navigate("/user-login");

};





useEffect(()=>{


const fetchComplaints = async()=>{


try{


const response = await fetch(

`http://localhost:5000/api/complaints/${user.id}`

);


const data = await response.json();


console.log("Dashboard Complaints:",data);


setComplaints(data);


}

catch(error){

console.log(error);

}


};



if(user?.id){

fetchComplaints();

}


},[]);






const total = complaints.length;


const pending = complaints.filter(

(c)=>c.status==="Pending"

).length;



const progress = complaints.filter(

(c)=>c.status==="In Progress"

).length;



const resolved = complaints.filter(

(c)=>c.status==="Resolved"

).length;







return(


<div className="dashboard-page">



{/* HEADER */}

<div className="dashboard-header">


<h1>
LNMU Grievance Portal
</h1>


<p>
Student Dashboard
</p>


</div>





{/* STAT CARDS */}


<div className="stats-container">



<div className="stats-card">

<div className="stats-icon">
📄
</div>

<h3>
Total Complaints
</h3>

<h2>
{total}
</h2>

</div>





<div className="stats-card">

<div className="stats-icon">
🟡
</div>

<h3>
Pending
</h3>

<h2>
{pending}
</h2>

</div>





<div className="stats-card">

<div className="stats-icon">
🔵
</div>

<h3>
In Progress
</h3>

<h2>
{progress}
</h2>

</div>





<div className="stats-card">

<div className="stats-icon">
🟢
</div>

<h3>
Resolved
</h3>

<h2>
{resolved}
</h2>

</div>



</div>







{/* ACTION CARDS */}


<div className="quick-container">



<div

className="action-card"

onClick={()=>navigate("/submit-complaint")}

>


<h2>
➕ Submit Complaint
</h2>


<p>
Register a new grievance and send it to administration.
</p>


</div>






<div

className="action-card"

onClick={()=>navigate("/my-complaints")}

>


<h2>
📋 My Complaints
</h2>


<p>
Track your complaints and check their status.
</p>


</div>



</div>







{/* RECENT COMPLAINTS */}



<div className="recent-box">


<h2>
Recent Complaints
</h2>



{

complaints.length===0 ?


<p>
No complaints submitted yet.
</p>


:


complaints.slice(0,3).map((complaint)=>(



<div

className="complaint-row"

key={complaint._id}

>



<div>


<h3>
{complaint.title}
</h3>


<p>
{complaint.category}
</p>


</div>



<div>


<p>
<b>
Complaint No:
</b>

{" "}

{complaint.complaintId || "Generating"}

</p>



<p>
<b>
Status:
</b>

{" "}

{complaint.status}

</p>


</div>



</div>



))


}



</div>






<button

className="logout-btn"

onClick={logout}

>

Logout

</button>




</div>


)

}


export default UserDashboard;