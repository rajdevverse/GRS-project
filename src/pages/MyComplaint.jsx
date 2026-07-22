import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../styles/MyComplaints.css";


function MyComplaints(){


const [complaints,setComplaints] = useState([]);

const [filteredComplaints,setFilteredComplaints] = useState([]);

const [loading,setLoading] = useState(true);

const [error,setError] = useState("");



const location = useLocation();

const navigate = useNavigate();



const user = JSON.parse(

localStorage.getItem("user")

);







const fetchComplaints = async()=>{


try{


setLoading(true);

setError("");



if(!user || !user.id){


setError(

"User session not found. Please login again."

);


return;


}




const response = await fetch(

`http://localhost:5000/api/complaints/${user.id}`

);





const data = await response.json();





if(response.ok){


setComplaints(data);

setFilteredComplaints(data);


}

else{


setError(

data.message || "Unable to fetch complaints"

);


}



}

catch(error){


console.log(

"Complaint Fetch Error",

error

);


setError(

"Server connection failed."

);


}

finally{


setLoading(false);


}



};









useEffect(()=>{


fetchComplaints();


},[]);









// FILTER USING DASHBOARD CARD CLICK


useEffect(()=>{


const params = new URLSearchParams(

location.search

);


const status = params.get("status");





if(status){


setFilteredComplaints(

complaints.filter(

(item)=>

item.status===status

)

);


}

else{


setFilteredComplaints(

complaints

);


}



},[location.search,complaints]);









const getStatusClass=(status)=>{


if(status==="Resolved")

return "resolved";



if(status==="In Progress")

return "progress";



if(status==="Rejected")

return "rejected";



return "pending";


};









const getTitle=()=>{


const params = new URLSearchParams(

location.search

);


const status=params.get("status");



if(status)

return `${status} Complaints`;



return "My Complaints";


};








// SUMMARY COUNTS


const totalCount = complaints.length;


const pendingCount = complaints.filter(

(item)=>item.status==="Pending"

).length;



const progressCount = complaints.filter(

(item)=>item.status==="In Progress"

).length;



const resolvedCount = complaints.filter(

(item)=>item.status==="Resolved"

).length;









return(


<div className="complaint-page">


<div className="my-complaints-container">





<div className="complaint-header">


<h2>

{getTitle()}

</h2>



<div>


<button

className="refresh-btn"

onClick={()=>navigate("/user-dashboard")}

>

← Dashboard

</button>



<button

className="refresh-btn"

onClick={fetchComplaints}

>

Refresh

</button>

</div>



</div>









{/* SUMMARY CARDS */}



<div className="complaint-summary">


<div>

<h4>

Total

</h4>

<p>

{totalCount}

</p>

</div>




<div>

<h4>

Pending

</h4>

<p>

{pendingCount}

</p>

</div>




<div>

<h4>

In Progress

</h4>

<p>

{progressCount}

</p>

</div>




<div>

<h4>

Resolved

</h4>

<p>

{resolvedCount}

</p>

</div>



</div>









{
loading &&

<div className="empty-box">

Loading complaints...

</div>

}









{
error &&

<div className="empty-box error-box">

{error}

</div>

}











{

!loading &&

!error &&

filteredComplaints.length===0 &&


<div className="empty-box">

No complaints found.

</div>


}









{

filteredComplaints.map((complaint)=>(


<div

className="complaint-card"

key={complaint._id}

>



<h3>

{complaint.title}

</h3>






<p>

<b>
Complaint ID:
</b>{" "}

{complaint.complaintId}

</p>







<p>

<b>
Category:
</b>{" "}

{complaint.category}

</p>







<p>

<b>
Description:
</b>{" "}

{complaint.description}

</p>








<p>


<b>
Status:
</b>{" "}



<span

className={

`status-badge ${
getStatusClass(
complaint.status
)
}`

}

>


{complaint.status || "Pending"}


</span>


</p>









<p>


<b>
Submitted Date:
</b>{" "}



{

complaint.createdAt

?

new Date(

complaint.createdAt

).toLocaleDateString()

:

"N/A"

}



</p>






</div>



))


}







</div>


</div>


);


}


export default MyComplaints;