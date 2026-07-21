
import { NavLink, useNavigate } from "react-router-dom";
import "./UserSidebar.css";

function UserSidebar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("user");

    navigate("/user-login");

  };

  return (

    <div className="user-sidebar">

      {/* Logo */}

      <div className="sidebar-top">

        <div className="logo-box">

          <i className="bi bi-mortarboard-fill"></i>

        </div>

        <div>

          <h2>LNM University</h2>

          <p>Student Portal</p>

        </div>

      </div>

      {/* MAIN */}

      <div className="menu-section">

        <span className="menu-title">MAIN</span>

        <NavLink
          to="/user-dashboard"
          className="menu-item"
        >
          <i className="bi bi-speedometer2"></i>
          Dashboard
        </NavLink>

      </div>

      {/* COMPLAINTS */}

      <div className="menu-section">

        <span className="menu-title">COMPLAINTS</span>

        <NavLink
          to="/submit-complaint"
          className="menu-item"
        >
          <i className="bi bi-plus-circle"></i>
          Add Complaint
        </NavLink>

        <NavLink
          to="/my-complaints"
          className="menu-item"
        >
          <i className="bi bi-card-list"></i>
          My Complaints
        </NavLink>

      </div>

      {/* COMMUNITY */}

      <div className="menu-section">

        <span className="menu-title">COMMUNITY</span>

        <NavLink
          to="/discussion-forum"
          className="menu-item"
        >
          <i className="bi bi-chat-dots"></i>
          Discussion Forum
        </NavLink>

      </div>

      {/* ACCOUNT */}

      <div className="menu-section">

        <span className="menu-title">ACCOUNT</span>

        <NavLink
          to="/update-profile"
          className="menu-item"
        >
          <i className="bi bi-person"></i>
          Update Profile
        </NavLink>

        <NavLink
          to="/change-password"
          className="menu-item"
        >
          <i className="bi bi-lock"></i>
          Change Password
        </NavLink>

      </div>

      {/* Logout */}

      <div className="sidebar-bottom">

        <button
          className="logout-btn"
          onClick={logout}
        >
          <i className="bi bi-box-arrow-right"></i>
          Logout
        </button>

      </div>

    </div>

  );

}

export default UserSidebar;