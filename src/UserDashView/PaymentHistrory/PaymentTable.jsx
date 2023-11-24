/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders"; 

const PaymentTable = ( ) => {
    const {user} = useContext(AuthContext) 
    const [PaymentHistory, setPaymentHistory] = useState() 
    const token = localStorage.getItem("access-token");

    const uniqueTrxIds = new Set();
    const filteredData = PaymentHistory?.data?.filter(item => {
        if (item.price !== 0 && !uniqueTrxIds.has(item.trxid)) {
          uniqueTrxIds.add(item.trxid);
          return true;
        }
        return false;
      });
    console.log("🚀 ~ file: PaymentTable.jsx:18 ~ filteredData ~ filteredData:", filteredData)

    useEffect(() => {
            fetch(`http://localhost:5000/api/v1/payment/searchbyemail/${user?.email}`, {
                    method: "GET",
                    headers: {
                        "authorization": `bearer ${token}`,
                        "Content-Type": "application/json", // Adjust the content type as needed
                    },
                    
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setPaymentHistory(data);
                    })
                    .catch((error) => {
                    console.error("Error:", error);
                    });
      }, [user])
  return (
    <>
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr className="bg-[#D1A054] text-[#fff]">
                <th>#</th>
                <th>DATE</th>
                <th>PAYMENT</th>
                <th>TRXID</th>
                <th>STATUS</th>
            </tr>
            </thead>
              {/* head */}
            <tbody> 
            {/* map cartData to show all */}
            {
                filteredData?.map((tabledata, key) => {
                     
                     return  <>
                     <tr key={tabledata?._id}>
                     <th>{key + 1}</th> 
                     <td>
                      {tabledata?.date}
                     </td>
                     <td><b>{tabledata?.price ? tabledata?.price : "payment faild"}</b></td>
                     <td><b>{ tabledata?.trxid ? tabledata?.trxid : "payment faild"  }</b></td>
                     
                    
                     <th>
                     {tabledata?.status}
                     </th>
                 </tr> </>
                     
                })
            }
            {/* map cartData to show all */}
            </tbody> 
        </table>
    </div>
</>
  )
}

export default PaymentTable