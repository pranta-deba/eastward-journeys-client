import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddTouristsSpot = () => {

    const continents = useLoaderData();
    const [continentId, setContinentId] = useState('');
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/continents/${continentId}`)
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
            seasonality: e.target.seasonality.value,
            userEmail: "someUser@gmail.com",
            userName: "someUser",
        }
        
        // fetch('http://localhost:5000/add_country', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(doc)
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             toast.success("Continent added successfully", {
        //                 position: "top-center",
        //                 autoClose: 5000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: undefined,
        //                 transition: Flip
        //             });
        //             e.target.reset();
        //         } else {
        //             toast.error("Country not added, please try again!", {
        //                 position: "top-center",
        //                 autoClose: 5000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: undefined,
        //                 transition: Flip
        //             });
        //         }
        //     })
    }
    const handleCountiesId = (e) => {
        setContinentId(e.target.value);
    }
    return (
        <div>
            <Link to={"/add_continent"} className="btn">add continent</Link>
            <Link to={"/add_country"} className="btn">add_country</Link>
            <div className="flex justify-center items-center">
                <form onSubmit={handleCreateTouristSpot} className="grid grid-cols-2 gap-3">
                    <input className="input border-2 border-green-800" type="text" name="touristsSpotName" placeholder="Tourists Spot Name" />
                    <select onChange={handleCountiesId} name="continentId" className="input border-2 border-green-800">
                        <option value={-1}>Select Continent</option>
                        {
                            continents.map(category => {
                                return <option value={category._id} key={category._id}>{category.continentName}</option>
                            })
                        }
                    </select>
                    <select name="countryName" className="input border-2 border-green-800">
                        <option value={-1}>Select Country</option>
                        {
                            country.map(con => <option value={con.countryName} key={con._id}>{con.countryName}</option>)
                        }
                    </select>
                    <input className="input border-2 border-green-800" type="text" name="photoURL" placeholder="PhotoURL" />
                    <input className="input border-2 border-green-800" type="text" name="location" placeholder="Location" />
                    <input className="c input border-2 border-green-800" type="text" name="averageCost" placeholder="Average Cost" />
                    <textarea className="input border-2 border-green-800" name="description" placeholder="Description"></textarea>
                    <select name="seasonality" className="input border-2 border-green-800">
                        <option value={-1}>Select Seasonality</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Fall">Fall</option>
                        <option value="Winter">Winter</option>
                    </select>
                    <input className="input border-2 border-green-800" type="text" name="travelTime" placeholder="Travel Time" />
                    <input className="input border-2 border-green-800" type="text" name="totaVisitorsPerYear" placeholder="Total Visitors Per Year" />
                    <input className="col-span-2 cursor-pointer btn input border-2 border-green-800" type="submit" value="Create Tourist Spot" />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddTouristsSpot;