import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProviders" 

const PrivateRoute = ({children}) => {
  const {user } = useContext(AuthContext);
   
  let location = useLocation();
    if (user) {
        return children;
    }
    if (!user) {
      <Navigate to='/login' state={{from: location}} replace></Navigate>;
    }
    

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
}

export default PrivateRoute