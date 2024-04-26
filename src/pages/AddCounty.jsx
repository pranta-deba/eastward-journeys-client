import { Link, useLoaderData } from "react-router-dom";
import { Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddCounty = () => {
    const continents = useLoaderData();

    const handleCreateCountry = (e) => {
        e.preventDefault();
        const doc = {
            countryName: e.target.countryName.value,
            continentId: e.target.continentId.value,
            photoURL: e.target.photoURL.value,
            description: e.target.description.value
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
        <div>
            <Link to={"/add_continent"} className="btn">add continent</Link>
            <Link to={"/add_tourists_spot"} className="btn">add_tourists_spot</Link>

            <div className="flex justify-center items-center">
                <form onSubmit={handleCreateCountry} className="grid grid-cols-2 gap-3">
                    <input className="input border-2 border-green-800" type="text" name="countryName" placeholder="Country Name" />
                    <select name="continentId" className="input border-2 border-green-800">
                        <option value={-1}>Select Continent</option>
                        {
                            continents.map(category => {
                                return <option value={category._id} key={category._id}>{category.continentName}</option>
                            })
                        }
                    </select>
                    <input className="col-span-2 input border-2 border-green-800" type="text" name="photoURL" placeholder="PhotoURL" />
                    <textarea className="col-span-2 input border-2 border-green-800" name="description" placeholder="Description"></textarea>
                    <input className="col-span-2 cursor-pointer btn input border-2 border-green-800" type="submit" value="Create Country" />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddCounty;