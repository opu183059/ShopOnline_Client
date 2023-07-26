import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="relative min-h-screen md:flex">
        <Sidebar />
        <div className="flex-1  md:ml-64">
          <div className="p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
