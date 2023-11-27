/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { IoArrowBackCircle } from "react-icons/io5";
import { AuthContext } from "../../Providers/AuthProviders"; 
import useCart from "../../hooks/useCart";  


const Payconfirm = () => {
    
    const [trxid, setTexid] = useState(null) 
    const {user} = useContext(AuthContext) 
     
    const token = localStorage.getItem("access-token");

    const [cart] = useCart(); 

    //Payment data store in mongoDB
     const price = cart.data?.reduce((accumulator, currentOrder) => {
      return accumulator + currentOrder.price;
    }, 0).toFixed(2); 
    const cartItems = cart.data?.map(item => item.id)
    const productNames = cart.data?.map(item => item.name) 
    const date = `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`;

    const paymentInfo = {
        email: user?.email,
        trxid,
        price,
        quantity: cart?.data?.length | 0,
        date,
        cartItems,
        productNames,
        status: "pending"
    }
 
 
    
    useEffect(() => {
        // Get the URLSearchParams object
        const urlParams = new URLSearchParams(window.location.search);
    
        // Get the value of 'payment_intent' parameter
        const paymentIntent = urlParams.get('payment_intent');
        setTexid(paymentIntent)

            fetch("https://bistro-boss-server-three-olive.vercel.app/api/v1/payment", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(paymentInfo),
                })
                    .then((response) => response.json())
                    .then((data) => {
                    console.log("Success:", data);
                    })
                    .catch((error) => {
                    console.error("Error:", error);
                    });


      }, [paymentInfo]);


      if(trxid){
 
              
   

        

        setTimeout(() => {
            setTimeout(() => {
                // Redirect to the homepage
                // window.location.href = '/';
                     // delete from cart
    fetch(`https://bistro-boss-server-three-olive.vercel.app/api/v1/order/deletebyemail/${user?.email}`, {
        method: "DELETE",
        headers: {
          "authorization": `bearer ${token}`,
          "Content-Type": "application/json", // Adjust the content type as needed
        },
      })
        .then((res) => res.json())
        .then((val) => {
          if (val.deletedCount > 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Payment Sucessfull',
                showConfirmButton: false,
                timer: 1500
            })
          }
        });
        
              }, 2000);
          }, 2000);
      }

    return (
        <div className='h-full w-full flex items-center justify-center'>
            <div className="">
                <h2 className='text-2xl bold'>Payment Complete</h2>
                <div className="">
                    <h3 className="text-green-500 text-lg">Your Trx id is: <b>{trxid}</b></h3>
                </div>
                <Link to="/" className="btn btn-primary mt-5"> <IoArrowBackCircle/> <span className="mr-2">Back To HomePage</span> </Link>
            </div>
        </div>
    );
};

export default Payconfirm;