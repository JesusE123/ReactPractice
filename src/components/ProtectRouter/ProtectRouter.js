import { Navigate,} from "react-router-dom";
import {useUserContext} from '../../Providers/UserProvider';
const ProtectRouter = ({ children, ...props }) => {
    const {user} = useUserContext();
    const getStored = localStorage.getItem('login')
    if (getStored) {
        return children;    
    }
    console.log('hola2')
    return(
        <Navigate to="/" replace={true} />
    )

}


export { ProtectRouter };