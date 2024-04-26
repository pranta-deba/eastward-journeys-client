import { AiOutlineDollar } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import { SiSession } from "react-icons/si";
import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
    const singlePlace = useLoaderData();
    const { touristsSpotName, countryName, description, photoURL, location, averageCost, seasonality } = singlePlace || {};
    return (

        <div>
            <div style={{
                backgroundImage: `url(${photoURL})`
            }} className="p-12 bg-bottom bg-fixed">
                <h2 className="text-3xl font-bold tracking-tight text-white text-center sm:text-5xl">{touristsSpotName}</h2>
            </div>
            <section className="dark:bg-gray-100 py-6 md:py-0 dark:text-gray-800 max-w-[1550px] w-[90%] mx-auto raleway">
                <div className="container max-w-xl md:py-12 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">{countryName}</h3>
                            <p className="mt-3 text-lg dark:text-gray-600">{description}</p>
                            <div className="mt-12 space-y-4">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <ImLocation2 className="text-3xl text-green-800" />
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">{location}</h4>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <AiOutlineDollar className="text-3xl text-green-800" />
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">{averageCost}/per person</h4>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <SiSession className="text-3xl text-green-800" />
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">{seasonality}</h4>
                                </div>
                                <div className="flex gap-3">
                                    <button className="btn px-9 rounded border-b-2 border-green-800 focus:bg-green-800 focus:text-white flex items-center gap-1"><FaBookmark className="text-2xl" />Bookmark</button>
                                    <button className="btn px-9 rounded border-b-2 border-green-800 focus:bg-green-800 focus:text-white flex items-center gap-1"><FiShare2 className="text-2xl" />Share</button>

                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src={photoURL} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailsPage;