import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProviders"
import Loading from "../../Shared/Loading/Loading";

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  let location = useLocation();
    if (loading) {
        return <Loading/>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
}

export default PrivateRoute