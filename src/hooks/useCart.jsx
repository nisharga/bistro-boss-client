/* eslint-disable react-hooks/rules-of-hooks */
import {
    useQuery, 
  } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
// import useAxiosSecure from './useAxiosSecure'; 

const useCart = () => {
    // auth data
    const {user} = useContext(AuthContext)
    // use AxiosSequre
    // const [axiosSecure] = useAxiosSecure();
    // token we get from localStroage
    const token = localStorage.getItem('access-token');


     // Queries
    const {refetch, data: cart = [] } = useQuery({ 
        queryKey: ['cart', user?.email], 
        queryFn: async() => {
            const response = await fetch(`http://localhost:5000/api/v1/order/searchbyemail/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return response.json();
            }

             /* queryFn: async () => {
                 const res = await axiosSecure(`/api/v1/order/searchbyemail/${user?.email}`)
                 console.log('res from axios', res)
                 return res.data;
            } */

        })
        return [cart, refetch]
}
export default useCart;