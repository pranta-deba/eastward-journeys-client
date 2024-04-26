import { FaMapLocationDot } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiUserLocationFill } from "react-icons/ri";

const Welcome = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 max-w-[1550px] w-[90%] mx-auto poppins" >
            <div className="flex-1 grid grid-cols-2 gap-3 justify-center items-center">
                <div className="relative group overflow-hidden bg-green-700">
                    <figure className="overflow-hidden opacity-70"><img className="h-full w-full hover:scale-150 transition-all rounded-xl" src="https://i.ibb.co/Wn1SyXH/a-group-of-people-navigating-together-in-nature-to-1.jpg" alt="" /></figure>
                    <p className="absolute top-3 -left-5 rounded-md bg-green-500 text-4xl text-white px-12 py-2 group-hover:-left-2 transition-all"><GrGroup /></p>
                    <div className="absolute bottom-0 p-4 text-white">
                        <p className="text-2xl raleway">Activities</p>
                        <p className="text-sm hidden md:flex">A small river named Duden flows by their place and supplies it with the necessary</p>
                    </div>
                </div>
                <div className="relative group overflow-hidden bg-green-700">
                    <figure className="overflow-hidden opacity-70"><img className="h-full w-full hover:scale-150 transition-all rounded-xl" src="https://i.ibb.co/9ZyxRVt/group-of-friends-1.jpg" alt="" /></figure>
                    <p className="absolute top-3 -left-5 rounded-md bg-green-500 text-4xl text-white px-12 group-hover:-left-2 transition-all py-2"><FaMapLocationDot/></p>
                    <div className="absolute bottom-0 p-4 text-white">
                        <p className="text-2xl raleway">Travel Arrangements</p>
                        <p className="text-sm hidden md:flex">A small river named Duden flows by their place and supplies it with the necessary</p>
                    </div>
                </div>
                <div className="relative group overflow-hidden bg-green-700">
                    <figure className="overflow-hidden opacity-70"><img className="h-full w-full hover:scale-150 transition-all rounded-xl" src="https://i.ibb.co/mcTRxkd/two-young-African-American-men-and-women-in-the.jpg" alt="" /></figure>
                    <p className="absolute top-3 -left-5 rounded-md bg-green-500 text-4xl text-white px-12 group-hover:-left-2 transition-all py-2"><MdOutlineManageAccounts/></p>
                    <div className="absolute bottom-0 p-4 text-white">
                        <p className="text-2xl raleway">Private Guide</p>
                        <p className="text-sm hidden md:flex">A small river named Duden flows by their place and supplies it with the necessary</p>
                    </div>
                </div>
                <div className="relative group overflow-hidden bg-green-700">
                    <figure className="overflow-hidden opacity-70"><img className="h-full w-full hover:scale-150 transition-all rounded-xl" src="https://i.ibb.co/k5y88VY/People-Joining-to-take-part-in-revolution.jpg" alt="" /></figure>
                    <p className="absolute top-3 -left-5 rounded-md bg-green-500 text-4xl text-white px-12 group-hover:-left-2 transition-all py-2"><RiUserLocationFill/></p>
                    <div className="absolute bottom-0 p-4 text-white">
                        <p className="text-2xl raleway">Location Manager</p>
                        <p className="text-sm hidden md:flex">A small river named Duden flows by their place and supplies it with the necessary</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 space-y-8">
                <h1 className="">Welcome to <span className="text-lx font-semibold text-green-900">Eastward journeys</span></h1>
                <h1 className="text-4xl font-bold">Its time to start your <br /> <span className="text-green-800">Adventure</span></h1>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    <br />
                    <br />
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
        </div>
    );
};

export default Welcome;