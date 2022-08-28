
import {useAppContext} from "../context/app-context";

export const NavbarUserText = () => {
    const context = useAppContext();
    return(
        <>
            <span>Hi, {context.user.name}</span>
        </>
    );
}