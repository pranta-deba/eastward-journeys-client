import { TbEyeShare, TbLocation } from "react-icons/tb";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import UseAllProvider from "../hooks/UseAllProvider";

const PlaceCard = ({ place, access, handleDeletePlace }) => {
    const { user, themeMail } = UseAllProvider();
    const { _id: id, touristsSpotName, countryName, photoURL, location, averageCost, travelTime } = place || {};
    return (
        <div data-aos="fade-up" className="relative flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div>
                <Link to={`/details/${id}`} className="w-full h-[100px]">
                    <img src={photoURL} alt="" className="w-full mb-4  dark:bg-gray-500 hover:scale-105 transition-all h-[250px] object-cover" />
                </Link>
                <div className="p-2 absolute w-[85%]">
                    <div className={`transform -translate-y-16 p-5 ${themeMail === "synthwave" ? "bg-blur" : "bg-white border "}`}>
                        <div className="flex justify-between">
                            <p className="uppercase font-semibold text-green-900">{travelTime} days</p>
                            <p className="capitalize font-semibold text-green-900">{countryName.split(" ")[0]}</p>
                        </div>
                        <p className={`flex items-center gap-1 ${themeMail === "synthwave" ? "text-black" : "text-slate-500"}`}><TbLocation />{location}</p>
                    </div>
                </div>
                <h1 className="text-xl font-bold mt-16 text-center raleway">{touristsSpotName}</h1>
                <div className="flex justify-center items-center my-3 gap-4 relative z-20">
                    <Link to={`/details/${id}`} className="flex text-center items-center gap-1  text-green-700 font-light"><TbEyeShare />Read more ..</Link>
                    {access && user ?
                        <><Link to={`/edit/${id}`} className="flex items-center gap-1 text-green-400"><FaEdit />Edit</Link>
                            <button onClick={() => handleDeletePlace(id)} className="flex items-center gap-1 text-red-400"><RiDeleteBin6Line />Delete</button></> : ""
                    }
                </div>
                <p className="absolute top-0 left-3 text-white bg-green-700 py-2 px-4"><span className="text-xl">${averageCost}</span>/per day</p>
            </div>
        </div>
    );
};
PlaceCard.propTypes = {
    place: PropTypes.object.isRequired,
    access: PropTypes.bool.isRequired,
    handleDeletePlace: PropTypes.func,
};
export default PlaceCard;