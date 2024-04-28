import { Navigate, useLocation } from "react-router-dom";
import UseAllProvider from "../hooks/UseAllProvider";
import PropTypes from "prop-types";



const Private = ({ children }) => {
    const { user } = UseAllProvider();
    const location = useLocation();
    if (!user) {
        return <Navigate to="/signIn" state={location.pathname}/>;
    }

    return children;
};
Private.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Private;