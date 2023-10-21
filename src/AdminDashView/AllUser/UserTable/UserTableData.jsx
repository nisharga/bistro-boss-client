import { BsFillTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { GrUserAdmin } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";

const UserTableData = ({user, index, refetch}) => {
  const {name, email, role, _id} = user
  


  const handleUserActionChange = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You are changing the user's status",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Change it",
      }).then((result) => {
        if (result.isConfirmed) {

              fetch(`http://localhost:5000/api/v1/user/${id}`, {
                method: "PATCH",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  role: "admin",
                }),
              })
              .then(res => res.json())
              .then(data => {
                if(data.statusCode === 200) {
                    Swal.fire("Done!", "User authorization has been changed.", "success");
                    refetch()
                }
              })

        }
      });
    
  }
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

            fetch(`http://localhost:5000/api/v1/user/${id}`, {
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
        <th>{index + 1}</th>
        <td><b>{name}</b></td>
        <td><b>{email}</b></td>
        <td><b>
        <button className="btn btn-outline btn-primary" onClick={() => handleUserActionChange(_id)}>
            {role === 'user' ? <FaUserAlt/> : <GrUserAdmin/>}
        </button>
        </b></td>
        <th>
            <button className="btn btn-ghost btn-xs text-2xl" onClick={() => handleDelete(_id)}>
                <BsFillTrashFill/>
            </button>
            </th>
    </tr> 
</>
  )
}

export default UserTableData