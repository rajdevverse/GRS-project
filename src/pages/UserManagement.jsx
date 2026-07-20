import { useSearchParams } from "react-router-dom";
import DataTable from "../components/DataTable";
import "../styles/user-management.css";


function UserManagement(){

const [searchParams] = useSearchParams();


const isBlocked = searchParams.get("status") === "blocked";



const users = [

{
name:"Rahul Sharma",
email:"rahul@gmail.com",
mobile:"9876543210",
college:"LNMU",
session:"2025-26",
status:"Active"
},


{
name:"Amit Kumar",
email:"amit@gmail.com",
mobile:"9876543211",
college:"LNMU",
session:"2025-26",
status:"Blocked"
}


];



const filteredUsers = isBlocked

?
users.filter(
(user)=>user.status==="Blocked"
)

:

users;



return(

<div>


<DataTable

title={
isBlocked
?
"Blocked Users"
:
"User Management"
}



columns={[
"S No.",
"Name",
"Email",
"Mobile",
"College",
"Session",
"Status",
"Actions"
]}



rows={

filteredUsers.map((user,index)=>[


index+1,

user.name,

user.email,

user.mobile,

user.college,

user.session,

user.status,


<div className="user-actions">


<button className="edit-btn">

<i className="bi bi-pencil"></i>

Edit

</button>



<button className="block-btn">

<i className="bi bi-person-x"></i>

Block

</button>



<button className="delete-btn">

<i className="bi bi-trash"></i>

Delete

</button>


</div>


])


}


/>


</div>

)

}


export default UserManagement;