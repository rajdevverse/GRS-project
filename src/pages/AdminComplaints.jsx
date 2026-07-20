import { useEffect, useState } from "react";
import "../styles/admin-complaints.css";


function AdminComplaints(){


const [complaints,setComplaints] = useState([]);





const fetchComplaints = async()=>{


try{


const response = await fetch(

"http://localhost:5000/api/complaints"

);



const data = await response.json();


setComplaints(data);



}

catch(error){

console.log(error);

}


};







useEffect(()=>{


fetchComplaints();


},[]);








const updateStatus = async(id,status)=>{


try{


await fetch(

`http://localhost:5000/api/complaints/${id}`,

{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

status

})

}

);



fetchComplaints();


}


catch(error){

console.log(error);

}


};







return(


<div className="admin-complaints-page">



<h1>
Complaints Management
</h1>


<p>
Manage and update student grievances
</p>






<div className="complaints-table-card">



<table>



<thead>


<tr>


<th>
Complaint No
</th>


<th>
Title
</th>


<th>
Category
</th>


<th>
Description
</th>


<th>
Status
</th>


<th>
Action
</th>


</tr>


</thead>





<tbody>



{

complaints.map((complaint)=>(


<tr key={complaint._id}>


<td>

{complaint.complaintId || "Old"}

</td>



<td>

{complaint.title}

</td>



<td>

{complaint.category}

</td>




<td>

{complaint.description}

</td>





<td>


<span

className={

complaint.status==="Resolved"

?

"status resolved"

:

complaint.status==="In Progress"

?

"status progress"

:

"status pending"

}

>


{complaint.status}


</span>


</td>





<td>


<select


value={complaint.status}


onChange={(e)=>

updateStatus(

complaint._id,

e.target.value

)

}


>


<option>
Pending
</option>


<option>
In Progress
</option>


<option>
Resolved
</option>


</select>


</td>




</tr>


))


}




</tbody>




</table>



</div>



</div>


)

}



export default AdminComplaints;