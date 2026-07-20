import UniversityLogo from "../components/UniversityLogo";


function AdminLogin(){

return(

<div className="container-fluid">


<div className="row min-vh-100">



{/* LEFT SIDE */}

<div className="col-md-6 admin-bg text-white d-flex align-items-center">


<div className="p-5">


<div className="admin-icon-box mb-4">

<i className="bi bi-shield-lock"></i>

</div>



<h1>
Administrator Portal
</h1>


<h3>
Grievance Management System
</h3>


<p className="mt-3">

Authorized administrators can manage complaints,
review grievances, and update resolution status.

</p>




<div className="mt-4">


<div className="d-flex align-items-center mb-3">


<div className="feature-icon-badge me-3">

<i className="bi bi-speedometer2"></i>

</div>


<span>
Manage complaints dashboard
</span>


</div>




<div className="d-flex align-items-center mb-3">


<div className="feature-icon-badge me-3">

<i className="bi bi-people"></i>

</div>


<span>
Manage student grievances
</span>


</div>




<div className="d-flex align-items-center">


<div className="feature-icon-badge me-3">

<i className="bi bi-check-circle"></i>

</div>


<span>
Resolve complaints efficiently
</span>


</div>



</div>



</div>


</div>






{/* RIGHT SIDE */}


<div className="col-md-6 d-flex align-items-center justify-content-center">


<div className="auth-card">


<UniversityLogo />



<div className="admin-icon-box mx-auto mt-4 mb-3">

<i className="bi bi-shield-lock"></i>

</div>



<h2 className="text-center">

Admin Login

</h2>




<span className="badge-restricted d-block text-center my-3">

RESTRICTED ACCESS

</span>





<input

type="email"

placeholder="Admin Email"

/>




<input

type="password"

placeholder="Password"

/>




<button className="btn-admin-gradient w-100 py-2">

Login

</button>




<p className="text-center mt-3 text-muted">

Only authorized administrators can access this portal.

</p>



</div>


</div>



</div>


</div>


)

}


export default AdminLogin;