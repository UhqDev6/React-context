
import {useAppContext} from "../context/app-context";

export const NavbarUserAvatar = () => {
    const context = useAppContext();
    return(
        <>
            <img src={context.user.avatar} alt="avatar" width="50"/>
        </>
    );
}