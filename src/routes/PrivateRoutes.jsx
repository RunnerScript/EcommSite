import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ element, isUserAuthenticated }) => {
    return (
        <>
            {isUserAuthenticated ? (element) : (<Navigate to='/login' />)}
        </>
    )
}
export default PrivateRoutes;