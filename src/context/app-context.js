import {createContext, useContext, useEffect, useReducer, useState} from "react";
export const AppContext = createContext({});


const reducer = (state, action) => {
    switch(action.type) {
        case 'updateUser' :
            return { ...state, user: action.payload};
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const initialState = {
    user: {}
}

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // const [user, setUser] = useState({});
    // const [theme, setTheme] = useState('dark');

    useEffect(()=> {
        const user = {
            name: 'Dhiya Ulhaq',
            avatar: 'https://randomuser.me/api/portraits/women/96.jpg'
        };
        // setUser(user);
        dispatch({
            type: 'updateUser',
            payload: user
        });
    },[]);

    const appContextValue = [state, dispatch];

    return(
        <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>
    );
}

export const useAppContext = () => {
    return useContext(AppContext);
}