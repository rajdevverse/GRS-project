import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/complaints.css";


function SubmitComplaint(){

    const navigate = useNavigate();


    const user = JSON.parse(
        localStorage.getItem("user")
    );



    const [complaint,setComplaint] = useState({

        title:"",
        category:"",
        description:""

    });



    const [loading,setLoading] = useState(false);





    const handleChange = (e)=>{

        setComplaint({

            ...complaint,

            [e.target.name]: e.target.value

        });

    };







    const submitComplaint = async(e)=>{


        e.preventDefault();



        if(!user || !user.id){


            alert(
                "Session expired. Please login again."
            );


            navigate("/user-login");

            return;

        }





        const complaintData={

            userId:user.id,

            title:complaint.title,

            category:complaint.category,

            description:complaint.description

        };





        try{


            setLoading(true);




            const response = await fetch(

                "http://localhost:5000/api/complaints",

                {

                    method:"POST",


                    headers:{

                        "Content-Type":"application/json"

                    },


                    body:JSON.stringify(complaintData)


                }

            );





            const data = await response.json();





            if(response.ok){


                alert(
                    "Complaint submitted successfully"
                );



                setComplaint({

                    title:"",
                    category:"",
                    description:""

                });



                navigate("/user-dashboard");



            }
            else{


                alert(

                    data.message ||
                    "Unable to submit complaint"

                );


            }



        }


        catch(error){


            console.log(
                "Submit Complaint Error:",
                error
            );


            alert(
                "Server error. Please try again later."
            );


        }


        finally{


            setLoading(false);


        }



    };








    return(


        <div className="complaint-page">



            <div className="complaint-form-card">



                <h2>
                    Submit Complaint
                </h2>




                <p className="form-subtitle">

                    Register your grievance and send it to university administration.

                </p>







                <form onSubmit={submitComplaint}>



                    <label>
                        Complaint Title
                    </label>



                    <input

                    type="text"

                    name="title"

                    placeholder="Enter complaint title"

                    value={complaint.title}

                    onChange={handleChange}

                    required

                    />








                    <label>
                        Category
                    </label>




                    <select

                    name="category"

                    value={complaint.category}

                    onChange={handleChange}

                    required

                    >


                        <option value="">
                            Select Category
                        </option>


                        <option value="Academic">
                            Academic
                        </option>


                        <option value="Hostel">
                            Hostel
                        </option>


                        <option value="Fees">
                            Fees
                        </option>


                        <option value="Other">
                            Other
                        </option>



                    </select>









                    <label>
                        Description
                    </label>





                    <textarea

                    name="description"

                    placeholder="Describe your complaint"

                    value={complaint.description}

                    onChange={handleChange}

                    rows="6"

                    required

                    />










                    <button

                    className="submit-btn"

                    type="submit"

                    disabled={loading}

                    >


                        {

                            loading

                            ?

                            "Submitting..."

                            :

                            "Submit Complaint"

                        }



                    </button>





                </form>





            </div>



        </div>


    );


}



export default SubmitComplaint;