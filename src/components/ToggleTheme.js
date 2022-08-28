
import {useAppContext} from "../context/app-context";
export const ToggleTheme = () => {
    const context = useAppContext();
    return(
        <div>
            <button
                onClick={()=> {
                    context.setTheme(context.theme === 'light' ? 'dark' : 'light');
                }}
            >Toggle Theme</button>
        </div>
    );
}