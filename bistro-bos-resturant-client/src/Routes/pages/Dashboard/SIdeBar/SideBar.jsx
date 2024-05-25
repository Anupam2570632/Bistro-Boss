import { FaBars, FaCalendar, FaCartShopping, FaEnvelope, FaHouse, FaRankingStar, FaRegCalendar, FaRegMoneyBill1, FaShop } from "react-icons/fa6";
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
        <li className="text-black"><NavLink end to={'/dashboard'}><FaHouse  className="text-2xl"/> User Home</NavLink></li>
        <li className="text-black"><NavLink end to={'myCart'}><FaCartShopping  className="text-2xl"/> My Cart</NavLink></li>
        <li className="text-black"><NavLink end to={'reservation'}><FaCalendar/> Reservation</NavLink></li>
        <li className="text-black"><NavLink end to={'reservation'}><FaRegMoneyBill1 className="text-2xl"/> Payment History</NavLink></li>
        <li className="text-black"><NavLink end to={'review'}><FaRankingStar className="text-2xl"/> add review</NavLink></li>
        <li className="text-black"><NavLink end to={'review'}><FaRegCalendar className="text-2xl"/> My Booking</NavLink></li>
        <div className="divider"></div>
        <li className="text-black"><NavLink end to={'/'}><FaHouse className="text-2xl"/> Home</NavLink></li>
        <li className="text-black"><NavLink end to={'/menu'}><FaBars className="text-2xl"/> Menu</NavLink></li>
        <li className="text-black"><NavLink end to={'/shop/salad'}><FaShop className="text-2xl"/> Shop</NavLink></li>
        <li className="text-black"><NavLink end to={'/contact'}><FaEnvelope className="text-2xl"/> Contact</NavLink></li>

    </>

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col lg:hidden ">
                <label htmlFor="my-drawer-2" className="btn bg-[#D1A054] w-fit drawer-button lg:hidden"><FaBars /></label>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="c  lose sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] space-y-2">
                    {sideLinks}
                </ul>

            </div>
        </div>
    );
};

export default SideBar;