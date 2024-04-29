import { useEffect, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UseAllProvider from "../hooks/UseAllProvider";
import { Helmet } from "react-helmet-async";

const AddTouristsSpot = () => {
    const { user } = UseAllProvider();
    const continents = useLoaderData();
    const [continentId, setContinentId] = useState('');
    const [country, setCountry] = useState([]);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    useEffect(() => {
        fetch(`https://eastward-journeys-server.vercel.app/continents/${continentId}`)
            .then((res) => res.json())
            .then(data => {
                setCountry(data);
            })
    }, [continents, continentId]);

    const handleCreateTouristSpot = (e) => {
        e.preventDefault();
        const doc = {
            touristsSpotName: e.target.touristsSpotName.value,
            continentId: e.target.continentId.value,
            countryName: e.target.countryName.value,
            photoURL: e.target.photoURL.value,
            location: e.target.location.value,
            averageCost: e.target.averageCost.value,
            description: e.target.description.value,
            travelTime: e.target.travelTime.value,
            totalVisitorsPerYear: e.target.totalVisitorsPerYear.value,
            seasonality: e.target.seasonality.value,
            userEmail: user.email || null,
            userName: user.displayName || null,
        }
        if (doc.touristsSpotName === "" ||
            doc.photoURL === "" ||
            doc.averageCost === "" ||
            doc.description === "" ||
            doc.countryName === "" ||
            doc.continentId === "" ||
            doc.travelTime === "" ||
            doc.totalVisitorsPerYear === "" ||
            doc.seasonality === "") {
            toast.error("Input field required.!", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Bounce
            });
            return;
        }
        fetch('https://eastward-journeys-server.vercel.app/add_places', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doc)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Place added successfully", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Flip
                    });
                    e.target.reset();
                } else {
                    toast.error("Place not added, please try again!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Flip
                    });
                }
            })
    }
    const handleCountiesId = (e) => {
        setContinentId(e.target.value);
    }
    return (
        <div className="max-w-[1550px] w-[90%] mx-auto raleway mb-8 min-h-screen">
            <Helmet>
                <title>Eastward - Add Spot</title>
            </Helmet>
            <div className='my-8 space-x-2 flex flex-wrap justify-center items-center gap-2 raleway'>
                <button className="text-2xl cursor-wait text-green-700"><IoAddCircleSharp /></button>
                <Link to={"/add_tourists_spot"} className={`px-4 rounded border-2 border-green-800 py-1 capitalize bg-green-800 text-white`}>add Tourists spot</Link>
                <Link to={"/add_country"} className={`px-4 rounded border-2 border-green-800 py-1 capitalize focus:bg-green-800 focus:text-white`}>add country</Link>
                <Link to={"/add_continent"} className={`px-4 rounded border-2 border-green-800 py-1 capitalize focus:bg-green-800 focus:text-white`}>add continent</Link>
            </div>
            <hr />
            <div className="md:w-[70%] mx-auto mt-8">
                <form onSubmit={handleCreateTouristSpot} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Tourists Spot Name</label>
                        <input className="input border-2 border-green-800" type="text" name="touristsSpotName" placeholder="Tourists Spot Name" required />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Select Continent</label>
                        <select onChange={handleCountiesId} name="continentId" className="input border-2 border-green-800" required>
                            <option value="">Select</option>
                            {
                                continents?.map(category => {
                                    return <option value={category._id} key={category._id}>{category.continentName}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Select Country</label>
                        <select name="countryName" className="input border-2 border-green-800" required>
                            <option value="">Select</option>
                            {
                                country?.map(con => <option value={con.countryName} key={con._id}>{con.countryName}</option>)
                            }
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Photo URL</label>
                        <input className="input border-2 border-green-800" type="text" name="photoURL" placeholder="PhotoURL" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Location</label>
                        <input className="input border-2 border-green-800" type="text" name="location" placeholder="Location" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Average Cost</label>
                        <input className="c input border-2 border-green-800" type="text" name="averageCost" placeholder="Average Cost" required />
                    </div>
                    <div className="md:col-span-3 flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Description</label>
                        <textarea className="input border-2 border-green-800" name="description" placeholder="Description" required></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Select Seasonality</label>
                        <select name="seasonality" className="input border-2 border-green-800" required>
                            <option value="All Year">All Year</option>
                            <option value="Spring">Spring</option>
                            <option value="Summer" >Summer</option>
                            <option value="Fall">Fall</option>
                            <option value="Winter">Winter</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Travel Time</label>
                        <input className="input border-2 border-green-800" type="text" name="travelTime" placeholder="Travel Time" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Total Visitors Per Year</label>
                        <input className="input border-2 border-green-800" type="text" name="totalVisitorsPerYear" placeholder="Total Visitors Per Year" required />
                    </div>
                    <div className="space-x-2">
                        <input className=" cursor-pointer btn bg-green-800 text-white hover:text-black" type="submit" value="Add" />
                        <Link to={"/"} className=" cursor-pointer btn ">Cancel</Link>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddTouristsSpot;