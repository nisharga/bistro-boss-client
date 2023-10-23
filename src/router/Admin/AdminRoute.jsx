import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProviders"
import Loading from "../../Shared/Loading/Loading";
import useAdmin from "../../hooks/useAdmin";
import Swal from "sweetalert2";

const AdminRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  let location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin();
  
    if (loading | isAdminLoading) {
        return <Loading/>
    }
    if (user && isAdmin) {
        return children;
    }
    if(!user | !isAdmin) {
        Swal.fire({
            title: '<strong>You are not an Admin</strong>',
            icon: 'info',
            html:
              'Login as <b>Admin</b>, ' + 
              'Then you can view this route',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false, 
          })
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
}

export default AdminRoute