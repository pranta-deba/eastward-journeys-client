import Lottie from "lottie-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import error from "../assets/404.json";

const Error = () => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main>
                <div className="md:min-h-screen max-w-[700px] mx-auto text-center my-8 space-y-8">
                    <Lottie animationData={error} />
                    <Link to={-1} className="btn px-9 rounded border-b-2 border-green-800 focus:bg-green-800 focus:text-white">back</Link>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Error;