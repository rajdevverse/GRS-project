import { useState } from "react";
import { Link } from "react-router-dom";


function UserRegister(){

const [formData,setFormData] = useState({
    name:"",
    email:"",
    mobile:"",
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
            "http://localhost:5000/api/users/register",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(formData)
            }
        );


        const data = await response.json();


        alert(data.message);


    }
    catch(error){

        console.log(error);
        alert("Server error");

    }

};



return(

<div className="auth-page">


<div className="auth-card">


<h2>User Registration</h2>


<form onSubmit={handleSubmit}>


<input
type="text"
name="name"
placeholder="Full Name"
value={formData.name}
onChange={handleChange}
/>



<input
type="email"
name="email"
placeholder="Email"
value={formData.email}
onChange={handleChange}
/>



<input
type="text"
name="mobile"
placeholder="Mobile Number"
value={formData.mobile}
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
Register
</button>


</form>


<p>
Already registered?
<Link to="/user-login">
 Login
</Link>
</p>


</div>


</div>


)

}


export default UserRegister;