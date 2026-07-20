import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function UserLogin(){


const navigate = useNavigate();


const [formData,setFormData]=useState({

email:"",
password:""

});



const handleChange=(e)=>{

setFormData({

...formData,
[e.target.name]:e.target.value

});

};



const handleSubmit=async(e)=>{

e.preventDefault();


try{


const response = await fetch(
"http://localhost:5000/api/users/login",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(formData)

});


const data = await response.json();



alert(data.message);



if(response.ok){

localStorage.setItem(
"user",
JSON.stringify(data.user)
);


navigate("/user-dashboard");

}



}
catch(error){

console.log(error);

alert("Server error");

}


};



return(

<div className="auth-page">


<div className="auth-card">


<h2>User Login</h2>


<form onSubmit={handleSubmit}>


<input

type="email"

name="email"

placeholder="Email"

value={formData.email}

onChange={handleChange}

/>



<input

type="password"

name="password"

placeholder="Password"

value={formData.password}

onChange={handleChange}

/>



<button type="submit">

Login

</button>



</form>



<p>

New User?

<Link to="/user-register">
 Register
</Link>

</p>



</div>


</div>


)

}


export default UserLogin;