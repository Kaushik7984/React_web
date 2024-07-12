import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from './Reducer'
// import { axios } from 'axios'

const AppContext = createContext();

const initialState = {
    name: " ",
    image: " ",
    services: [],
}

const API = "https://jsonplaceholder.typicode.com/posts"


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
                    name: "Kaushik Tapaniya",
                    image: "./images/about1.svg"
                },
            }
        )
    }


    const getServices = async (url) => {
        try {
            // const res = await axios.get(url);

            const res = await fetch(url);
            const data = await res.json();
            dispatch({
                type: "GET_SERVICES", payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getServices(API);
    }, [])


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