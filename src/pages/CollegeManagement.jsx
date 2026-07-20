import { useState } from "react";
import "../styles/college-management.css";


function CollegeManagement(){


const [college,setCollege]=useState("");



const addCollege=()=>{


if(!college){

alert("Enter college name");

return;

}


alert("College added successfully");


setCollege("");

};



return(


<div className="college-page">



<h1>
College Management
</h1>



<div className="college-add-card">


<h2>
Add New College
</h2>



<label>
College Name
</label>


<input

type="text"

placeholder="Enter College Name"

value={college}

onChange={(e)=>setCollege(e.target.value)}

/>



<button onClick={addCollege}>

Add College

</button>



</div>






<div className="college-table-card">


<h2>
Registered Colleges
</h2>



<div className="table-tools">


<select>

<option>
10
</option>

<option>
25
</option>

<option>
50
</option>

</select>


<span>
entries per page
</span>



<input

placeholder="Search records..."

/>



</div>





<table>


<thead>

<tr>

<th>
S No.
</th>


<th>
College Name
</th>


<th>
Created By
</th>


<th>
Actions
</th>


</tr>

</thead>



<tbody>


<tr>


<td colSpan="4" className="no-data">

No colleges found

</td>


</tr>


</tbody>



</table>




<p className="entry-text">

Showing 1 to 1 of 1 entry

</p>




</div>




</div>


)

}


export default CollegeManagement;