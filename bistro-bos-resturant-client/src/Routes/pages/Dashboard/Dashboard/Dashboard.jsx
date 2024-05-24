import { Outlet } from "react-router-dom";
import SideBar from "../SIdeBar/SideBar";

const Dashboard = () => {
    return (
        <div className="flex gap-10 flex-col lg:flex-row">
            <div className="w-1/4">
                <SideBar />
            </div>
            <div className="w-3/4">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;