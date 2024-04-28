import { useEffect, useState } from "react";

const UseAllPlaces = () => {
    const [allPlaces, setAllPlaces] = useState([]);
    const [allPlacesLoading, setAllPlacesLoading] = useState(true);

    useEffect(() => {
        const handleData = async () => {
            const res = await fetch("https://eastward-journeys-server.vercel.app/places");
            const data = await res.json();
            setAllPlaces(data);
            setAllPlacesLoading(false);
        };
        setAllPlacesLoading(true);
        handleData();
    }, []);

    return { allPlaces, allPlacesLoading }

};

export default UseAllPlaces;