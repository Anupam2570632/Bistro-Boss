import { FaBars, FaBook, FaCalendar, FaCartShopping, FaEnvelope, FaHouse, FaRankingStar, FaRegCalendar, FaRegMoneyBill1, FaShop, FaUser, FaUserGroup, FaUtensils } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import './sidebar.css'
import useAdmin from "../../../../hooks/useAdmin";

const SideBar = () => {
    const [isAdmin] = useAdmin()

    const sideLinks = <>

        {
            isAdmin ?
                <>
                    <li className="text-black"><NavLink end to={'adminHome'}><FaHouse className="text-2xl" /> Admin Home</NavLink></li>
                    <li className="text-black"><NavLink end to={'addItem'}><FaUtensils className="text-2xl" /> Add Items</NavLink></li>
                    <li className="text-black"><NavLink end to={'manageItem'}><FaBars /> Manage Items</NavLink></li>
                    <li className="text-black"><NavLink end to={'reservation'}><FaBook className="text-2xl" /> Manage Bookings</NavLink></li>
                    <li className="text-black"><NavLink end to={'users'}><FaUserGroup className="text-2xl" /> All Users</NavLink></li>

                </>
                :
                <>
                    <li className="text-black"><NavLink end to={'userHome'}><FaHouse className="text-2xl" /> User Home</NavLink></li>
                    <li className="text-black"><NavLink end to={'myCart'}><FaCartShopping className="text-2xl" /> My Cart</NavLink></li>
                    <li className="text-black"><NavLink end to={'payment'}><FaCalendar /> Reservation</NavLink></li>
                    <li className="text-black"><NavLink end to={'paymentHistory'}><FaRegMoneyBill1 className="text-2xl" /> Payment History</NavLink></li>
                    <li className="text-black"><NavLink end to={'review'}><FaRankingStar className="text-2xl" /> add review</NavLink></li>
                    <li className="text-black"><NavLink end to={'review'}><FaRegCalendar className="text-2xl" /> My Booking</NavLink></li>
                </>
        }
        <div className="divider"></div>
        <li className="text-black"><NavLink end to={'/'}><FaHouse className="text-2xl" /> Home</NavLink></li>
        <li className="text-black"><NavLink end to={'/menu'}><FaBars className="text-2xl" /> Menu</NavLink></li>
        <li className="text-black"><NavLink end to={'/shop/salad'}><FaShop className="text-2xl" /> Shop</NavLink></li>
        <li className="text-black"><NavLink end to={'/contact'}><FaEnvelope className="text-2xl" /> Contact</NavLink></li>

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
                    <div className="flex flex-col items-start p-4 text-start">
                        <h2 className="text-[18px] font-bold">BISTRO BOSS</h2>
                        <h1 className="tracking-widest">RESTAURANT</h1>
                    </div>

                    {sideLinks}
                </ul>

            </div>
        </div>
    );
};

export default SideBar;