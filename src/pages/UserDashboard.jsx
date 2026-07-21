import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/UserDashboard.css";


function UserDashboard(){

const [user,setUser] = useState(null);


useEffect(()=>{

const loggedUser = JSON.parse(
localStorage.getItem("user")
);

setUser(loggedUser);


},[]);



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







<div className="dashboard-cards">



<div className="dashboard-card">

<div className="card-icon blue">

<i className="bi bi-file-earmark-text"></i>

</div>

<h3>
Total Complaints
</h3>

<h2>
1
</h2>


</div>






<div className="dashboard-card">


<div className="card-icon orange">

<i className="bi bi-clock"></i>

</div>


<h3>
Pending
</h3>


<h2>
1
</h2>


</div>






<div className="dashboard-card">


<div className="card-icon purple">

<i className="bi bi-arrow-repeat"></i>

</div>


<h3>
In Progress
</h3>


<h2>
0
</h2>


</div>






<div className="dashboard-card">


<div className="card-icon green">

<i className="bi bi-check-circle"></i>

</div>


<h3>
Resolved
</h3>


<h2>
0
</h2>


</div>



</div>









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