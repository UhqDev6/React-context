
import {useAppContext} from "../context/app-context";

export const NavbarUserText = () => {
    const [state] = useAppContext();
    console.log('navbarUserText: render');
    return(
        <>
            <span>Hi, {state?.user?.name}</span>
        </>
    );
}