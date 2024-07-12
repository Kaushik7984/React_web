import { createContext, useContext, useReducer } from "react";
import reducer from './Reducer'

const AppContext = createContext();

const initialState = {
    name: " ",
    image: " ",
}



const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    const updateHomePage = () => {
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload: {
                    name: "Kaushik",
                    image: "./images/hero.svg"
                },
            }
        )
    }
    
    const updateAboutPage = () => {
        return dispatch(
            {
                type: "ABOUT_UPDATE",
                payload: {
                    name: "Tapaniya",
                    image: "./images/about1.svg"
                },
            }
        )
    }

    
    return (
        <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobleContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobleContext }