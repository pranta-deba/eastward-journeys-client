import { Link } from "react-router-dom";

const JoinWith = () => {
    return (
        <div>
            <div className="bg-[url('/banner4.jpg')] bg-no-repeat bg-cover bg-center bg-fixed my-14 poppins">
                <div className="text-center bg-green-300 py-20 px-4 bg-opacity-30 space-y-5">
                    <p>WE WILL SEE YOU</p>
                    <h1 className="text-4xl font-bold text-white">Enjoy 30% Off On First Trip</h1>
                    <Link to="/tourists_spot" className="btn bg-green-800 text-white hover:text-black border-none outline-none px-8">Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default JoinWith;