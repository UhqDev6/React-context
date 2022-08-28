
import {useThemeContext} from "../context/theme-context";
export const ToggleTheme = () => {
    const [, dispatch] = useThemeContext();
    return(
        <div>
            <button
                onClick={()=> {
                    dispatch({type: 'toggleTheme'})
                }}
            >Toggle Theme</button>
        </div>
    );
}