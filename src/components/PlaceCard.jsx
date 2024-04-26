import { TbLocationUp } from "react-icons/tb";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PlaceCard = ({ place }) => {
    const { touristsSpotName, photoURL, location, averageCost } = place || {};
    return (
        <Link className="relative flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div>
                <figure className="object-cover w-full">
                    <img src={photoURL} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 hover:scale-105 transition-all" />
                </figure>
                <div className="p-2 absolute w-[85%]">
                    <div className="bg-white border transform -translate-y-16 p-5">
                        <p className="uppercase font-semibold text-green-900">7-10 days</p>
                        <p className="flex items-center gap-1 text-slate-500"><TbLocationUp />{location}</p>
                    </div>
                </div>
                <h1 className="text-xl font-bold mt-16 text-center raleway">{touristsSpotName}</h1>
                <p className="absolute top-0 left-3 text-white bg-green-700 py-2 px-4"><span className="text-xl">${averageCost}</span>/person</p>
            </div>
        </Link>
    );
};
PlaceCard.propTypes = {
    place: PropTypes.object.isRequired,
};
export default PlaceCard;