
import AdminCard from "./AdminCard";
import AdminChart from "./AdminChart";
import AdminPieChart from "./AdminPieChart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";



const AdminDashboard = () => {
    const [adminDashData, setAdminDashData] = useState('')
    console.log("🚀 ~ file: AdminDashboard.jsx:12 ~ AdminDashboard ~ adminDashData:", adminDashData)
    
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
    axiosSecure.get('/api/v1/payment/admindashboard')
        .then(data => setAdminDashData(data?.data?.data?.data))
    }, [axiosSecure])
    
    console.log("Customers", adminDashData
    );

    return (
        <div className="bg-[#f6f6f6] adminhome container mx-auto px-4 py-10">
            <h2 className="semi-bold text-3xl">Hi, Welcome Back!</h2>
            <AdminCard revenue={adminDashData?.totalRevinue} customers={adminDashData?.totalUser} products={adminDashData?.totalProduct} orders={adminDashData?.orders} />
            <div className="grid grid-cols-12 bg-white mt-5">
                <div className="col-span-12 lg:col-span-6 p-4">
                    <AdminChart/>
                </div>
                <div className="col-span-12 lg:col-span-6 p-4">
                    <AdminPieChart/>
                </div>
            </div> 
        </div>
    );
};

export default AdminDashboard;