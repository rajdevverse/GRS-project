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
import CollegeManagement from "./pages/CollegeManagement";
import SessionManagement from "./pages/SessionManagement";
import ComplaintTypeManagement from "./pages/ComplaintTypeManagement";
import UserManagement from "./pages/UserManagement";

import DiscussionForum from "./pages/DiscussionForum";
import ChangePassword from "./pages/ChangePassword";

import UserLayout from "./components/UserLayout";
import AdminLayout from "./components/AdminLayout";


function App() {

return (

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


<Route element={<UserLayout />}>


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


<Route element={<AdminLayout />}>



{/* Dashboard */}

<Route
path="/admin-dashboard"
element={<AdminDashboard />}
/>






{/* College Management */}

<Route
path="/admin/college"
element={<CollegeManagement />}
/>







{/* Session Management */}

<Route
path="/admin/session"
element={<SessionManagement />}
/>







{/* Complaint Type Management */}

<Route
path="/admin/complaint-types"
element={<ComplaintTypeManagement />}
/>









{/* Complaints */}


<Route
path="/admin-complaints"
element={<AdminComplaints />}
/>


<Route
path="/admin/complaints"
element={<AdminComplaints />}
/>


<Route
path="/admin/complaints/pending"
element={<AdminComplaints />}
/>


<Route
path="/admin/complaints/not-processed"
element={<AdminComplaints />}
/>


<Route
path="/admin/complaints/closed"
element={<AdminComplaints />}
/>









{/* Users */}


<Route
path="/admin/users"
element={<UserManagement />}
/>


<Route
path="/admin/users/blocked"
element={<UserManagement />}
/>









{/* Discussion Forum */}

<Route
path="/admin/discussion"
element={<DiscussionForum />}
/>









{/* Change Password */}

<Route
path="/admin/change-password"
element={<ChangePassword />}
/>





</Route>





</Routes>

)

}


export default App;