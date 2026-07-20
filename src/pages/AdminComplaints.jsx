import "../styles/admin-complaints.css";


function AdminComplaints(){


const complaints = [

{
id:1,
title:"Hostel Water Issue",
student:"Rahul Sharma",
category:"Hostel",
status:"Pending"
},


{
id:2,
title:"Library Timing Problem",
student:"Amit Kumar",
category:"Library",
status:"Closed"
},


{
id:3,
title:"Exam Form Issue",
student:"Neha Singh",
category:"Exam",
status:"Not Processed"
}

];



return(

<div className="complaints-page">


<div className="complaints-card">


<div className="complaints-header">


<h2>
All Complaints
</h2>


<div className="table-controls">


<select>

<option>
10
</option>

<option>
25
</option>

<option>
50
</option>

</select>


<input
type="text"
placeholder="Search complaints..."
/>


</div>


</div>





<table>


<thead>

<tr>

<th>
S NO.
</th>


<th>
STUDENT
</th>


<th>
COMPLAINT
</th>


<th>
CATEGORY
</th>


<th>
STATUS
</th>


<th>
ACTION
</th>


</tr>


</thead>




<tbody>


{

complaints.map((item,index)=>(


<tr key={item.id}>


<td>
{index+1}
</td>



<td>
{item.student}
</td>



<td>
{item.title}
</td>



<td>
{item.category}
</td>




<td>

<span 
className={
item.status==="Pending"
?
"status pending"
:
item.status==="Closed"
?
"status closed"
:
"status process"
}
>

{item.status}

</span>


</td>




<td>


<button className="view-btn">

View

</button>


<button className="delete-btn">

Delete

</button>


</td>



</tr>


))


}



</tbody>



</table>



<div className="table-footer">


<p>
Showing 1 to {complaints.length} of {complaints.length} entries
</p>



<div className="pagination">

<button>
«
</button>

<button>
‹
</button>

<button className="active-page">
1
</button>

<button>
›
</button>

<button>
»
</button>


</div>



</div>



</div>



</div>


)

}


export default AdminComplaints;