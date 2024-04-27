import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import UseAllProvider from "../hooks/UseAllProvider";
import { CiLogout } from "react-icons/ci";
import avatar from "../assets/avater.jpg"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [themeController, setThemeController] = useState(false);
    const [theme, setTheme] = useState("light");
    document.querySelector('html').setAttribute('data-theme', theme);
    const { user, logOut } = UseAllProvider();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    const handleThemeController = () => {
        setThemeController(!themeController);
        !themeController ? setTheme('dark') : setTheme('light');
    }

    const HandleLogout = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }

    const navLinks = <>
        <li><NavLink to={"/"} className={({ isActive, isPending }) =>
            isActive
                ? "rounded border-b-2 border-green-800 focus:bg-green-800 focus:text-white"
                : isPending
                    ? "pending"
                    : "rounded border-b-2 border-transparent focus:bg-green-800"
        }>Home</NavLink></li>
        <li><NavLink to={"/tourists_spot"} className={({ isActive, isPending }) =>
            isActive
                ? "rounded border-b-2 border-green-800 focus:bg-green-800 focus:text-white"
                : isPending
                    ? "pending"
                    : "rounded border-b-2 border-transparent focus:bg-green-800"
        }>Tourists Spot</NavLink></li>

        {user && <li><NavLink to={"/add_tourists_spot"} className={({ isActive, isPending }) =>
            isActive
                ? "rounded border-b-2 border-green-800 focus:bg-green-800 focus:text-white"
                : isPending
                    ? "pending"
                    : "rounded border-b-2 border-transparent focus:bg-green-800"
        }>Add Tourists Spot</NavLink></li>}

        {user && <li><NavLink to={"/my_list"} className={({ isActive, isPending }) =>
            isActive
                ? "rounded border-b-2 border-green-800 focus:bg-green-800 focus:text-white"
                : isPending
                    ? "pending"
                    : "rounded border-b-2 border-transparent focus:bg-green-800"
        }>My List</NavLink></li>}
        <li><NavLink to={"/blogs"} className={({ isActive, isPending }) =>
            isActive
                ? "rounded border-b-2 border-green-800 focus:bg-green-800 focus:text-white"
                : isPending
                    ? "pending"
                    : "rounded border-b-2 border-transparent focus:bg-green-800"
        }>Blogs</NavLink></li>
        <li><NavLink to={"/about"} className={({ isActive, isPending }) =>
            isActive
                ? "rounded border-b-2 border-green-800 focus:bg-green-800 focus:text-white"
                : isPending
                    ? "pending"
                    : "rounded border-b-2 border-transparent focus:bg-green-800"
        }>About</NavLink></li>
    </>

    return (
        <div className={`navbar poppins ${scrolled ? 'bg-white fixed top-0 w-full shadow-xl z-50' : 'bg-white'}`}>
            <div className="navbar-start">
                <div className="dropdown gap-0 p-0">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-md font-medium">
                        {navLinks}
                    </ul>
                </div>
                <a className="flex items-center text-xl">logo</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2 text-md font-medium">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a onClick={handleThemeController} className="text-3xl cursor-pointer">
                    {!themeController ? <MdLightMode /> : <MdOutlineLightMode />}
                </a>

                {user && <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="m-1">
                        <div className="avatar online" data-tooltip-id="my-tooltip"
                            data-tooltip-content={user.displayName || "unknown"}
                            data-tooltip-place="left">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL || avatar} />
                            </div>
                        </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Profile</a></li>
                        <li><a>Setting</a></li>
                        <li onClick={HandleLogout}><a className="flex items-center gap-1"><CiLogout />Logout</a></li>
                    </ul>
                </div>}

                {!user && <>
                    <NavLink to={"/signIn"} className={({ isActive, isPending }) =>
                        isActive
                            ? "hidden md:flex btn rounded border-b-2 border-green-800 focus:bg-green-800 focus:text-white"
                            : isPending
                                ? "pending"
                                : "hidden md:flex btn rounded border-b-2 border-transparent focus:bg-green-800"
                    }>Sign in</NavLink>
                    <NavLink to={"/signUp"} className={({ isActive, isPending }) =>
                        isActive
                            ? "btn px-9 rounded border-b-2 border-green-800 focus:bg-green-800 focus:text-white"
                            : isPending
                                ? "pending"
                                : "btn px-9 bg-green-800 text-white hover:text-white hover:bg-green-400 rounded border-b-2 border-transparent focus:bg-green-800"
                    } >Try Free</NavLink>
                </>}
            </div>
            <Tooltip id="my-tooltip" className="relative z-20" />
        </div>
    );
};

export default Navbar;