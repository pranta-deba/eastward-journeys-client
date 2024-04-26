import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {

    return (
        <Carousel className="raleway w-full h-screen bg-cover">
            <div className="max-h-screen relative bg-white">
                <img src="/banner.jpg" className="opacity-70" />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="space-y-4">
                        <p className="josefin hidden md:flex justify-center">Welcome to <span className="font-bold text-green-900">Eastward journeys</span></p>
                        <h1 className="text-2xl md:text-7xl font-bold"><span className="text-green-800">Discover</span> Your Favorite Place with Us</h1>
                        <a className="inline-flex items-center justify-center w-full px-4 py-3 mb-2 text-lg text-white bg-green-800 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                            Get Started
                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-h-screen relative bg-white">
                <img src="/banner2.jpg" className="opacity-70" />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="space-y-4">
                        <p className="josefin hidden md:flex justify-center">Welcome to <span className="font-bold text-green-900">Eastward journeys</span></p>
                        <h1 className="text-2xl md:text-7xl font-bold"><span className="text-green-800">Discover</span> Your Favorite Place with Us</h1>
                        <a className="inline-flex items-center justify-center w-full px-4 py-3 mb-2 text-lg text-white bg-green-800 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                            Get Started
                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-h-screen relative bg-white">
                <img src="/banner3.jpg" className="opacity-70" />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="space-y-4">
                        <p className="josefin hidden md:flex justify-center">Welcome to <span className="font-bold text-green-900">Eastward journeys</span></p>
                        <h1 className="text-2xl md:text-7xl font-bold"><span className="text-green-800">Discover</span> Your Favorite Place with Us</h1>
                        <a className="inline-flex items-center justify-center w-full px-4 py-3 mb-2 text-lg text-white bg-green-800 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                            Get Started
                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-h-screen relative bg-white">
                <img src="/banner4.jpg" className="opacity-70" />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="space-y-4">
                        <p className="josefin hidden md:flex justify-center">Welcome to <span className="font-bold text-green-900">Eastward journeys</span></p>
                        <h1 className="text-2xl md:text-7xl font-bold"><span className="text-green-800">Discover</span> Your Favorite Place with Us</h1>
                        <a className="inline-flex items-center justify-center w-full px-4 py-3 mb-2 text-lg text-white bg-green-800 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                            Get Started
                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;