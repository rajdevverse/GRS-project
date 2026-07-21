const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h6 className="text-muted">{title}</h6>
          <h2 className="fw-bold">{value}</h2>
        </div>

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "60px",
            height: "60px",
            background: color,
            color: "#fff",
            fontSize: "24px",
          }}
        >
          <i className={icon}></i>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;