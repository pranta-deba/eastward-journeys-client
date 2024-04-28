import { Link, useLoaderData } from "react-router-dom";
import UseAllContinents from "../hooks/UseAllContinents";
import { useEffect, useState } from "react";
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UseAllProvider from "../hooks/UseAllProvider";

const EditPlace = () => {
    const singlePlace = useLoaderData();
    const { allContinents } = UseAllContinents();
    const [continentId, setContinentId] = useState('');
    const [country, setCountry] = useState([]);
    const { user } = UseAllProvider();
    const { _id: id, touristsSpotName, description, photoURL, location, travelTime, totalVisitorsPerYear, averageCost } = singlePlace || {};
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/continents/${continentId}`)
            .then((res) => res.json())
            .then(data => {
                setCountry(data);
            })
    }, [allContinents, continentId]);

    const handleUpdateTouristSpot = (e) => {
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
        fetch(`http://localhost:5000/places/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doc)
        })
            .then((response) => response.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Place update successfully", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Flip
                    });
                } else {
                    toast.error("No fields are changes.! ", {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Bounce
                    });
                }
            });
    }

    const handleCountiesId = (e) => {
        setContinentId(e.target.value);
    }

    return (
        <div className="dark:bg-gray-100 py-6 md:py-0 dark:text-gray-800 max-w-[1550px] w-[90%] mx-auto raleway mb-8 min-h-screen">
            <h1 className="text-center text-3xl font-bold my-9">Edit <span className="text-green-800">{touristsSpotName}</span> spot</h1>
            <div className="md:w-[70%] mx-auto">
                <form onSubmit={handleUpdateTouristSpot} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Tourists Spot Name</label>
                        <input className="input border-2 border-green-800" type="text" name="touristsSpotName" placeholder="Tourists Spot Name" defaultValue={touristsSpotName} required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Select Continent</label>
                        <select onChange={handleCountiesId} name="continentId" className="input border-2 border-green-800" required>
                            <option value="">Select</option>
                            {
                                allContinents.map(category => {
                                    return <option value={category._id} key={category._id}>{category.continentName}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Select Country</label>
                        <select name="countryName" className="input border-2 border-green-800" required>
                            {
                                country.map(con => <option value={con.countryName} key={con._id}>{con.countryName}</option>)
                            }
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Photo URL</label>
                        <input className="input border-2 border-green-800" type="text" name="photoURL" placeholder="PhotoURL" defaultValue={photoURL} required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Location</label>
                        <input className="input border-2 border-green-800" type="text" name="location" placeholder="Location" defaultValue={location} required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Average Cost</label>
                        <input className="c input border-2 border-green-800" type="text" name="averageCost" placeholder="Average Cost" defaultValue={averageCost} required />
                    </div>
                    <div className="md:col-span-3 flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Description</label>
                        <textarea className="input border-2 border-green-800" name="description" placeholder="Description" defaultValue={description} required></textarea>
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
                        <input className="input border-2 border-green-800" type="text" name="travelTime" placeholder="Travel Time" defaultValue={travelTime} required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Total Visitors Per Year</label>
                        <input className="input border-2 border-green-800" type="text" name="totalVisitorsPerYear" placeholder="Total Visitors Per Year" defaultValue={totalVisitorsPerYear} required />
                    </div>
                    <div className="space-x-2">
                        <input className=" cursor-pointer btn bg-green-800 text-white hover:text-black" type="submit" value="Update" />
                        <Link to={-1} className=" cursor-pointer btn ">Cancel</Link>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default EditPlace;