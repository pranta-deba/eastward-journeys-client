import { CirclesWithBar } from "react-loader-spinner";
import UseAllPlaces from "../hooks/UseAllPlaces";
import PlaceCard from "./PlaceCard";
import { Link } from "react-router-dom";

const TourDestination = () => {
    const { allPlaces, allPlacesLoading } = UseAllPlaces();
    if (allPlacesLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <CirclesWithBar
                    height="100"
                    width="100"
                    color="#4fa94d"
                    outerCircleColor="#4fa94d"
                    innerCircleColor="#4fa94d"
                    barColor="#4fa94d"
                    ariaLabel="circles-with-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        )
    }
    return (
        <div className="max-w-[1550px] w-[90%] mx-auto my-16 poppins">
            <div className='text-center my-12'>
                <p className='text-green-800'>Destination</p>
                <h1 className='text-4xl font-bold'>Tour Destination</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
                {
                    allPlaces.slice(0, 8).map(place => {
                        return <PlaceCard key={place._id} place={place} access={false} />
                    })
                }
            </div>
            <div className="text-center py-12">
                <Link to='/tourists_spot' className="btn bg-green-800 text-white hover:text-black">See More</Link>
            </div>
        </div>
    );
};

export default TourDestination;