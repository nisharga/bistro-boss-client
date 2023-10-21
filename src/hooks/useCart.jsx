import {
    useQuery, 
  } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const useCart = () => {
    // auth data
    const {user} = useContext(AuthContext)
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
        })
        return [cart, refetch]
}
export default useCart;