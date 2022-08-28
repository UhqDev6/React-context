
import {useAppContext} from "../context/app-context";
export const Setting = () => {
    const context = useAppContext();
    return(
        <>
            <input
                type="text"
                onChange={(e) => {
                    context.setUser({
                        ...context.user,
                        name: e.target.value,
                    })
                }}
                placeholder="Change name"
                value={context.user.name ?? ''}
            />
        </>
    );
}