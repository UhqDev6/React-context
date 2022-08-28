import {useState, useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type){
        case 'increment' :
            return {count : state.count + action.payload};
        case 'decrement' :
            return {count : state.count - action.payload};
        case 'toggleTheme' :
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light'}
        default:
            throw new Error();
    }
}

const initialState = {
    count: 0,
    theme: 'light'
}

export const Reducer = () => {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <>
            <button onClick={()=> dispatch({ type :'increment', payload : 3})}>+</button>
            <span>{state.count}</span>
            <button onClick={()=> dispatch({ type : 'decrement', payload : 4})}>-</button>
            <br/>
            Theme: {state.theme}
            <br/>
            <button onClick={()=> dispatch({type : 'toggleTheme'})}>Toggle Theme</button>
        </>
    );
}
