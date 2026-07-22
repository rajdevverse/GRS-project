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



    const handleChange = (e)=>{

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


            console.log(
                "LOGIN RESPONSE:",
                data
            );



            if(!response.ok){

                alert(
                    data.message || "Login failed"
                );

                return;

            }




            if(!data.user){

                alert(
                    "User data not received from server"
                );

                console.log(
                    "Missing user object:",
                    data
                );

                return;

            }




            // Remove old session

            localStorage.removeItem("user");

            localStorage.removeItem("userToken");





            const userData = {


                _id:

                data.user._id ||

                data.user.id,



                name:

                data.user.name || "",



                email:

                data.user.email || "",



                mobile:

                data.user.mobile || "",



                college:

                data.user.college || "",



                course:

                data.user.course || "",



                department:

                data.user.department || "",



                semester:

                data.user.semester || "",



                enrollment:

                data.user.enrollment || "",



                role:

                data.user.role || "student"


            };





            localStorage.setItem(

                "user",

                JSON.stringify(userData)

            );





            localStorage.setItem(

                "userToken",

                data.token

            );





            console.log(

                "FINAL SAVED USER:",

                localStorage.getItem("user")

            );



            console.log(

                "FINAL SAVED TOKEN:",

                localStorage.getItem("userToken")

            );





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





    return (

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

                            type={showPassword ? "text" : "password"}

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