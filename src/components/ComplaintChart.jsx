import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";


function ComplaintChart(){

const data=[

{
name:"Pending",
count:10
},

{
name:"Progress",
count:6
},

{
name:"Resolved",
count:20
}

];


return(

<div style={{
width:"100%",
height:300
}}>


<ResponsiveContainer>


<BarChart data={data}>


<XAxis dataKey="name"/>

<YAxis/>


<Tooltip/>


<Bar

dataKey="count"

/>


</BarChart>


</ResponsiveContainer>


</div>

);


}


export default ComplaintChart;