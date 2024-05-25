import { FaBars, FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {

    const sideLinks = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><NavLink end to={'/dashboard'}>User Home</NavLink></li>
    <li><NavLink end to={'/dashboard/myCart'}><FaCartShopping/> My Cart</NavLink></li>
    </>

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col lg:hidden ">
                <label htmlFor="my-drawer-2" className="btn bg-[#D1A054] w-fit drawer-button lg:hidden"><FaBars/></label>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="c  lose sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[#D1A054]  text-base-content">
                    {sideLinks}
                </ul>

            </div>
        </div>
    );
};

export default SideBar;