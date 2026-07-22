import "./DashboardCard.css";


const DashboardCard = ({ 
    title, 
    value, 
    icon, 
    color,
    onClick
}) => {


return (

<div

className="card shadow-sm border-0 h-100 dashboard-card"

onClick={onClick}

>


<div className="card-body">


<div className="dashboard-content">



<div>


<h6 className="text-muted">

{title}

</h6>



<h2 className="fw-bold mb-2">

{value}

</h2>



<p className="view-text">

View Details →

</p>


</div>







<div

className="dashboard-icon"

style={{

background:color

}}

>


<i className={icon}></i>


</div>





</div>


</div>


</div>


);


};


export default DashboardCard;