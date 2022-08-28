import {createContext, useContext, useEffect, useReducer, useState} from "react";
export const ThemeContext = createContext({});


const reducer = (state, action) => {
    switch(action.type) {
        case 'toggleTheme' :
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light'};
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const initialState = {
    theme: 'dark'
}

export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // const [user, setUser] = useState({});
    // const [theme, setTheme] = useState('dark');

    const themeContextValue = [state, dispatch];

    return(
        <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>
    );
}

export const useThemeContext = () => {
    return useContext(ThemeContext);
}