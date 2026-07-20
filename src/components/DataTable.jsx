function DataTable({
  title,
  columns,
  rows
}) {


return (

<div className="table-card">


<h2>
{title}
</h2>




<div className="table-top">


<div>

<select>

<option>10</option>

<option>25</option>

<option>50</option>

</select>

<span> entries</span>

</div>




<input

type="text"

placeholder="Search..."

 />



</div>






<table>


<thead>


<tr>


{

columns.map((col)=>(

<th key={col}>

{col}

</th>

))

}


</tr>


</thead>







<tbody>


{

rows.length === 0 ?


(

<tr>

<td

colSpan={columns.length}

style={{
textAlign:"center"
}}

>

No Records Found

</td>

</tr>


)


:

(

rows.map((row,i)=>(


<tr key={i}>


{


row.map((cell,j)=>(


<td key={j}>

{

typeof cell === "object"

?

cell

:

cell

}


</td>


))


}


</tr>


))


)


}


</tbody>



</table>



</div>

);


}


export default DataTable;