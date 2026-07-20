import { useEffect, useState } from "react";
import "../styles/college-management.css";


function CollegeManagement(){


const [collegeName,setCollegeName] = useState("");

const [colleges,setColleges] = useState([]);





// GET COLLEGES

const fetchColleges = async()=>{


try{


const res = await fetch(
"http://localhost:5000/api/admin/college"
);


const data = await res.json();


setColleges(data);


}

catch(error){

console.log(error);

}


};







useEffect(()=>{

fetchColleges();

},[]);








// ADD COLLEGE


const addCollege = async()=>{


if(!collegeName){

alert("Enter college name");

return;

}



try{


await fetch(
"http://localhost:5000/api/admin/college",
{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

name:collegeName

})


}

);



setCollegeName("");

fetchColleges();



}

catch(error){

console.log(error);

}


};








// DELETE COLLEGE


const deleteCollege = async(id)=>{


try{


await fetch(

`http://localhost:5000/api/admin/college/${id}`,

{

method:"DELETE"

}

);



fetchColleges();


}

catch(error){

console.log(error);

}


};







return(


<div className="college-page">





{/* ADD COLLEGE CARD */}


<div className="college-card">


<h2>
Add New College
</h2>



<label>
College Name
</label>


<input

value={collegeName}

onChange={(e)=>setCollegeName(e.target.value)}

placeholder="Enter college name"

/>



<button
onClick={addCollege}
>

Save College

</button>



</div>









{/* TABLE */}


<div className="college-card">


<h2>
Registered Colleges
</h2>





<table>


<thead>

<tr>

<th>
S NO.
</th>


<th>
COLLEGE NAME
</th>


<th>
CREATED BY
</th>


<th>
ACTION
</th>


</tr>


</thead>





<tbody>



{

colleges.length===0 ?


<tr>

<td colSpan="4">

No colleges found

</td>

</tr>


:


colleges.map((college,index)=>(


<tr key={college._id}>


<td>
{index+1}
</td>



<td>
{college.name}
</td>



<td>
{college.createdBy}
</td>




<td>


<button className="edit-btn">

Edit

</button>



<button

className="delete-btn"

onClick={()=>deleteCollege(college._id)}

>

Delete

</button>



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


export default CollegeManagement;