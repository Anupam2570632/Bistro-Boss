import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";

const DashBoardHome = () => {
    const {user}= useContext(AuthContext)
    return (
        <div>
           <h1 className="text-2xl font-bold text-[#151515]">Hi, Welcome Back!</h1>
           <div>
            <img className="w-24 rounded-full" src={user?.photoURL} alt="" />
            <h1>{user?.displayName}</h1>
           </div>
        </div>
    );
};

export default DashBoardHome;