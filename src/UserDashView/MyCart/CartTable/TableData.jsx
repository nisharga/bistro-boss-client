/* eslint-disable no-unused-vars */
import { BsFillTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";

const TableData = ({data}) => {
    const [cart, refetch] = useCart();  // Updated destructuring to capture both cart and refetch
    const {_id, image, name, price} = data;
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              
              fetch(`http://localhost:5000/api/v1/order/delete/${id}`, {
                method: "DELETE",
              })
              .then(res => res.json())
              .then(data => {
                if(data.statusCode === 200) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                    refetch()
                }
                
              })
            }
          }); 
    }
  return (
    <>
        <tr>
            <th>{1}</th>
            <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt={name} />
                    </div>
                </div> 
            </div>
            </td>
            <td><b>{name}</b></td>
            <td><b>{price}</b></td>
            <th>
            <button className="btn btn-ghost btn-xs text-2xl" onClick={() => handleDelete(_id)}>
                <BsFillTrashFill/>
            </button>
            </th>
        </tr> 
    </>
  )
}

export default TableData