import { useEffect, useState } from "react";
import "../styles/complaints.css";


function MyComplaints(){


const [complaints,setComplaints] = useState([]);


const user = JSON.parse(
localStorage.getItem("user")
);





useEffect(()=>{


const fetchComplaints = async()=>{


try{


const response = await fetch(

`http://localhost:5000/api/complaints/${user.id}`

);



const data = await response.json();



console.log(
"My Complaints:",
data
);



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








const getStatusClass=(status)=>{


if(status==="Pending")

return "pending";


if(status==="Resolved")

return "resolved";


return "progress";


};








return(


<div className="complaint-page">


<div className="my-complaints-container">



<h2>
My Complaints
</h2>




{

complaints.length===0 ?


<div className="empty-box">


<p>
No complaints submitted yet.
</p>


</div>



:


complaints.map((complaint)=>(



<div

className="complaint-card"

key={complaint._id}

>




<h3>
{complaint.title}
</h3>




<p>

<b>
Complaint No:
</b>

{" "}

{complaint.complaintId || "Not Generated"}

</p>




<p>

<b>
Category:
</b>

{" "}

{complaint.category}

</p>





<p>

<b>
Description:
</b>

{" "}

{complaint.description}

</p>






<p>

<b>
Status:
</b>

{" "}


<span

className={

`status-badge ${getStatusClass(complaint.status)}`

}

>

{complaint.status}

</span>


</p>





<p>

<b>
Submitted On:
</b>

{" "}


{

new Date(
complaint.createdAt
).toLocaleDateString()

}


</p>





</div>



))


}




</div>



</div>



)


}


export default MyComplaints;