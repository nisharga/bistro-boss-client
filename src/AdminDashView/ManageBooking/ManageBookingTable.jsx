/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

 
const ManageBookingTable = ( ) => {
    const [paymentDetails, setPaymentDetails] = useState("");
     
    
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get('/api/v1/payment')
        .then(res => {
            setPaymentDetails(res.data.data)
        })
      
      }, [paymentDetails])

      const handleStatusChange = (id) => {
        fetch(`https://bistro-boss-server-three-olive.vercel.app/api/v1/payment/${id}`, {
        method: "PATCH",
        headers: {
                "Content-type": "application/json",
        },
        body: JSON.stringify({
            "status": "delivary"
        }),
        })
    .then((response) => response.json())
    .then((data) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Status Updated Sucessfull',
            showConfirmButton: false,
            timer: 1500
        })
    });
      }
    
  return (
    <>
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr className="bg-[#D1A054] text-[#fff]">
                <th>#</th>
                <th>DATE</th>
                <th>Product Names</th>
                <th>Cart Items</th>
                <th>Actions</th>
            </tr>
            </thead>
              {/* head */}
            <tbody> 
            {/* map cartData to show all */}
            {
                paymentDetails ? paymentDetails?.map((tabledata, key) => {
                     
                     return  <>
                     <tr key={tabledata?._id}>
                     <th>{key + 1}</th> 
                     <td >
                      {tabledata?.date}
                     </td>
                   
                    <td className="w-3"><b>{tabledata?.productNames ? tabledata?.productNames : "not found"}</b></td>
                     
                    <td className="w-3"><b>{ tabledata?.cartItems ? tabledata?.cartItems.join("-") : "not found"  }</b></td>
                    
                     <th>
                     <button className="btn btn-primary"
                      onClick={() => handleStatusChange(tabledata?._id)}>Change Status - {tabledata?.status}</button>
                     </th>
                 </tr> </>
                     
                }) : "loading"
            } 
            
            </tbody> 
        </table>
    </div>
</>
  )
}

export default ManageBookingTable