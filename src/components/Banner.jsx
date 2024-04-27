import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import UseAllProvider from "../hooks/UseAllProvider";
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    const { themeMail } = UseAllProvider();

    return (
        <Carousel className="raleway" autoPlay={true}>
            <div className={`max-h-screen relative  ${themeMail === "synthwave" ? "bg-[#1A103D]" : "bg-white"}`}>
                <img src="/banner.jpg" className="opacity-70" />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="space-y-4">
                        <p className={`josefin hidden md:flex justify-center font-bold ${themeMail === "synthwave" ? "text-green-800" : ""}`}>Best Destinations around the world</p>
                        <h1 className={`text-2xl md:text-7xl font-bold ${themeMail === "synthwave" ? "text-[#1A103D]" : ""}`}> <span className="text-green-700"><Typewriter words={['Travel', 'Enjoy']} loop={false} delaySpeed={3000} /></span> and live a new and full life</h1>

                    </div>
                </div>
            </div>
            <div className={`max-h-screen relative  ${themeMail === "synthwave" ? "bg-[#1A103D]" : "bg-white"}`}>
                <img src="/banner2.jpg" className="opacity-70" />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="space-y-4">
                        <p className={`josefin hidden md:flex justify-center font-bold ${themeMail === "synthwave" ? "text-green-800" : ""}`}>Best Destinations around the world</p>
                        <h1 className={`text-2xl md:text-7xl font-bold ${themeMail === "synthwave" ? "text-[#1A103D]" : ""}`}><span className="text-green-700"><Typewriter words={['Discover', 'Find']} loop={false} delaySpeed={3000} /></span> Your Favorite Place with Us</h1>
                    </div>
                </div>
            </div>
            <div className={`max-h-screen relative  ${themeMail === "synthwave" ? "bg-[#1A103D]" : "bg-white"}`}>
                <img src="/banner.jpg" className="opacity-70" />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="space-y-4">
                        <p className={`josefin hidden md:flex justify-center font-bold ${themeMail === "synthwave" ? "text-green-800" : ""}`}>Best Destinations around the world</p>
                        <h1 className={`text-2xl md:text-7xl font-bold ${themeMail === "synthwave" ? "text-[#1A103D]" : ""}`}> <span className="text-green-700"><Typewriter words={['Travel', 'Enjoy']} loop={false} delaySpeed={3000} /></span> and live a new and full life</h1>

                    </div>
                </div>
            </div>
            <div className={`max-h-screen relative  ${themeMail === "synthwave" ? "bg-[#1A103D]" : "bg-white"}`}>
                <img src="/banner2.jpg" className="opacity-70" />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="space-y-4">
                        <p className={`josefin hidden md:flex justify-center font-bold ${themeMail === "synthwave" ? "text-green-800" : ""}`}>Best Destinations around the world</p>
                        <h1 className={`text-2xl md:text-7xl font-bold ${themeMail === "synthwave" ? "text-[#1A103D]" : ""}`}><span className="text-green-700"><Typewriter words={['Discover', 'Find']} loop={false} delaySpeed={3000} /></span> Your Favorite Place with Us</h1>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;