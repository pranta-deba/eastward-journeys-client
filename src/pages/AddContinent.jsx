import { Link } from "react-router-dom";
import { Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddContinent = () => {
    const handleCreateContinent = (e) => {
        e.preventDefault();
        const doc = {
            continentName: e.target.continentName.value,
            photoURL: e.target.photoURL.value,
            description: e.target.description.value
        }

        fetch('http://localhost:5000/add_continent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doc)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Continent added successfully", {
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
                    toast.error("Continent not added, please try again!", {
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
            <Link to={"/add_tourists_spot"} className="btn">add tourists spot</Link>
            <Link to={"/add_country"} className="btn">add_country</Link>


            <div className="flex justify-center items-center">
                <form onSubmit={handleCreateContinent} className="grid grid-cols-2 gap-3">
                    <input className="input border-2 border-green-800" type="text" name="continentName" placeholder="Continent Name" />
                    <input className="input border-2 border-green-800" type="text" name="photoURL" placeholder="PhotoURL" />
                    <textarea className="col-span-2 input border-2 border-green-800" name="description" placeholder="Description"></textarea>
                    <input className="col-span-2 cursor-pointer btn input border-2 border-green-800" type="submit" value="Create Continent" />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddContinent;