import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="font-cinezal">
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;