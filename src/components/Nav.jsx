import { useEffect, useState } from "react";


const Nav = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    return (
        <nav className={`navbar fixed top-0 w-full ${scrolled ? 'bg-green-500' : 'bg-white'}`}>
            <div className="container mx-auto px-4">
                <a className="navbar-brand text-xl font-bold text-black" href="/">Your Logo</a>
                <ul className="nav flex">
                    <li className="nav-item">
                        <a className="nav-link text-black" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="/services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;