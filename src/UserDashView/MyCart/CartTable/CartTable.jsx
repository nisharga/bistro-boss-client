import TableData from "./TableData";

const CartTable = ({cartData}) => {
    console.log("cartData", cartData);
  return (
    <>
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr className="bg-[#D1A054] text-[#fff]">
                <th>#</th>
                <th>IMAGE</th>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>ACTION</th>
            </tr>
            </thead>
              {/* head */}
            <tbody>
             
            {/* map cartData to show all */}
            {
                cartData?.map((data, index) => 
                <TableData data={data} key={index}></TableData>
                )
            }
            {/* map cartData to show all */}
            </tbody> 
        </table>
    </div>
</>
  )
}

export default CartTable