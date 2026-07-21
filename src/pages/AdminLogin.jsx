import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UniversityLogo from "../components/UniversityLogo";


function AdminLogin(){


const navigate = useNavigate();


const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [error,setError] = useState("");



const handleLogin = async()=>{


try{


const res = await fetch(
"http://localhost:5000/api/admin/login",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email,
password
})
}
);



const data = await res.json();



if(!res.ok){

setError(data.message);

return;

}



localStorage.setItem(
"admin",
JSON.stringify(data.admin)
);



navigate("/admin-dashboard");



}
catch(err){

console.log(err);

setError("Backend not connected");

}



};





return(

<div className="container-fluid">

<div className="row min-vh-100">


<div className="col-md-6 admin-bg text-white d-flex align-items-center">


<div className="p-5">


<h1>
Administrator Portal
</h1>


<h3>
Grievance Management System
</h3>


<p>
Authorized administrators can manage complaints and grievances.
</p>


</div>


</div>





<div className="col-md-6 d-flex align-items-center justify-content-center">


<div className="auth-card">


<UniversityLogo/>


<h2 className="text-center mt-4">
Admin Login
</h2>




<input

type="email"

placeholder="Admin Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>





<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>






<button

className="btn-admin-gradient w-100"

onClick={handleLogin}

>

Login

</button>





{
error &&

<p className="text-danger text-center mt-3">

{error}

</p>

}





</div>


</div>


</div>


</div>


);


}


export default AdminLogin;