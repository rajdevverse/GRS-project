import { useEffect, useState } from "react";
import FormCard from "../components/FormCard";
import DataTable from "../components/DataTable";
import "../styles/session-management.css";


function SessionManagement() {


const [sessionName,setSessionName] = useState("");

const [sessions,setSessions] = useState([]);

const [editId,setEditId] = useState(null);





// GET SESSIONS

const fetchSessions = async()=>{


try{


const res = await fetch(
"http://localhost:5000/api/admin/session"
);


const data = await res.json();


setSessions(data);


}

catch(error){

console.log(error);

}


};





useEffect(()=>{

fetchSessions();

},[]);








// ADD / UPDATE SESSION


const saveSession = async()=>{


if(!sessionName){

alert("Enter session name");

return;

}



try{


if(editId){


// UPDATE

await fetch(

`http://localhost:5000/api/admin/session/${editId}`,

{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

name:sessionName

})

}

);


setEditId(null);


}

else{


// ADD

await fetch(

"http://localhost:5000/api/admin/session",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

name:sessionName

})

}

);


}



setSessionName("");

fetchSessions();


}

catch(error){

console.log(error);

}


};








// DELETE SESSION


const deleteSession = async(id)=>{


const confirmDelete = window.confirm(
"Delete this session?"
);


if(!confirmDelete) return;



try{


await fetch(

`http://localhost:5000/api/admin/session/${id}`,

{

method:"DELETE"

}

);



fetchSessions();


}

catch(error){

console.log(error);

}


};








// EDIT SESSION


const editSession=(session)=>{


setSessionName(session.name);

setEditId(session._id);


};







return (

<div className="page-container">


<FormCard

title={
editId 
? "Update Session"
: "Add New Session"
}

label="Session"

placeholder="Enter Session"

buttonText={
editId
? "Update Session"
: "Save Session"
}

value={sessionName}

onChange={(e)=>setSessionName(e.target.value)}

onSubmit={saveSession}

/>








<DataTable

title="Registered Sessions"


columns={[

"S No.",

"Session",

"Created By",

"Actions"

]}



rows={

sessions.map((session,index)=>(

[

index + 1,

session.name,

session.createdBy,


<div className="table-actions" key={session._id}>


<button

className="edit-btn"

onClick={()=>editSession(session)}

>

Edit

</button>




<button

className="delete-btn"

onClick={()=>deleteSession(session._id)}

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


export default SessionManagement;