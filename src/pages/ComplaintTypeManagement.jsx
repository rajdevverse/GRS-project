import { useEffect, useState } from "react";
import FormCard from "../components/FormCard";
import DataTable from "../components/DataTable";
import "../styles/complaint-types.css";


function ComplaintTypeManagement(){


const [typeName,setTypeName] = useState("");

const [types,setTypes] = useState([]);

const [editId,setEditId] = useState(null);






// GET COMPLAINT TYPES

const fetchTypes = async()=>{


try{


const res = await fetch(
"http://localhost:5000/api/admin/complaint-types"
);


const data = await res.json();


setTypes(data);


}

catch(error){

console.log(error);

}


};






useEffect(()=>{


fetchTypes();


},[]);









// ADD / UPDATE


const saveType = async()=>{


if(!typeName){

alert("Enter complaint type");

return;

}



try{


if(editId){


// UPDATE

await fetch(

`http://localhost:5000/api/admin/complaint-types/${editId}`,

{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

name:typeName

})

}

);


setEditId(null);


}

else{


// ADD


await fetch(

"http://localhost:5000/api/admin/complaint-types",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

name:typeName

})

}

);


}



setTypeName("");

fetchTypes();


}


catch(error){

console.log(error);

}


};









// DELETE


const deleteType = async(id)=>{


if(!window.confirm("Delete complaint type?"))
return;



try{


await fetch(

`http://localhost:5000/api/admin/complaint-types/${id}`,

{

method:"DELETE"

}

);


fetchTypes();


}

catch(error){

console.log(error);

}


};









// EDIT


const editType=(item)=>{


setTypeName(item.name);

setEditId(item._id);


};







return(

<div className="page-container">



<FormCard

title={
editId
?
"Update Complaint Type"
:
"Add Complaint Type"
}

label="Complaint Type"

placeholder="Enter Complaint Type"

buttonText={
editId
?
"Update"
:
"Save"
}

value={typeName}

onChange={(e)=>setTypeName(e.target.value)}

onSubmit={saveType}

/>







<DataTable

title="Registered Complaint Types"

columns={[

"S No.",

"Complaint Type",

"Created By",

"Actions"

]}



rows={

types.map((item,index)=>(


[

index+1,

item.name,

item.createdBy,


<div className="table-actions">


<button

className="edit-btn"

onClick={()=>editType(item)}

>

Edit

</button>



<button

className="delete-btn"

onClick={()=>deleteType(item._id)}

>

Delete

</button>



</div>


]


))

}


/>



</div>

);

}


export default ComplaintTypeManagement;