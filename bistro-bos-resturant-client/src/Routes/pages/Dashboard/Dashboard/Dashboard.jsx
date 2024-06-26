import { Outlet } from "react-router-dom";
import SideBar from "../SIdeBar/SideBar";

const Dashboard = () => {
    return (
        <div className="flex gap-10 flex-col lg:flex-row font-cinezal">
            <div className="w-full lg:w-1/4 lg:fixed lg:top-0 lg:h-full">
                <SideBar />
            </div>
            <div className="w-full lg:w-3/4 lg:ml-[25%]">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;