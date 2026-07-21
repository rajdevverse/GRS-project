



import { useEffect, useState } from "react";
import axios from "axios";
import "./CollegeManagement.css";


function CollegeManagement() {


    const [colleges, setColleges] = useState([]);

    const [name, setName] = useState("");

    const [editId, setEditId] = useState(null);

    const [editName, setEditName] = useState("");




    const API = "http://localhost:5000/api/admin/college";




    // GET COLLEGES

    const fetchColleges = async()=>{

        try{

            const res = await axios.get(API);

            setColleges(res.data);

        }
        catch(error){

            console.log(error);

        }

    };




    useEffect(()=>{

        fetchColleges();

    },[]);







    // ADD COLLEGE

    const addCollege = async()=>{


        if(!name.trim()){

            alert("Enter college name");

            return;

        }


        try{


            await axios.post(API,{

                name

            });


            setName("");

            fetchColleges();


        }
        catch(error){

            alert(
                error.response?.data?.message ||
                "Error adding college"
            );

        }


    };









    // UPDATE COLLEGE


    const updateCollege = async(id)=>{


        try{


            await axios.put(
                `${API}/${id}`,
                {
                    name:editName
                }
            );


            setEditId(null);

            setEditName("");

            fetchColleges();


        }
        catch(error){

            console.log(error);

        }


    };









    // BLOCK COLLEGE


    const blockCollege = async(id)=>{


        try{


            await axios.put(
                `${API}/${id}/block`
            );


            fetchColleges();


        }
        catch(error){

            console.log(error);

        }


    };









    // DELETE COLLEGE


    const deleteCollege = async(id)=>{


        const confirmDelete =
        window.confirm(
            "Delete this college?"
        );


        if(!confirmDelete)
        return;



        try{


            await axios.delete(
                `${API}/${id}`
            );


            fetchColleges();


        }
        catch(error){

            console.log(error);

        }


    };









return(

<div className="college-page">


<h2>
College Management
</h2>





<div className="college-add-box">


<input

type="text"

placeholder="Enter College Name"

value={name}

onChange={(e)=>setName(e.target.value)}

/>


<button

onClick={addCollege}

className="btn-add"

>

Add College

</button>


</div>








<div className="college-table-box">


<table>


<thead>

<tr>

<th>
College Name
</th>


<th>
Created By
</th>


<th>
Status
</th>


<th>
Actions
</th>


</tr>

</thead>





<tbody>


{

colleges.map((college)=>(


<tr key={college._id}>


<td>


{

editId === college._id ?

<input

value={editName}

onChange={(e)=>
setEditName(e.target.value)
}

/>


:

college.name


}


</td>





<td>

{college.createdBy}

</td>





<td>


<span

className={
college.blocked
?
"status blocked"
:
"status active"
}

>

{

college.blocked
?
"Blocked"
:
"Active"

}


</span>


</td>








<td>


<div className="action-buttons">



{

editId === college._id ?


<button

className="btn-save"

onClick={()=>
updateCollege(college._id)
}

>

Save

</button>


:


<button

className="btn-edit"

onClick={()=>{

setEditId(college._id);

setEditName(college.name);

}}

>

Edit

</button>


}








<button

className={
college.blocked
?
"btn-unblock"
:
"btn-block"
}

onClick={()=>
blockCollege(college._id)
}

>


{

college.blocked
?
"Unblock"
:
"Block"

}


</button>







<button

className="btn-delete"

onClick={()=>
deleteCollege(college._id)
}

>

Delete

</button>




</div>


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



export default CollegeManagement;