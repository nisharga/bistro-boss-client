 
import axios from "axios";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.0";
import { useEffect } from "react";
import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FaPenToSquare } from "react-icons/fa6";
import ManageItemLoading from "./ManageItemLoading";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

 
 
const Pagination = ({setUpdatedPage, setUpdateProductID}) => {
  
  let navigate = useNavigate();
    const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

    
  const getPost = (page = 1) => {
    axios.get(`https://bistro-boss-server-three-olive.vercel.app/api/v1/menu/getall?page=${page}&limit=10`)
    .then(response => {
      // console.clear();
      console.log(response.data);
      setPosts(response.data.data);
      setLoading(false);
    });
  } 
  useEffect(() => {
    getPost();
  }, []);

  // update item
  const handleUpdate = (id) => {
    setUpdatedPage(true)
    setUpdateProductID(id)
  }
  // delete item
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
            fetch(`https://bistro-boss-server-three-olive.vercel.app/api/v1/menu/delete/${id}`, {
                method: "DELETE",
              })
              .then(res => res.json())
              .then(data => {
                
                navigate("/dashboard")
                if(data.statusCode === 200) {
                  Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
              }) 
              
        }
      }); 
}
  const Post = (props) => { 
    return (
         
            <tbody> 
            <>
        <tr>
            <th>#</th>
            <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={props.image} alt={props.name} />
                    </div>
                </div> 
            </div>
            </td>
            <td><b>{props.name}</b></td>
            <td><b>{props.price}</b></td>
            <th>
            <button className="btn btn-ghost btn-xs text-2xl" onClick={() => handleUpdate(props._id)}>
            <FaPenToSquare/>
            </button>
            </th>
            <th>
            <button className="btn btn-ghost btn-xs text-2xl" onClick={() => handleDelete(props._id)}>
            <BsFillTrashFill/>
            </button>
            </th>
        </tr> 
            </>
            </tbody>  
   
    )
  }
  
  const handlePageClick = (e) => {
    console.log(e.selected);
    setLoading(true);
    getPost(e.selected + 1);
  }
  
  const genPosts = () => {
    const allPost = [];
    posts.map((post) => {
      allPost.push(<Post {...post} />);
    });
    
    return allPost;
  }
  
  const allPost = genPosts();
  
  return (
    <div className='main'>
      
      <div className='posts'>
        
      <>
    <div className="overflow-x-auto">
        <table className="table">
            <thead>
            <tr className="bg-[#D1A054] text-[#fff]">
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
                <th>ACTION</th>
            </tr>
            </thead>
              {/* head */}
        { loading ? <ManageItemLoading/> : allPost }
                 
        </table>
     
    </div>
    </>
      </div>
      
      <div className='paginate py-3'>
        <ReactPaginate 
          previousLabel={"Back"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={6}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"btn-active"}
          />
      </div>
    </div>
  )
}

export default Pagination;




// // Loader component -------- 
// const Loader = props => { 
//   return (
//      <div className='loader'>
//       Loading... 
//     </div>
//   )
// }
