import {createContext,useContext, useEffect, useState} from "react";
export const AppContext = createContext({});

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [theme, setTheme] = useState('dark');

    useEffect(()=> {
        const user = {
            name: 'Dhiya Ulhaq',
            avatar: 'https://randomuser.me/api/portraits/women/96.jpg'
        };
        setUser(user);
    },[]);

    const appContextValue = {
        user,
        setUser,
        theme,
        setTheme
    };

    return(
        <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>
    );
}

export const useAppContext = () => {
    return useContext(AppContext);
}