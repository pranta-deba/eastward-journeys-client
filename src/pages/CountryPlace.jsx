import { Link, useLoaderData, useParams } from "react-router-dom";
import PlaceCard from "../components/PlaceCard";
import Lottie from "lottie-react";
import notSearch from "../assets/searchNot.json";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const CountryPlace = () => {
    const countryPlaces = useLoaderData();
    const {country} = useParams();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    if (countryPlaces.length < 1) {
        return <div className="h-screen max-w-[600px] mx-auto text-center">
            <Lottie animationData={notSearch} />
            <Link to={-1} className="btn px-9 rounded border-b-2 border-green-800 focus:bg-green-800 focus:text-white">back</Link>
        </div>
    }
    return (
        <div className="max-w-[1550px] w-[90%] mx-auto my-16 poppins">
            <Helmet>
                <title>Eastward - {country}</title>
            </Helmet>
            <div className='text-center my-12'>
                <h1 className='text-4xl font-bold'>Tour Destination</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
                {
                    countryPlaces.map(place => {
                        return <PlaceCard key={place._id} place={place} access={false}/>
                    })
                }
            </div>
        </div>
    );
};

export default CountryPlace;