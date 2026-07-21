import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import UniversityLogo from "../components/UniversityLogo";


function Home(){

    const navigate = useNavigate();


    return(

        <div className="home-page">


            {/* HEADER */}

            <header className="portal-header">


                <UniversityLogo/>


                <h2>
                    Lalit Narayan Mithila University
                </h2>


                <p>
                    Darbhanga, Bihar
                </p>



            </header>





            {/* TITLE */}


            <section className="hero">


                <h1>
                    Grievance Redressal Portal
                </h1>


                <p>
                    A digital platform for students to submit complaints,
                    track status and get transparent resolutions.
                </p>


            </section>







            {/* LOGIN CARDS */}


            <section className="portal-cards">



                <div 
                className="portal-card admin"
                onClick={()=>navigate("/admin-login")}
                >


                    <div className="card-icon">
                        🔐
                    </div>


                    <h3>
                        Admin Login
                    </h3>


                    <p>
                        Manage complaints, users and grievance resolutions.
                    </p>


                    <button>
                        Login →
                    </button>


                </div>








                <div 
                className="portal-card register"
                onClick={()=>navigate("/user-register")}
                >


                    <div className="card-icon">
                        📝
                    </div>


                    <h3>
                        User Registration
                    </h3>


                    <p>
                        Register yourself and submit grievances easily.
                    </p>


                    <button>
                        Register →
                    </button>


                </div>








                <div 
                className="portal-card user"
                onClick={()=>navigate("/user-login")}
                >


                    <div className="card-icon">
                        👨‍🎓
                    </div>


                    <h3>
                        User Login
                    </h3>


                    <p>
                        Login to submit and track your complaints.
                    </p>


                    <button>
                        Login →
                    </button>


                </div>



            </section>









            {/* FOOTER */}


            <footer className="portal-footer">


                <p>
                    All Rights Reserved © 2025-2026
                </p>


                <p>
                    Designed and Developed by Kirtiraj Singh
                </p>



            </footer>






        </div>


    );

}


export default Home;