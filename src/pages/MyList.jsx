import { useEffect, useState } from "react";
import UseAllPlaces from "../hooks/UseAllPlaces";
import UseAllProvider from "../hooks/UseAllProvider";
import PlaceCard from "../components/PlaceCard";
import notSearch from "../assets/searchNot.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
import { CirclesWithBar } from "react-loader-spinner";
import { Helmet } from "react-helmet-async";

const MyList = () => {
    const { user } = UseAllProvider();
    const { allPlaces, allPlacesLoading } = UseAllPlaces();
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        if (user && allPlaces) {
            const filterPlaces = allPlaces.filter(place => place.userEmail === user.email);
            setPlaces(filterPlaces);
        }
    }, [user, allPlaces])
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

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
                            const filteredPlaces = places.filter(place => place._id !== id);
                            setPlaces(filteredPlaces);
                        }
                    })
            }
        });
    }

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

    if (user && places.length < 1) {
        return <div className="min-h-screen max-w-[600px] mx-auto text-center">
            <Lottie animationData={notSearch} />
            <Link to={-1} className="btn px-9 rounded border-b-2 border-green-800 focus:bg-green-800 focus:text-white">back</Link>
        </div>
    }
    return (
        <div className="max-w-[1550px] w-[90%] mx-auto raleway">
            <Helmet>
                <title>Eastward - Your List</title>
            </Helmet>
            <div className='text-center my-12'>
                <h1 className='text-4xl font-bold'>{user.displayName}&apos;s list</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
                {
                    places.map(place => {
                        return <PlaceCard key={place._id} place={place} access={true} handleDeletePlace={handleDeletePlace} />
                    })
                }
            </div>
        </div>
    );
};

export default MyList;