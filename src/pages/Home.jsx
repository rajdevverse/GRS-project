import { Link } from "react-router-dom";
import UniversityLogo from "../components/UniversityLogo";
import PortalFooter from "../components/PortalFooter";


function Home(){

return(

<div>

<UniversityLogo />


<div className="home-container">


<h1>
Grievance Redressal System
</h1>


<p>
Lalit Narayan Mithila University
</p>



<div className="portal-cards">



{/* USER LOGIN */}

<div className="portal-card">

<div className="icon-badge icon-badge-navy mx-auto mb-3">

<i className="bi bi-person-circle"></i>

</div>


<h2>
User Login
</h2>


<p>
Already registered users can login and track complaints.
</p>


<Link to="/user-login">

<button>
Login
</button>

</Link>


</div>





{/* USER REGISTER */}

<div className="portal-card">


<div className="icon-badge icon-badge-gray mx-auto mb-3">

<i className="bi bi-person-plus"></i>

</div>



<h2>
User Registration
</h2>


<p>
New users can create an account and submit complaints.
</p>


<Link to="/user-register">

<button>
Register
</button>

</Link>


</div>





{/* ADMIN LOGIN */}

<div className="portal-card">


<div className="icon-badge icon-badge-navy mx-auto mb-3">

<i className="bi bi-shield-lock"></i>

</div>


<h2>
Admin Login
</h2>


<p>
Authorized administrators can manage grievances.
</p>


<Link to="/admin-login">

<button>
Login
</button>

</Link>


</div>



</div>


</div>


<PortalFooter />


</div>

)

}


export default Home;