import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


function AdminComplaintDetails(){


const {id}=useParams();

const navigate=useNavigate();



const [complaint,setComplaint]=useState(null);

const [status,setStatus]=useState("");

const [remark,setRemark]=useState("");

const [loading,setLoading]=useState(true);






useEffect(()=>{

fetchComplaint();

},[]);







const fetchComplaint=async()=>{


try{


const token=localStorage.getItem("adminToken");


const res=await axios.get(

`http://localhost:5000/api/complaints/${id}`,

{

headers:{

Authorization:`Bearer ${token}`

}

}

);



setComplaint(res.data);


setStatus(res.data.status);


setRemark(

res.data.adminRemark || ""

);



}


catch(error){


console.log(

"Fetch Complaint Error",

error

);


}


finally{


setLoading(false);


}


};








const updateComplaint=async()=>{


try{


const token=localStorage.getItem("adminToken");



await axios.put(

`http://localhost:5000/api/complaints/${id}`,

{

status,

adminRemark:remark

},

{

headers:{

Authorization:`Bearer ${token}`

}

}

);




alert(

"Complaint Updated Successfully"

);



fetchComplaint();



}

catch(error){


console.log(

"Update Error",

error

);


}


};







if(loading){


return(

<h3 className="p-4">

Loading Complaint...

</h3>

);


}







if(!complaint){


return(

<h3 className="p-4">

Complaint Not Found

</h3>

);

}






return(



<div className="container-fluid py-4">





<button

className="btn btn-secondary mb-3"

onClick={()=>navigate("/admin/complaints")}

>

← Back To Complaints

</button>







<h2 className="fw-bold">

Complaint Details

</h2>







<div className="card shadow-sm mt-4">


<div className="card-body">





<div className="row">



<div className="col-md-6">


<h6 className="text-muted">

Complaint ID

</h6>


<p className="fw-bold">

{complaint.complaintId || "N/A"}

</p>


</div>






<div className="col-md-6">


<h6 className="text-muted">

Status

</h6>


<span className="badge bg-warning">

{complaint.status}

</span>


</div>





</div>








<hr/>






<h5>

Student

</h5>


<p>

{complaint.userId?.name || "Unknown"}

</p>





<h5>

Email

</h5>


<p>

{complaint.userId?.email || "N/A"}

</p>







<h5>

Title

</h5>


<p>

{complaint.title}

</p>






<h5>

Category

</h5>


<p>

{complaint.category}

</p>






<h5>

Description

</h5>


<p>

{complaint.description}

</p>








<hr/>







<h5>

Update Status

</h5>





<select

className="form-select"

value={status}

onChange={(e)=>

setStatus(e.target.value)

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


<option>

Rejected

</option>



</select>








<h5 className="mt-4">

Admin Remark

</h5>





<textarea

className="form-control"

rows="4"

placeholder="Write remark..."

value={remark}

onChange={(e)=>

setRemark(e.target.value)

}

/>







<button

className="btn btn-primary mt-4"

onClick={updateComplaint}

>

Update Complaint

</button>





</div>


</div>



</div>



);


}


export default AdminComplaintDetails;