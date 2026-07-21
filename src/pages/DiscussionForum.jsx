import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/discussion-forum.css";


function DiscussionForum(){


const navigate = useNavigate();


const [discussions,setDiscussions] = useState([]);

const [question,setQuestion] = useState("");

const [search,setSearch] = useState("");

const [loading,setLoading] = useState(false);






// =============================
// LOAD DISCUSSIONS
// =============================


useEffect(()=>{

fetchDiscussions();

},[]);






const fetchDiscussions = async()=>{


try{


const response = await fetch(

"http://localhost:5000/api/discussions"

);



const data = await response.json();



setDiscussions(data);



}
catch(error){


console.log(
"Fetch Discussion Error:",
error
);


}


};









// =============================
// POST QUESTION
// =============================


const createDiscussion = async()=>{


if(!question.trim()){


alert(
"Please enter your question"
);


return;


}




const user = JSON.parse(

localStorage.getItem("user")

);





if(!user){


alert(
"Please login first"
);


navigate("/user-login");


return;


}





try{


setLoading(true);



const response = await fetch(

"http://localhost:5000/api/discussions",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

user:user.name,

userId:user.id,

question:question,

answers:0

})


}

);






if(!response.ok){


throw new Error(
"Question not posted"
);


}







setQuestion("");



await fetchDiscussions();




alert(
"Question posted successfully"
);



}
catch(error){


console.log(
"Post Error:",
error
);


alert(
"Unable to post question"
);


}
finally{


setLoading(false);


}


};









// =============================
// SEARCH
// =============================


const filteredDiscussions = discussions.filter((item)=>

item.question
?.toLowerCase()
.includes(

search.toLowerCase()

)

);









return(


<div className="discussion-page">


<div className="discussion-card">







{/* HEADER */}


<div className="discussion-header">


<h2>

<i className="bi bi-chat-dots"></i>

Student Discussion Forum

</h2>



<p>

Ask questions and communicate with fellow students

</p>


</div>









{/* ASK QUESTION */}


<div className="post-box">


<h3>

Ask a Question

</h3>





<textarea

placeholder="Write your question here..."

value={question}

onChange={(e)=>

setQuestion(e.target.value)

}

/>






<button

className="post-btn"

onClick={createDiscussion}

disabled={loading}

>


<i className="bi bi-send"></i>


{

loading

?

"Posting..."

:

"Post Question"

}



</button>




</div>









{/* SEARCH */}



<div className="search-area">


<i className="bi bi-search"></i>



<input

className="search-box"

placeholder="Search discussions..."

value={search}

onChange={(e)=>

setSearch(e.target.value)

}

/>


</div>









{/* DISCUSSION LIST */}



<div className="discussion-list">





{

filteredDiscussions.length === 0 ?



<div className="empty-box">


<i className="bi bi-chat-square-text"></i>


<p>

No discussions available

</p>


</div>



:

filteredDiscussions.map((item)=>(



<div

className="discussion-item"

key={item._id}

>





<div className="question-header">


<h4>

{item.question}

</h4>



<span>

#{item._id.slice(-5)}

</span>


</div>









<div className="discussion-info">


<p>

<i className="bi bi-person"></i>

Posted By:

<b>

{" "}{item.user}

</b>


</p>






<p>

<i className="bi bi-chat-left-text"></i>

Replies:

<b>

{" "}{item.answers || 0}

</b>


</p>



</div>









<button

className="reply-btn"

onClick={()=>navigate(`/discussion/${item._id}`)}

>


View Discussion


</button>






</div>



))


}



</div>









</div>


</div>


);


}


export default DiscussionForum;