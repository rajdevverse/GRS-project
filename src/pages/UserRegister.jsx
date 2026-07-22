import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UniversityLogo from "../components/UniversityLogo";
import "../styles/Auth.css";


function UserRegister() {


    const navigate = useNavigate();


    const [user,setUser] = useState({

        name:"",
        fatherName:"",
        email:"",
        mobile:"",
        college:"",
        course:"",
        department:"",
        semester:"",
        session:"",
        enrollment:"",
        dob:"",
        gender:"",
        address:"",
        password:"",
        confirmPassword:""

    });




    const handleChange=(e)=>{


        setUser({

            ...user,

            [e.target.name]:e.target.value

        });


    };





    const handleRegister=async(e)=>{


        e.preventDefault();



        if(user.password !== user.confirmPassword){


            alert("Passwords do not match");

            return;

        }



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


                alert(data.message || "Registration failed");


            }


        }


        catch(error){


            console.log(error);


            alert("Server Error");


        }


    };






    return (

    <div className="auth-page">


        <div className="register-card">


            <UniversityLogo size={90}/>



            <h2>
                Student Registration
            </h2>



            <p className="auth-subtitle">

                Create your grievance portal account

            </p>





            <form
                className="register-form"
                onSubmit={handleRegister}
            >



            <h3 className="section-title">
                Personal Information
            </h3>



            <div className="form-grid">



                <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={user.name}
                onChange={handleChange}
                required
                />



                <input
                type="text"
                name="fatherName"
                placeholder="Father's Name"
                value={user.fatherName}
                onChange={handleChange}
                />



                <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={user.email}
                onChange={handleChange}
                required
                />



                <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={user.mobile}
                onChange={handleChange}
                />



                <input
                type="date"
                name="dob"
                value={user.dob}
                onChange={handleChange}
                />



                <select
                name="gender"
                value={user.gender}
                onChange={handleChange}
                >

                <option value="">
                    Select Gender
                </option>

                <option>
                    Male
                </option>

                <option>
                    Female
                </option>

                <option>
                    Other
                </option>


                </select>



            </div>







            <h3 className="section-title">
                Academic Information
            </h3>





            <div className="form-grid">





            <select
            name="college"
            value={user.college}
            onChange={handleChange}
            >

            <option value="">
                Select College
            </option>

            <option>
                IIT Nagpur
            </option>

            <option>
                IIT Kashmir
            </option>

            <option>
                NIT Bhopal
            </option>

            <option>
                BITS Pilani
            </option>


            </select>







            <select
            name="course"
            value={user.course}
            onChange={handleChange}
            >

            <option value="">
                Select Course
            </option>


            <option>
                B.Tech
            </option>


            <option>
                B.Sc
            </option>


            <option>
                BA
            </option>


            <option>
                B.Com
            </option>


            <option>
                BCA
            </option>


            </select>







            <input
            type="text"
            name="department"
            placeholder="Department"
            value={user.department}
            onChange={handleChange}
            />







            <select
            name="semester"
            value={user.semester}
            onChange={handleChange}
            >

            <option value="">
                Select Semester
            </option>

            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>


            </select>







            <select
            name="session"
            value={user.session}
            onChange={handleChange}
            >

            <option value="">
                Select Session
            </option>


            <option>
                2022-2023
            </option>


            <option>
                2023-2024
            </option>


            <option>
                2024-2025
            </option>


            <option>
                2025-2026
            </option>


            </select>







            <input
            type="text"
            name="enrollment"
            placeholder="Enrollment Number"
            value={user.enrollment}
            onChange={handleChange}
            />



            </div>









            <h3 className="section-title">
                Address
            </h3>



            <textarea

            name="address"

            rows="4"

            placeholder="Enter your address"

            value={user.address}

            onChange={handleChange}

            />









            <h3 className="section-title">
                Account Security
            </h3>





            <div className="form-grid">



            <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={user.password}
            onChange={handleChange}
            required
            />




            <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={handleChange}
            required
            />



            </div>







            <button
            className="register-btn"
            type="submit"
            >

                Create Account

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