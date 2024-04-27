import { BiCategory } from "react-icons/bi";
import PlaceCard from "../components/PlaceCard";
import UseAllCountry from "../hooks/UseAllCountry";
import UseAllPlaces from "../hooks/UseAllPlaces";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
import { CirclesWithBar } from "react-loader-spinner";

const TouristsPlace = () => {
    const { allPlaces ,allPlacesLoading} = UseAllPlaces();
    const { allCountry } = UseAllCountry();
    const [places, setPlaces] = useState([]);
    const [active, setActive] = useState('');
    useEffect(() => {
        setPlaces(allPlaces);
        setActive('all');
    }, [allPlaces])

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
    const handleSort = country => {
        if (country === "all") {
            setPlaces(allPlaces);
            setActive('all');
            return;
        }
        const filteredPlaces = allPlaces.filter(place => place.countryName === country);
        setPlaces(filteredPlaces);
        setActive(country);
    }

    const handleDeletePlace = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#15803D",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/places/${id}`, {
                    method: 'DELETE',
                }).then(res => res.json())
                    .then(deleted => {
                        if (deleted.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This spot has been deleted.",
                                icon: "success"
                            });
                            const filteredPlaces = allPlaces.filter(place => place._id !== id);
                            setPlaces(filteredPlaces);
                            setActive('all');
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="max-w-[1550px] w-[90%] mx-auto mb-16 poppins  min-h-screen">
                <div className='my-12 space-x-2 flex flex-wrap gap-2 raleway'>
                    <button className="text-2xl cursor-wait text-green-700"><BiCategory /></button>
                    <button onClick={() => handleSort("all")} className={`px-4 rounded border-2 border-green-800 py-1 ${active === "all" ? "bg-green-700 text-white" : ""}`}>All</button>
                    {allCountry.map((country) => (
                        <button onClick={() => handleSort(country.countryName)} key={country._id} className={`px-4 rounded border-2 border-green-800 py-1 ${active === country.countryName ? "bg-green-700 text-white" : ""}`}>{country.countryName}</button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
                    {
                        places.map(place => {
                            return <PlaceCard key={place._id} place={place} access={true} handleDeletePlace={handleDeletePlace} />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default TouristsPlace;