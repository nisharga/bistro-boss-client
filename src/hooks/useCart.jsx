import {
    useQuery, 
  } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const useCart = () => {
    // auth data
    const {user} = useContext(AuthContext)
     // Queries
    const {data: cart = [], refetch } = useQuery({ 
        queryKey: ['cart', user?.email], 
        queryFn: async() => {
            const response = await fetch(`http://localhost:5000/api/v1/order/all?email=${user?.email}`)
            return response.json();
            }
        })
        return [cart, refetch]
}
export default useCart;