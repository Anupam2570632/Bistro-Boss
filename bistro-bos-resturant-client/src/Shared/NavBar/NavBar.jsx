import { Link, NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    const links = <>
        <li><NavLink to={'/'}>HOME</NavLink></li>
        <li><NavLink to={'/contact'}>CONTACT US</NavLink></li>
        <li><NavLink to={'/dashboard'}>DASHBOARD</NavLink></li>
        <li><NavLink to={'/menu'}>OUR MENU</NavLink></li>
        <li><NavLink to={'/shops'}>OUR SHOPS</NavLink></li>
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
                    <ul className="menu-horizontal px-1">
                        {links}
                    </ul>
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </div>
                <div className="navbar-end lg:hidden">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;