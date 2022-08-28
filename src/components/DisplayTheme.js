
import {useAppContext} from "../context/app-context";
export const DisplayTheme = () => {
    const context = useAppContext();
    return(
        <>
            {context.theme}
        </>
    );
}