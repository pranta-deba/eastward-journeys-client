import Banner from "../components/Banner";
import Destination from "../components/Destination";
import TourDestination from "../components/TourDestination";
import Welcome from "../components/Welcome";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Welcome/>
            <Destination/>
            <TourDestination/>
        </div>
    );
};

export default Home;