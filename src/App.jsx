import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import AdminLogin from "./pages/AdminLogin";


import UserDashboard from "./pages/UserDashboard";
import SubmitComplaint from "./pages/SubmitComplaint";
import MyComplaints from "./pages/MyComplaint";


import AdminComplaints from "./pages/AdminComplaints";
import AdminDashboard from "./pages/AdminDashboard";


import UserLayout from "./components/UserLayout";
import AdminLayout from "./components/AdminLayout";

import CollegeManagement from "./pages/CollegeManagement";





function App(){


return(


<Routes>



{/* ================= PUBLIC ROUTES ================= */}



<Route

path="/"

element={<Home />}

/>



<Route

path="/user-login"

element={<UserLogin />}

/>



<Route

path="/user-register"

element={<UserRegister />}

/>



<Route

path="/admin-login"

element={<AdminLogin />}

/>








{/* ================= USER PANEL ================= */}



<Route element={<UserLayout/>}>


<Route

path="/user-dashboard"

element={<UserDashboard />}

/>



<Route

path="/submit-complaint"

element={<SubmitComplaint />}

/>



<Route

path="/my-complaints"

element={<MyComplaints />}

/>



</Route>









{/* ================= ADMIN PANEL ================= */}



<Route element={<AdminLayout/>}>


<Route

path="/admin-dashboard"

element={<AdminDashboard />}

/>



<Route

path="/admin-complaints"

element={<AdminComplaints />}

/>



</Route>

<Route
path="/college-management"
element={<CollegeManagement />}
/>




</Routes>


)

}


export default App;