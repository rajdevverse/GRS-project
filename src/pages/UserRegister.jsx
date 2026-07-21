import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UniversityLogo from "../components/UniversityLogo";
import "../styles/Auth.css";


function UserRegister(){

    const navigate = useNavigate();


    const [user,setUser] = useState({

        name:"",
        email:"",
        password:""

    });



    const handleChange=(e)=>{

        setUser({

            ...user,

            [e.target.name]:e.target.value

        });

    };





    const handleRegister=async(e)=>{

        e.preventDefault();


        try{

            const response = await fetch(
                "http://localhost:5000/api/users/register",
                {
                    method:"POST",

                    headers:{
                        "Content-Type":"application/json"
                    },

                    body:JSON.stringify(user)

                }
            );


            const data = await response.json();


            if(response.ok){

                alert("Registration Successful");

                navigate("/user-login");

            }
            else{

                alert(
                    data.message || "Registration failed"
                );

            }


        }
        catch(error){

            console.log("Register Error:", error);

            alert("Server error");

        }


    };





    return(

        <div className="auth-page">


            <div className="auth-card">


                <UniversityLogo size={100}/>


                <h2>
                    Student Registration
                </h2>


                <p className="auth-subtitle">
                    Create your grievance portal account
                </p>




                <form onSubmit={handleRegister}>


                    <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={user.name}
                    onChange={handleChange}
                    required
                    />



                    <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={handleChange}
                    required
                    />



                    <input
                    type="password"
                    name="password"
                    placeholder="Create password"
                    value={user.password}
                    onChange={handleChange}
                    required
                    />



                    <button type="submit">
                        Register Account
                    </button>



                </form>





                <p className="auth-link">

                    Already registered?

                    <span
                    onClick={()=>navigate("/user-login")}
                    >

                    Login here

                    </span>

                </p>



            </div>


        </div>

    );

}


export default UserRegister;