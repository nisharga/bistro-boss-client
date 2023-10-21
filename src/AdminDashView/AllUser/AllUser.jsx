import { Helmet } from "react-helmet-async"
import SectionTitle from "../../Shared/SectionTitle/SectionTitle"
import { useQuery } from "@tanstack/react-query";
import UserTable from "./UserTable/UserTable";

const AllUser = () => {

    const { data: users = [], refetch } = useQuery(['users'], async() => {
        const res = await fetch('http://localhost:5000/api/v1/user');
        return res.json();
    })
    
  return (
    <div className="py-8 bg-[#f6f6f6]">
        <Helmet>
              <title>Bistro Boss | All User</title>
          </Helmet>
          <SectionTitle
            title="MANAGE ALL USERS"
            subtitle="How many?"
          /> 

        {/* table for all users  */}
        <div className="mx-auto container md:px-16 px-6 text-center">
            <div className="bg-white">
              <div className="cartHeader uppercase flex flex-row justify-center items-center md:justify-start
              p-6">
                <h3 className="text-2xl">Total users: 9</h3> 
              </div>
              <div className="cartTable">
                { <UserTable users={users} refetch={refetch}/> }
              </div>
            </div>
          </div>

    </div>
  )
}

export default AllUser