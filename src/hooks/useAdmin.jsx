import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
  // auth data
  const {user, loading} = useContext(AuthContext)
  // use AxiosSequre
  const [axiosSecure] = useAxiosSecure();

  const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
     queryKey: ['isAdmin', user?.email],
     enabled: !loading,
     queryFn: async () => {
        const res = await axiosSecure.get(`/api/v1/user/admin/${user?.email}`)
        return res.data.data.admin
     }
  })
  return [isAdmin, isAdminLoading]
}

export default useAdmin