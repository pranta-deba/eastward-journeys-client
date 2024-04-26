import UseAllPlaces from "../hooks/UseAllPlaces";
import PlaceCard from "./PlaceCard";

const TourDestination = () => {
    const { allPlaces } = UseAllPlaces();
    return (
        <div className="max-w-[1550px] w-[90%] mx-auto my-16 poppins">
            <div className='text-center my-12'>
                <p className='text-green-800'>Destination</p>
                <h1 className='text-4xl font-bold'>Tour Destination</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
                {
                    allPlaces.map(place => {
                        return <PlaceCard key={place._id} place={place} />
                    })
                }
            </div>
        </div>
    );
};

export default TourDestination;