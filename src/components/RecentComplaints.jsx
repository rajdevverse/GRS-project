import { useEffect, useState } from "react";
import axios from "axios";

const RecentComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await axios.get(
        "http://localhost:5000/api/admin/complaints",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setComplaints(res.data);

    } catch (error) {
      console.error(
        "Error fetching complaints:",
        error
      );

    } finally {
      setLoading(false);
    }
  };


  const getBadgeClass = (status) => {

    switch(status){

      case "Resolved":
        return "bg-success";

      case "Rejected":
        return "bg-danger";

      case "In Progress":
        return "bg-info";

      default:
        return "bg-warning text-dark";
    }

  };


  return (
    <div className="card shadow-sm border-0">

      <div className="card-header bg-white">
        <h5 className="fw-bold mb-0">
          Recent Complaints
        </h5>
      </div>


      <div className="table-responsive">

        <table className="table table-hover align-middle mb-0">

          <thead className="table-light">

            <tr>
              <th>#</th>
              <th>Complaint ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Date</th>
            </tr>

          </thead>


          <tbody>

          {
            loading ? (

              <tr>
                <td 
                colSpan="6" 
                className="text-center py-4"
                >
                  Loading complaints...
                </td>
              </tr>

            ) : complaints.length === 0 ? (

              <tr>
                <td 
                colSpan="6" 
                className="text-center py-4"
                >
                  No complaints found
                </td>
              </tr>

            ) : (

              complaints.map((complaint,index)=>(

                <tr key={complaint._id}>

                  <td>
                    {index+1}
                  </td>


                  <td>
                    {complaint.complaintId}
                  </td>


                  <td>
                    {complaint.title}
                  </td>


                  <td>
                    {complaint.category}
                  </td>


                  <td>

                    <span 
                    className={`badge ${getBadgeClass(
                      complaint.status
                    )}`}
                    >
                      {complaint.status}
                    </span>

                  </td>


                  <td>
                    {new Date(
                      complaint.createdAt
                    ).toLocaleDateString()}
                  </td>


                </tr>

              ))

            )
          }

          </tbody>

        </table>

      </div>

    </div>
  );
};


export default RecentComplaints;