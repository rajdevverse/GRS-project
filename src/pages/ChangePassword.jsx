import "../styles/change-password.css";


function ChangePassword(){


return(

<div className="change-password-page">


<div className="password-card">


<h2>
Change Password
</h2>




<div className="password-form">


<label>
Old Password
</label>

<input
type="password"
placeholder="Enter old password"
/>





<label>
New Password
</label>

<input
type="password"
placeholder="Enter new password"
/>





<label>
Confirm New Password
</label>

<input
type="password"
placeholder="Confirm new password"
/>






<button>

Change Password

</button>



</div>



</div>



</div>

)

}


export default ChangePassword;