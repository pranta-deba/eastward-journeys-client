import { useEffect } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddCounty = () => {
    const continents = useLoaderData();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    const handleCreateCountry = (e) => {
        e.preventDefault();
        const doc = {
            countryName: e.target.countryName.value,
            continentId: e.target.continentId.value,
            photoURL: e.target.photoURL.value,
            description: e.target.description.value
        }
        if (doc.countryName === "" ||
            doc.continentId === "" ||
            doc.description === "" ||
            doc.photoURL === "") {
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
        fetch('http://localhost:5000/add_country', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doc)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Country added successfully", {
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
                    toast.error("Country not added, please try again!", {
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
    return (
        <div className="max-w-[1550px] w-[90%] mx-auto raleway mb-8 min-h-screen">
            <div className='my-8 space-x-2 flex flex-wrap justify-center items-center gap-2 raleway'>
                <button className="text-2xl cursor-wait text-green-700"><IoAddCircleSharp /></button>
                <Link to={"/add_tourists_spot"} className={`px-4 rounded border-2 border-green-800 py-1 capitalize focus:bg-green-800 focus:text-white`}>add Tourists spot</Link>
                <Link to={"/add_country"} className={`px-4 rounded border-2 border-green-800 py-1 capitalize bg-green-800 text-white`}>add country</Link>
                <Link to={"/add_continent"} className={`px-4 rounded border-2 border-green-800 py-1 capitalize focus:bg-green-800 focus:text-white`}>add continent</Link>
            </div>
            <hr />
            <div className="md:w-[50%] mx-auto mt-8">
                <form onSubmit={handleCreateCountry} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Country Name</label>
                        <input className="input border-2 border-green-800" type="text" name="countryName" placeholder="Country Name" required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Continent</label>
                        <select name="continentId" className="input border-2 border-green-800" required>
                            <option value={-1}>Select</option>
                            {
                                continents.map(category => {
                                    return <option value={category._id} key={category._id}>{category.continentName}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Photo URL</label>
                        <input className="col-span-2 input border-2 border-green-800" type="text" name="photoURL" placeholder="PhotoURL" required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-light mb-2">Description</label>
                        <textarea className="col-span-2 input border-2 border-green-800" name="description" placeholder="Description" required></textarea>
                    </div>
                    <div className="space-x-2">
                        <input className=" cursor-pointer btn bg-green-800 text-white hover:text-black" type="submit" value="Add" />
                        <Link to={-1} className=" cursor-pointer btn ">Cancel</Link>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddCounty;