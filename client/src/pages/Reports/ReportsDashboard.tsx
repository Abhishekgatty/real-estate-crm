import React from "react";
import { useNavigate } from "react-router-dom";

const ReportsDashboard = () => {
  const navigate = useNavigate();

  const items = [
    { title: "Pending Followups", path: "/reports/pending-followups" },
    { title: "Total Converted", path: "/reports/converted" },
    { title: "Lost Leads", path: "/reports/lost-leads" },
    { title: "Leads by Location", path: "/reports/leads-by-location" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Reports</h2>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            onClick={() => navigate(item.path)}
           className="w-full cursor-pointer text-primary font-semibold hover:underline transition py-2 px-4 border rounded"

          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsDashboard;
