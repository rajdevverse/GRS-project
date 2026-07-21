import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserLogin.css";


function UserLogin(){

    const navigate = useNavigate();


    const [formData,setFormData] = useState({

        email:"",
        password:""

    });


    const [loading,setLoading] = useState(false);

    const [showPassword,setShowPassword] = useState(false);




    const handleChange=(e)=>{

        setFormData({

            ...formData,
            [e.target.name]:e.target.value

        });

    };






    const handleSubmit = async(e)=>{

        e.preventDefault();


        try{


            setLoading(true);



            const response = await fetch(

                "http://localhost:5000/api/users/login",

                {

                    method:"POST",

                    headers:{

                        "Content-Type":"application/json"

                    },

                    body:JSON.stringify(formData)

                }

            );



            const data = await response.json();



            if(!response.ok){

                alert(
                    data.message || "Login failed"
                );

                return;

            }




            // SAVE USER DATA

            const loggedUser = data.user || data;



            localStorage.setItem(

                "user",

                JSON.stringify(loggedUser)

            );



            // SAVE TOKEN IF AVAILABLE

            if(data.token){

                localStorage.setItem(
                    "token",
                    data.token
                );

            }



            alert(
                "Login Successful"
            );


            navigate("/user-dashboard");



        }


        catch(error){


            console.log(
                "Login Error:",
                error
            );


            alert(
                "Server not connected"
            );


        }


        finally{

            setLoading(false);

        }


    };






return(


<div className="login-page">



<div className="login-card">



<div className="login-logo">

🎓

</div>




<h1>

LNMU

</h1>



<h2>

Student Login

</h2>



<p className="login-subtitle">

Grievance Redressal Portal

</p>







<form onSubmit={handleSubmit}>


<div className="input-box">

<i className="bi bi-envelope"></i>


<input

type="email"

name="email"

placeholder="Enter email"

value={formData.email}

onChange={handleChange}

required

/>

</div>








<div className="input-box">

<i className="bi bi-lock"></i>


<input

type={
showPassword
?
"text"
:
"password"
}

name="password"

placeholder="Enter password"

value={formData.password}

onChange={handleChange}

required

/>



<i

className={
showPassword
?
"bi bi-eye-slash password-icon"
:
"bi bi-eye password-icon"
}

onClick={()=>setShowPassword(!showPassword)}

></i>



</div>







<button

className="login-btn"

type="submit"

disabled={loading}

>


{

loading

?

"Logging in..."

:

"Login"

}



</button>



</form>







<p className="register-text">


Don't have an account?


<Link to="/user-register">

 Register

</Link>


</p>



</div>


</div>


);


}


export default UserLogin;