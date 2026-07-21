import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserNavbar.css";

function UserNavbar() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [time, setTime] = useState("");

  useEffect(() => {

    const updateClock = () => {

      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })
      );

    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);

  }, []);

  const logout = () => {

    localStorage.removeItem("user");

    navigate("/user-login");

  };

  return (

    <div className="user-navbar">

      <div className="navbar-left">

        <button className="menu-btn">
          <i className="bi bi-list"></i>
        </button>

        <h3>
          Good Afternoon, {user?.name || "Student"} 👋
        </h3>

      </div>

      <div className="navbar-right">

        <span className="clock">
          {time}
        </span>

        <div className="profile-circle">
          <i className="bi bi-person-fill"></i>
        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>

  );

}

export default UserNavbar;