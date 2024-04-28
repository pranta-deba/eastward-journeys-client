import { Link } from "react-router-dom";
import UseAllProvider from "../hooks/UseAllProvider";

const Footer = () => {
    const { themeMail } = UseAllProvider();
    return (
        <footer className="shadow-inner border-t-2 border-gray-100 poppins">
            <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div data-aos="fade-up" className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <a
                        className="inline-block rounded-full bg-green-600 p-2 text-white shadow transition hover:bg-green-500 sm:p-3 lg:p-4 cursor-pointer"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        <span className="sr-only">Back to top</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

                <div data-aos="fade-up" className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div className="flex justify-center text-teal-600 lg:justify-start">
                            <Link t="/" className="flex items-center justify-center text-xl"><img src={themeMail === "synthwave" ? "/logo2.png" : "/logo.png"} alt="" className="w-[90px] md:w-[140px]" /></Link>
                        </div>

                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                            At Eastward Journeys, were your trusted companions on the path to discovery through the captivating lands of the Middle East. Our mission is to curate unforgettable experiences that immerse you in the rich tapestry of cultures, histories, and landscapes that define this enchanting region.
                        </p>
                    </div>

                    <ul
                        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
                    >
                        <li>
                            <Link to="/about" className="text-gray-700 transition hover:text-gray-700/75"> About </Link>
                        </li>

                        <li>
                            <Link to="/tourists_spot" className="text-gray-700 transition hover:text-gray-700/75"> Spot </Link>
                        </li>


                        <li>
                            <Link to="/blogs" className="text-gray-700 transition hover:text-gray-700/75" > Blog </Link>
                        </li>
                    </ul>
                </div>

                <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                    Copyright &copy; Pritom - {new Date().getFullYear()}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;