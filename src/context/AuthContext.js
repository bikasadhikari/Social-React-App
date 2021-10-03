import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
            "_id": "614f69e03758eebdfd4d83e0",
            "username": "Bikas",
            "email": "bikasadhikari333@gmail.com",
            "profilePicture": "",
            "coverPicture": "",
            "followers": [],
            "following": ["614f7bd9904b53cf148123b9"],
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{user: state.user, isFetching: state.isFetching, error: state.error, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}