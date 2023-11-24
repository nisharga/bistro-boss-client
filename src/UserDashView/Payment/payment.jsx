import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import InjectedCheckoutForm from "./InjectedCheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from './../../hooks/useCart'; 

import { useEffect, useState } from "react"; 

const stripePromise = loadStripe(`${import.meta.env.VITE_Publishable_Key}`);
    


const Payment = () => {
    const [clientSecret, setClientSecret] = useState("");
    
    const [axiosSecure] = useAxiosSecure(); 
    const [cart] = useCart();
    const price = cart.data?.reduce((accumulator, currentOrder) => {
        return accumulator + currentOrder.price;
      }, 0).toFixed(2); 
    console.log("🚀 ~ file: payment.jsx:22 ~ price ~ price:", price)

    useEffect(() => {
      axiosSecure.post('/api/v1/order/create-payment-intent', {price})
      .then(res => {
        setClientSecret(res.data.data)
      })
    
    }, [price, axiosSecure])
    
    
  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };


  
    return (
        <div className="pt-10 flex flex-col items-center">
            <SectionTitle title={`payment ${price}$`}  subtitle="confirm your order" />
             
            <div className="lg:w-2/3
             p-4 min-w-[300px]">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <InjectedCheckoutForm />
                </Elements>
            )}
            </div>
        </div>
    );
};

export default Payment;