import { useEffect, useState } from "react";

const UseAllContinents = () => {
    const [allContinents, setAllContinents] = useState([]);
    const [allContinentsLoading, setAllContinentsLoading] = useState(true);

    useEffect(() => {
        const handleData = async () => {
            const res = await fetch("https://eastward-journeys-server.vercel.app/continents");
            const data = await res.json();
            setAllContinents(data);
            setAllContinentsLoading(false);
        };
        setAllContinentsLoading(true);
        handleData();
    }, []);

    return { allContinents, allContinentsLoading }
};

export default UseAllContinents;