import { useEffect, useState } from "react";
// import "../styles/complaints.css";


function MyComplaints(){

    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");



    const user = JSON.parse(
        localStorage.getItem("user")
    );




    const fetchComplaints = async()=>{


        try{


            setLoading(true);
            setError("");



            if(!user || !user.id){

                setError(
                    "User session not found. Please login again."
                );

                return;

            }





            const response = await fetch(
                `http://localhost:5000/api/complaints/${user.id}`
            );



            const data = await response.json();




            if(response.ok){

                setComplaints(data);

            }
            else{

                setError(
                    data.message || "Unable to fetch complaints"
                );

            }




        }
        catch(error){


            console.log(
                "Complaint Fetch Error:",
                error
            );


            setError(
                "Server connection failed."
            );


        }
        finally{


            setLoading(false);


        }


    };





    useEffect(()=>{


        fetchComplaints();


    },[]);







    const getStatusClass=(status)=>{


        if(status==="Resolved")
            return "resolved";


        if(status==="In Progress")
            return "progress";


        return "pending";


    };






    return(


        <div className="complaint-page">


            <div className="my-complaints-container">



                <div className="complaint-header">


                    <h2>
                        My Complaints
                    </h2>



                    <button
                    className="refresh-btn"
                    onClick={fetchComplaints}
                    >
                        Refresh
                    </button>


                </div>






                {
                    loading &&

                    <div className="empty-box">

                        Loading complaints...

                    </div>
                }







                {
                    error &&

                    <div className="empty-box error-box">

                        {error}

                    </div>

                }








                {
                    !loading &&
                    !error &&
                    complaints.length===0 &&


                    <div className="empty-box">

                        No complaints submitted yet.

                    </div>


                }








                {
                    complaints.map((complaint)=>(



                        <div
                        className="complaint-card"
                        key={complaint._id}
                        >



                            <h3>
                                {complaint.title}
                            </h3>





                            <p>
                                <b>
                                    Complaint ID:
                                </b>{" "}

                                {complaint.complaintId}

                            </p>





                            <p>
                                <b>
                                    Category:
                                </b>{" "}

                                {complaint.category}

                            </p>





                            <p>
                                <b>
                                    Description:
                                </b>{" "}

                                {complaint.description}

                            </p>





                            <p>

                                <b>
                                    Status:
                                </b>{" "}


                                <span
                                className={
                                    `status-badge ${
                                        getStatusClass(
                                            complaint.status
                                        )
                                    }`
                                }
                                >

                                    {complaint.status || "Pending"}

                                </span>


                            </p>






                            <p>

                                <b>
                                    Submitted Date:
                                </b>{" "}


                                {
                                    complaint.createdAt
                                    ?
                                    new Date(
                                        complaint.createdAt
                                    ).toLocaleDateString()
                                    :
                                    "N/A"
                                }


                            </p>





                        </div>



                    ))

                }





            </div>



        </div>


    );


}



export default MyComplaints;