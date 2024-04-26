import PropTypes from "prop-types";
import { createContext } from "react";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={{ name: 'provider' }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};
export default AuthProvider;