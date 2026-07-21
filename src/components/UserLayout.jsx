import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import UserNavbar from "./UserNavbar";
import "./UserLayout.css";

function UserLayout() {

  return (

    <div className="user-layout">

      <UserSidebar />

      <div className="user-main">

        <UserNavbar />

        <div className="page-content">

          <Outlet />

        </div>

      </div>

    </div>

  );

}

export default UserLayout;