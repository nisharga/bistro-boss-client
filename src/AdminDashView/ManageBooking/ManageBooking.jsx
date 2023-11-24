import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ManageBookingTable from "./ManageBookingTable";

const ManageBooking = () => {
    return (
        <div className="py-8 ">
        <Helmet>
              <title>Bistro Boss | Manage Booking</title>
          </Helmet>
          <SectionTitle
            title="MANAGE BOOKING"
            subtitle="All Order Details"
          /> 

        {/* table for all users  */}
        <div className="mx-auto container md:px-16 px-6 text-center">
            <div className="bg-[#f6f6f6]">
              <div className="cartHeader uppercase flex flex-row justify-center items-center md:justify-start
              p-6"> 
              </div>
              <div>
                <ManageBookingTable />
              </div>
            </div>
          </div>

    </div>
    );
};

export default ManageBooking;