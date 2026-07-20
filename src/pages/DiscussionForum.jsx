import "../styles/discussion-forum.css";


function DiscussionForum(){


const questions = [

{
id:1,
user:"Rahul Sharma",
question:"How to apply for hostel?",
answers:5
},


{
id:2,
user:"Amit Kumar",
question:"When will exams start?",
answers:3
},


{
id:3,
user:"Neha Singh",
question:"Library opening timing?",
answers:7
}

];



return(

<div className="discussion-page">


<div className="discussion-card">


<div className="discussion-header">


<h2>
Discussion Forum
</h2>



<div className="discussion-controls">


<select>

<option>
10
</option>

<option>
25
</option>

</select>


<input
placeholder="Search questions..."
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
POSTED BY
</th>


<th>
QUESTION
</th>


<th>
ANSWERS
</th>


<th>
ACTION
</th>


</tr>


</thead>





<tbody>


{

questions.map((q,index)=>(


<tr key={q.id}>


<td>
{index+1}
</td>


<td>
{q.user}
</td>


<td>
{q.question}
</td>


<td>
{q.answers}
</td>


<td>


<button className="delete-question">

<i className="bi bi-trash"></i>

Delete Question

</button>


</td>


</tr>


))


}


</tbody>



</table>




<div className="discussion-footer">


<p>
Showing 1 to {questions.length} of {questions.length} entries
</p>


<div>

<button>
«
</button>

<button>
‹
</button>

<button className="active">
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


export default DiscussionForum;