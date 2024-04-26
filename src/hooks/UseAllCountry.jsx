import { useEffect, useState } from "react";

const UseAllCountry = () => {
    const [allCountry, setAllCountry] = useState([]);
    const [allCountryLoading, setAllCountryLoading] = useState(true);

    useEffect(() => {
        const handleData = async () => {
            const res = await fetch("http://localhost:5000/countries");
            const data = await res.json();
            setAllCountry(data);
            setAllCountryLoading(false);
        };
        setAllCountryLoading(true);
        handleData();
    }, []);

    return { allCountry, allCountryLoading }
};

export default UseAllCountry;