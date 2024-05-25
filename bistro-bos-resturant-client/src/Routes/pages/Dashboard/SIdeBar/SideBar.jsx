import { FaBars, FaCartShopping, FaHouse } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import './sidebar.css'

const SideBar = () => {

    const sideLinks = <>
        <li className="text-black p-4">
            <Link to={'/'} className="flex flex-col items-start p-0 text-start">
                <h2 className="text-[18px] font-bold">BISTRO BOSS</h2>
                <h1 className="tracking-widest">RESTAURANT</h1>
            </Link>
        </li>
        <li className="text-black"><NavLink end to={'/dashboard'}><FaHouse /> User Home</NavLink></li>
        <li className="text-black"><NavLink end to={'/dashboard/myCart'}><FaCartShopping /> My Cart</NavLink></li>
    </>

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col lg:hidden ">
                <label htmlFor="my-drawer-2" className="btn bg-[#D1A054] w-fit drawer-button lg:hidden"><FaBars /></label>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="c  lose sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] ">
                    {sideLinks}
                </ul>

            </div>
        </div>
    );
};

export default SideBar;