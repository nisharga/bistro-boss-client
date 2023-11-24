import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PaymentTable from "./PaymentTable";

const PaymentHistory = () => {
    return (
        <div className="py-8 bg-[#f6f6f6]">
         <Helmet>
              <title>Bistro Boss | Payment History</title>
          </Helmet>
          <SectionTitle
            title="Payment History"
            subtitle="All"
          /> 
          <div className="mx-auto container md:px-16 px-6 text-center">
            <div className="bg-white"> 
              <div className="cartTable">
                <PaymentTable />
              </div>
            </div>
          </div>
    </div>
    );
};

export default PaymentHistory;