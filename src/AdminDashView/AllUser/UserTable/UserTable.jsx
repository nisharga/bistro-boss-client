import UserTableData from "./UserTableData"

const UserTable = ({users, refetch}) => {
  
  return (
    <>
     <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr className="bg-[#D1A054] text-[#fff]">
                <th>#</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
            </tr>
            </thead>
              {/* head */}
            <tbody>
             
            {/* map cartData to show all */}
            {
                users?.data?.map((user, index) => 
                <UserTableData 
                    user={user}
                    index={index} 
                    key={index}
                    refetch={refetch}></UserTableData>)
            }
            {/* map cartData to show all */}
            </tbody> 
        </table>
    </div>
    </>
  )
}

export default UserTable