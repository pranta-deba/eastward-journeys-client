import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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
        <li><NavLink to={"/add_tourists_spot"} className={({ isActive, isPending }) =>
            isActive
                ? "rounded border-b-2 border-green-800 focus:bg-green-800 focus:text-white"
                : isPending
                    ? "pending"
                    : "rounded border-b-2 border-transparent focus:bg-green-800"
        }>Add Tourists Spot</NavLink></li>
        <li><NavLink to={"/my_list"} className={({ isActive, isPending }) =>
            isActive
                ? "rounded border-b-2 border-green-800 focus:bg-green-800 focus:text-white"
                : isPending
                    ? "pending"
                    : "rounded border-b-2 border-transparent focus:bg-green-800"
        }>My List</NavLink></li>
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
        <div className={`navbar poppins ${scrolled ? 'bg-white fixed top-0 w-full shadow-xl' : 'bg-white'}`}>
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
                <NavLink to={"/signIn"} className={`hidden md:flex btn py-0 rounded ${({ isActive, isPending }) =>
                    isActive
                        ? "border-b-2 border-green-800 focus:bg-green-800 focus:text-white"
                        : isPending
                            ? "pending"
                            : "border-b-2 border-transparent focus:bg-green-800"
                }`}>Sign in</NavLink>
                <NavLink to={"/signUp"} className={({ isActive, isPending }) =>
                    isActive
                        ? "btn px-9 rounded border-b-2 border-green-800 focus:bg-green-800 focus:text-white"
                        : isPending
                            ? "pending"
                            : "btn px-9 bg-green-800 text-white hover:text-white hover:bg-green-900 rounded border-b-2 border-transparent focus:bg-green-800"
                } >Try Free</NavLink>
            </div>
        </div>
    );
};

export default Navbar;