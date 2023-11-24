import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProviders"
import Loading from "../../Shared/Loading/Loading";

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const loadingStyle = <>
  <div className="mt-20 w-full h-full flex justify-center items-center">
  <div className="">
    <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
    <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"  className="rounded-full h-28 w-28"/>
</div>
  </div>
  </>
  let location = useLocation();
    if (loading) {
        return loadingStyle;
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
}

export default PrivateRoute