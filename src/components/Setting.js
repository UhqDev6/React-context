
import {useAppContext} from "../context/app-context";
export const Setting = () => {
    const [state, dispatch] = useAppContext();
    return(
        <>
            <input
                type="text"
                onChange={(e) => {
                    dispatch({
                        type: 'updateUser',
                        payload: {
                            ...state.user,
                            name: e.target.value
                        }
                    })
                }}
                placeholder="Change name"
                value={state.user.name ?? ''}
            />
        </>
    );
}