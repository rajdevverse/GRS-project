import { Routes, Route } from "react-router-dom";


// ================= PUBLIC =================

import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import AdminLogin from "./pages/AdminLogin";


// ================= STUDENT =================

import UserDashboard from "./pages/UserDashboard";
import SubmitComplaint from "./pages/SubmitComplaint";
import MyComplaints from "./pages/MyComplaint";

import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import DiscussionForum from "./pages/DiscussionForum";


// ================= ADMIN =================

import AdminDashboard from "./pages/AdminDashboard";
import AdminComplaints from "./pages/AdminComplaints";
import AdminComplaintDetails from "./pages/AdminComplaintDetails";

import CollegeManagement from "./pages/CollegeManagement";
import SessionManagement from "./pages/SessionManagement";
import ComplaintTypeManagement from "./pages/ComplaintTypeManagement";
import UserManagement from "./pages/UserManagement";


// ================= LAYOUT =================

import UserLayout from "./components/UserLayout";
import AdminLayout from "./components/AdminLayout";



function App(){

return(

<Routes>


{/* ================= PUBLIC ROUTES ================= */}

<Route path="/" element={<Home/>}/>

<Route path="/user-login" element={<UserLogin/>}/>

<Route path="/user-register" element={<UserRegister/>}/>

<Route path="/admin-login" element={<AdminLogin/>}/>





{/* ================= USER PORTAL ================= */}


<Route element={<UserLayout/>}>


<Route 
path="/user-dashboard"
element={<UserDashboard/>}
/>


<Route
path="/submit-complaint"
element={<SubmitComplaint/>}
/>


<Route
path="/my-complaints"
element={<MyComplaints/>}
/>


<Route
path="/profile"
element={<Profile/>}
/>


<Route
path="/update-profile"
element={<Profile/>}
/>


<Route
path="/change-password"
element={<ChangePassword/>}
/>


<Route
path="/discussion-forum"
element={<DiscussionForum/>}
/>


</Route>







{/* ================= ADMIN PORTAL ================= */}



<Route element={<AdminLayout/>}>


<Route
path="/admin-dashboard"
element={<AdminDashboard/>}
/>



<Route
path="/admin/college"
element={<CollegeManagement/>}
/>



<Route
path="/admin/session"
element={<SessionManagement/>}
/>



<Route
path="/admin/complaint-types"
element={<ComplaintTypeManagement/>}
/>



<Route
path="/admin/complaints"
element={<AdminComplaints/>}
/>



<Route
path="/admin/complaints/pending"
element={<AdminComplaints/>}
/>



<Route
path="/admin/complaints/not-processed"
element={<AdminComplaints/>}
/>



<Route
path="/admin/complaints/closed"
element={<AdminComplaints/>}
/>



<Route
path="/admin/complaint/:id"
element={<AdminComplaintDetails/>}
/>



<Route
path="/admin/users"
element={<UserManagement/>}
/>



<Route
path="/admin/users/blocked"
element={<UserManagement/>}
/>



<Route
path="/admin/discussion"
element={<DiscussionForum/>}
/>



<Route
path="/admin/change-password"
element={<ChangePassword/>}
/>



</Route>


</Routes>

);

}


export default App;