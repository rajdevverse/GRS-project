import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/user-management.css";


function UserManagement(){


const [users,setUsers] = useState([]);

const [search,setSearch] = useState("");

const location = useLocation();





useEffect(()=>{

fetchUsers();

},[location.pathname]);








// GET USERS

const fetchUsers = async()=>{


try{


const res = await axios.get(

"http://localhost:5000/api/admin/users"

);



let userData = res.data;



// Show only blocked users

if(
location.pathname === "/admin/users/blocked"
){


userData = userData.filter(

(user)=>

user.status === "Blocked"

);


}



setUsers(userData);



}
catch(error){


console.log(

"Fetch Users Error:",

error

);


}


};









// DELETE USER

const deleteUser = async(id)=>{


const confirmDelete = window.confirm(

"Are you sure you want to delete this user?"

);



if(!confirmDelete)
return;



try{


await axios.delete(

`http://localhost:5000/api/admin/users/${id}`

);



alert(
"User Deleted Successfully"
);



fetchUsers();



}
catch(error){


console.log(

"Delete User Error:",

error

);


}


};









// BLOCK / UNBLOCK USER

const blockUser = async(id)=>{


try{


await axios.put(

`http://localhost:5000/api/admin/users/block/${id}`

);



fetchUsers();



}
catch(error){


console.log(

"Block User Error:",

error

);


}


};









// SEARCH FILTER

const filteredUsers = users.filter((user)=>{


return (

user.name
?.toLowerCase()
.includes(
search.toLowerCase()
)

||

user.email
?.toLowerCase()
.includes(
search.toLowerCase()
)

);


});









return(


<div className="user-management-page">


<div className="user-card">





<div className="user-header">


<h2>

{

location.pathname === "/admin/users/blocked"

?

"Blocked Users"

:

"User Management"

}

</h2>





<input

type="text"

placeholder="Search users..."

value={search}

onChange={(e)=>

setSearch(e.target.value)

}

/>



</div>








<table>


<thead>


<tr>


<th>
S.No
</th>


<th>
Name
</th>


<th>
Email
</th>


<th>
Mobile
</th>


<th>
Status
</th>


<th>
Action
</th>


</tr>


</thead>







<tbody>


{

filteredUsers.length === 0 ?



<tr>


<td

colSpan="6"

className="text-center"

>

No Users Found

</td>


</tr>



:


filteredUsers.map((user,index)=>(



<tr key={user._id}>


<td>

{index+1}

</td>





<td>

{user.name}

</td>





<td>

{user.email}

</td>





<td>

{user.mobile || "N/A"}

</td>





<td>


<span

className={

user.status === "Blocked"

?

"status blocked"

:

"status active"

}

>

{

user.status || "Active"

}


</span>


</td>






<td>




<button

className="edit-btn"

onClick={()=>blockUser(user._id)}

>


{

user.status === "Blocked"

?

"Unblock"

:

"Block"

}


</button>








<button

className="delete-btn"

onClick={()=>deleteUser(user._id)}

>

Delete

</button>





</td>





</tr>


))


}



</tbody>



</table>






</div>


</div>


);


}


export default UserManagement;