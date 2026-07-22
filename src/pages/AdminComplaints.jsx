import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/admin-complaints.css";


function AdminComplaints(){


const [complaints,setComplaints] = useState([]);

const [search,setSearch] = useState("");

const [loading,setLoading] = useState(true);


const navigate = useNavigate();

const location = useLocation();






useEffect(()=>{

fetchComplaints();

},[]);







const fetchComplaints = async()=>{


try{


const token = localStorage.getItem("adminToken");


const res = await axios.get(

"http://localhost:5000/api/complaints",

{

headers:{

Authorization:`Bearer ${token}`

}

}

);



setComplaints(res.data);



}


catch(error){


console.log(

"Fetch Complaint Error:",

error.response?.data || error.message

);



}


finally{


setLoading(false);


}


};









const updateStatus = async(id,status)=>{


try{


const token = localStorage.getItem("adminToken");



await axios.put(

`http://localhost:5000/api/complaints/${id}`,

{

status

},

{

headers:{

Authorization:`Bearer ${token}`

}

}

);



alert("Status Updated");


fetchComplaints();



}

catch(error){


console.log(

"Update Error",

error

);


}


};









const statusFilter = 

new URLSearchParams(location.search).get("status");








const filteredComplaints = complaints.filter((item)=>{


const searchMatch =

item.title

?.toLowerCase()

.includes(

search.toLowerCase()

);



if(!searchMatch)

return false;





if(statusFilter){

return item.status === statusFilter;

}




if(

location.pathname === "/admin/complaints/pending"

){

return item.status==="Pending";

}





if(

location.pathname === "/admin/complaints/not-processed"

){

return item.status==="In Progress";

}





if(

location.pathname === "/admin/complaints/closed"

){

return item.status==="Resolved";

}





return true;


});









const getHeading = ()=>{


if(statusFilter)

return `${statusFilter} Complaints`;



if(location.pathname.includes("pending"))

return "Pending Complaints";


if(location.pathname.includes("not-processed"))

return "In Progress Complaints";


if(location.pathname.includes("closed"))

return "Resolved Complaints";


return "All Complaints";


};









return(


<div className="complaints-page">



<div className="complaints-card">





<div className="complaints-header">


<h2>

{getHeading()}

</h2>






<input


type="text"


placeholder="Search complaints..."


value={search}


onChange={(e)=>

setSearch(e.target.value)

}


/>



</div>









{

loading ?


<h4>

Loading complaints...

</h4>



:




<table>


<thead>


<tr>


<th>
S.No
</th>


<th>
Complaint ID
</th>


<th>
Student
</th>


<th>
Title
</th>


<th>
Category
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

filteredComplaints.length===0 ?



<tr>

<td

colSpan="7"

className="text-center"

>

No Complaints Found

</td>

</tr>





:





filteredComplaints.map((item,index)=>(


<tr key={item._id}>


<td>

{index+1}

</td>




<td>

{item.complaintId || "N/A"}

</td>





<td>

{

item.userId?.name ||

"Student"

}

</td>





<td>

{item.title}

</td>





<td>

{item.category}

</td>






<td>



<select


className={

`status-select ${

item.status

.replace(" ","-")

}`

}



value={item.status}


onChange={(e)=>

updateStatus(

item._id,

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


<option>

Rejected

</option>



</select>



</td>







<td>


<button


className="view-btn"


onClick={()=>navigate(

`/admin/complaint/${item._id}`

)}


>


View


</button>



</td>





</tr>


))


}



</tbody>


</table>



}









<div className="table-footer">


<p>

Showing {filteredComplaints.length} complaints

</p>



</div>






</div>


</div>


);


}


export default AdminComplaints;