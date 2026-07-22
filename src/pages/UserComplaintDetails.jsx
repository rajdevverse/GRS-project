import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


function UserComplaintDetails(){


const {id}=useParams();

const navigate=useNavigate();


const [complaint,setComplaint]=useState(null);



useEffect(()=>{

fetchComplaint();

},[]);






const fetchComplaint=async()=>{


try{


const res=await axios.get(

`http://localhost:5000/api/complaints/${id}`

);


setComplaint(res.data);


}

catch(error){

console.log(error);

}


};







if(!complaint){

return(

<h3 className="p-4">

Loading...

</h3>

);

}







return(

<div className="container py-4">


<button

className="btn btn-secondary mb-3"

onClick={()=>navigate("/my-complaints")}

>

← Back

</button>





<h2 className="fw-bold">

Complaint Details

</h2>






<div className="card shadow-sm mt-4">


<div className="card-body">



<h4>

{complaint.title}

</h4>





<p>

<b>
Complaint ID:
</b>

{" "}

{complaint.complaintId}

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





<hr/>






<h5>

Current Status

</h5>



<span className="badge bg-primary">

{complaint.status}

</span>







<hr/>







<h5>

Admin Remark

</h5>



<p>

{

complaint.adminRemark ||

"No remark added yet"

}


</p>







<hr/>







<h5>

Status Timeline

</h5>





<div className="timeline">



<div>

✅ Complaint Submitted

</div>




<div>

{

complaint.status==="Pending"

?

"⏳ Waiting for review"

:

"✅ Reviewed"

}

</div>





<div>

{

complaint.status==="Resolved"

?

"✅ Resolved"

:

"⏳ Resolution Pending"

}

</div>




</div>







</div>


</div>


</div>


);


}


export default UserComplaintDetails;