import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const UseAllProvider = () => {
    const all = useContext(AuthContext);
    return all
};

export default UseAllProvider;