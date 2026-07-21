import { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";


function Profile(){

    const [user,setUser] = useState(null);

    const [editMode,setEditMode] = useState(false);

    const [loading,setLoading] = useState(true);



    useEffect(()=>{

        const loadUser = ()=>{

            try{

                const savedUser = localStorage.getItem("user");


                if(savedUser){

                    const loggedUser = JSON.parse(savedUser);

                    setUser(loggedUser);

                }


            }
            catch(error){

                console.log(
                    "User Loading Error:",
                    error
                );

            }
            finally{

                setLoading(false);

            }

        };


        loadUser();


    },[]);







    const handleChange=(e)=>{

        setUser({

            ...user,

            [e.target.name]:e.target.value

        });

    };







    const updateProfile = async()=>{


        try{


            if(!user){

                alert("User not found");

                return;

            }



            const userId = user._id || user.id;



            if(!userId){

                alert("User ID missing");

                return;

            }





            const response = await axios.put(

                `http://localhost:5000/api/users/${userId}`,

                {

                    name:user.name,

                    email:user.email,

                    mobile:user.mobile,

                    college:user.college

                }

            );





            const updatedUser =
            response.data.user || response.data;





            localStorage.setItem(

                "user",

                JSON.stringify(updatedUser)

            );





            setUser(updatedUser);



            alert(
                "Profile Updated Successfully"
            );



            setEditMode(false);



        }

        catch(error){


            console.log(
                "Update Profile Error:",
                error.response?.data || error.message
            );


            alert(

                error.response?.data?.message ||

                "Profile update failed"

            );


        }


    };









    if(loading){

        return(

            <div className="profile-page">

                <h2>
                    Loading Profile...
                </h2>

            </div>

        );

    }







    if(!user){

        return(

            <div className="profile-page">

                <h2>
                    User not logged in
                </h2>


                <p>
                    Please login again.
                </p>

            </div>

        );

    }









    return(


        <div className="profile-page">



            <div className="profile-card">





                <div className="profile-header">


                    <div className="profile-icon">

                        <i className="bi bi-person-circle"></i>

                    </div>



                    <h2>
                        Student Profile
                    </h2>


                    <p>
                        Lalit Narayan Mithila University
                    </p>


                </div>









                <div className="profile-details">






                    <div className="profile-item">

                        <label>
                            Full Name
                        </label>



                        {
                        editMode ?


                        <input

                        type="text"

                        name="name"

                        value={user.name || ""}

                        onChange={handleChange}

                        />


                        :


                        <p>
                            {user.name || "N/A"}
                        </p>

                        }



                    </div>









                    <div className="profile-item">


                        <label>
                            Email Address
                        </label>




                        {

                        editMode ?


                        <input

                        type="email"

                        name="email"

                        value={user.email || ""}

                        onChange={handleChange}

                        />

                        :


                        <p>
                            {user.email || "N/A"}
                        </p>


                        }



                    </div>









                    <div className="profile-item">


                        <label>
                            Mobile Number
                        </label>




                        {

                        editMode ?


                        <input

                        type="text"

                        name="mobile"

                        value={user.mobile || ""}

                        onChange={handleChange}

                        />

                        :


                        <p>
                            {user.mobile || "N/A"}
                        </p>


                        }



                    </div>









                    <div className="profile-item">


                        <label>
                            College
                        </label>




                        {

                        editMode ?


                        <input

                        type="text"

                        name="college"

                        value={user.college || ""}

                        onChange={handleChange}

                        />


                        :


                        <p>
                            {user.college || "N/A"}
                        </p>


                        }



                    </div>





                </div>









                {

                editMode ?



                <button

                className="edit-profile-btn"

                onClick={updateProfile}

                >

                    <i className="bi bi-check-circle"></i>

                    Save Changes

                </button>





                :





                <button

                className="edit-profile-btn"

                onClick={()=>setEditMode(true)}

                >

                    <i className="bi bi-pencil"></i>

                    Update Profile

                </button>



                }





            </div>




        </div>


    );


}


export default Profile;