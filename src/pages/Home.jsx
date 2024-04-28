import Banner from "../components/Banner";
import Destination from "../components/Destination";
import TourDestination from "../components/TourDestination";
import Welcome from "../components/Welcome";
import JoinWith from "./JoinWith";

const Home = () => {

    return (
        <div>
            <Banner />
            <Welcome />
            <Destination />
            <TourDestination />
            <JoinWith />
        </div>
    );
};

export default Home;