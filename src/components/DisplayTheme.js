
import {useThemeContext} from "../context/theme-context";
export const DisplayTheme = () => {
    const [state] = useThemeContext();
    console.log('DisplayTheme: render');
    return(
        <>
            {state.theme}
        </>
    );
}