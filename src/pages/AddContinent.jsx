import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoAddCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'

const AddContinent = () => {
    const [continents, setContinents] = useState([]);
    const [editContinent, setEditContinent] = useState('');
    const [againFetch, setAgainFetch] = useState(true);
    const formRef = useRef();
    const continentNameRef = useRef();
    const continentPhotoRef = useRef();
    const continentDesRef = useRef();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/continents')
            .then(res => res.json())
            .then(data => {
                setContinents(data);
            })
    }, [againFetch])

    const handleCreateContinent = (e) => {
        e.preventDefault();
        const doc = {
            continentName: e.target.continentName.value,
            photoURL: e.target.photoURL.value,
            description: e.target.description.value
        }
        if (doc.continentName === "" ||
            doc.photoURL === "" ||
            doc.description === "") {
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
                    setAgainFetch(!againFetch);
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

    const handleContinentEdit = id => {
        formRef.current.reset();
        setEditContinent(id);
        const filter = continents.find(item => item._id === id);
        continentNameRef.current.defaultValue = filter.continentName;
        continentPhotoRef.current.defaultValue = filter.photoURL;
        continentDesRef.current.defaultValue = filter.description;
        document.getElementById('my_modal_5').showModal();
    }

    const handleUpdateContinent = (e) => {
        e.preventDefault();
        const doc = {
            continentName: e.target.continentName.value,
            photoURL: e.target.photoURL.value,
            description: e.target.description.value
        }
        if (doc.continentName === "" ||
            doc.photoURL === "" ||
            doc.description === "") {
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
        fetch(`http://localhost:5000/continent/${editContinent}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doc)
        })
            .then((response) => response.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setAgainFetch(!againFetch);
                    toast.success("Continent update successfully", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        transition: Flip
                    });
                    document.getElementById('my_modal_5').close();
                } else {
                    setAgainFetch(!againFetch);
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
    const handleDeleteContinent = id => {
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
                fetch(`http://localhost:5000/continent/${id}`, {
                    method: 'DELETE',
                }).then(res => res.json())
                    .then(deleted => {
                        if (deleted.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This continent has been deleted.",
                                icon: "success"
                            });
                            const filteredContinent = continents.filter(place => place._id !== id);
                            setContinents(filteredContinent);
                        }
                    })
            }
        });
    }
    return (
        <div className="max-w-[1550px] w-[90%] mx-auto raleway mb-8 min-h-screen">
            <Helmet>
                <title>Eastward - Add Continent</title>
            </Helmet>
            <div className="min-h-[calc(100vh-100px)]">
                <div className='my-8 space-x-2 flex flex-wrap justify-center items-center gap-2 raleway'>
                    <button className="text-2xl cursor-wait text-green-700"><IoAddCircleSharp /></button>
                    <Link to={"/add_tourists_spot"} className={`px-4 rounded border-2 border-green-800 py-1 capitalize focus:bg-green-800 focus:text-white`}>add Tourists spot</Link>
                    <Link to={"/add_country"} className={`px-4 rounded border-2 border-green-800 py-1 capitalize focus:bg-green-800 focus:text-white`}>add country</Link>
                    <Link to={"/add_continent"} className={`px-4 rounded border-2 border-green-800 py-1 capitalize bg-green-800 text-white`}>add continent</Link>
                </div>
                <hr />
                <div className="md:w-[50%] mx-auto mt-8">
                    <form onSubmit={handleCreateContinent} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-sm font-light mb-2">Continent Name</label>
                            <input className="input border-2 border-green-800" type="text" name="continentName" placeholder="Continent Name" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-sm font-light mb-2">Photo URL</label>
                            <input className="input border-2 border-green-800" type="text" name="photoURL" placeholder="PhotoURL" required />
                        </div>
                        <div className="md:col-span-3 flex flex-col">
                            <label htmlFor="" className="text-sm font-light mb-2">Description</label>
                            <textarea className="col-span-2 input border-2 border-green-800" name="description" placeholder="Description" required></textarea>
                        </div>
                        <div className="space-x-2">
                            <input className=" cursor-pointer btn bg-green-800 text-white hover:text-black" type="submit" value="Add" />
                            <Link to={-1} className=" cursor-pointer btn ">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <h1 className="text-center text-4xl font-bold my-4">Continent List</h1>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead className="text-center">
                                <tr>
                                    <th className="">Continent</th>
                                    <th className="">Description</th>
                                    <th className="">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {
                                    continents?.map(continent => (
                                        <tr key={continent._id}>
                                            <td className="">
                                                <div className="flex flex-col md:flex-row items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={continent?.photoURL} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{continent?.continentName}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="">{continent?.description}</td>
                                            <td className=" md:flex space-y-4 md:space-y-0 md:space-x-3">
                                                <button onClick={() => {
                                                    handleContinentEdit(continent._id);
                                                }} className="btn bg-green-700 text-white btn-xs">Edit</button>
                                                <button onClick={() => handleDeleteContinent(continent._id)} className="btn bg-red-500 text-white btn-xs">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div>
                        <form ref={formRef} onSubmit={handleUpdateContinent} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-sm font-light mb-2">Continent Name</label>
                                <input className="input border-2 border-green-800" type="text" name="continentName" ref={continentNameRef} placeholder="Continent Name" required />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-sm font-light mb-2">Photo URL</label>
                                <input className="input border-2 border-green-800" type="text" name="photoURL" ref={continentPhotoRef} placeholder="PhotoURL" required />
                            </div>
                            <div className="md:col-span-3 flex flex-col">
                                <label htmlFor="" className="text-sm font-light mb-2">Description</label>
                                <textarea className="col-span-2 input border-2 border-green-800" name="description" ref={continentDesRef} placeholder="Description" required></textarea>
                            </div>
                            <div className="space-x-2">
                                <input className=" cursor-pointer btn bg-green-800 text-white hover:text-black" type="submit" value="Update" />
                                <a onClick={() => {
                                    document.getElementById('my_modal_5').close();
                                }} className=" cursor-pointer btn ">Cancel</a>
                            </div>
                        </form>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">

                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AddContinent;