import { Link, NavLink } from "react-router-dom";
import './NavBar.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { BsCart4 } from "react-icons/bs";
import useCart from "../../hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [carts] = useCart()

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink to={'/'}>HOME</NavLink></li>
        <li><NavLink to={'/contact'}>CONTACT US</NavLink></li>
        <li><NavLink to={'/dashboard'}>DASHBOARD</NavLink></li>
        <li><NavLink to={'/menu'}>OUR MENU</NavLink></li>
        <li><NavLink to={'/shop/salad'}>OUR SHOPS</NavLink></li>
        {
            user && <li className="flex relative items-center justify-center text-xl font-bold bg-green-600 text-white rounded-full border-2 border-yellow-400 p-2">
            <Link to={'/dashboard/myCart'}>
                <BsCart4 />
                <div className="absolute -right-2 h-6 w-6 text-[12px] flex items-center justify-center -bottom-2 bg-red-600 text-white p-1 rounded-full">{carts?.length}</div>
            </Link>
        </li>
        }
    </>
    return (
        <div className="fixed top-0 z-10 w-full m-0 p-0 bg-black bg-opacity-40">
            <div className="navbar max-w-[1550px] mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" dropdown-content bg-black bg-opacity-45 mt-3 z-[1] p-2  w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="flex flex-col p-0 text-white">
                        <h2 className="text-[18px] font-bold">BISTRO BOSS</h2>
                        <h1 className="tracking-widest">RESTAURANT</h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 flex items-center">
                        {links}
                    </ul>
                    <div className="navbar-end">
                        {
                            user
                                ?
                                <div className="flex items-center gap-2">

                                    <button onClick={handleLogOut} className="px-5 py-3 bg-transparent text-xl font-bold text-white">Sign Out</button>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button">
                                            <div className="avatar">
                                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={user.photoURL} />
                                                </div>
                                            </div>
                                        </div>
                                        <div tabIndex={0} className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
                                            <div className="card-body">
                                                <h3 className="card-title">{user.displayName}</h3>
                                                <p>{user.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <Link to={'/login'}>
                                    <button className="px-5 py-3 bg-transparent text-xl font-bold text-white">LogIn</button>
                                </Link>
                        }
                    </div>
                </div>
                <div className="navbar-end lg:hidden">
                    {
                        user
                            ?
                            <div className="flex items-center gap-2">

                                <button onClick={handleLogOut} className="px-5 py-3 bg-transparent text-xl font-bold text-white">Sign Out</button>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button">
                                        <div className="avatar">
                                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={user.photoURL} />
                                            </div>
                                        </div>
                                    </div>
                                    <div tabIndex={0} className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
                                        <div className="card-body">
                                            <h3 className="card-title">{user.displayName}</h3>
                                            <p>{user.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to={'/login'}>
                                <button className="px-5 py-3 bg-transparent text-xl font-bold text-white">LogIn</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;