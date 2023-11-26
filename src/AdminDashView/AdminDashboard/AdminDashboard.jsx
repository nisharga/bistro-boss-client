import AdminCard from "./AdminCard";
import AdminChart from "./AdminChart";
import AdminPieChart from "./AdminPieChart";



const AdminDashboard = () => {
    return (
        <div className="bg-[#f6f6f6] adminhome container mx-auto px-4 py-10">
            <h2 className="semi-bold text-3xl">Hi, Welcome Back!</h2>
            <AdminCard revenue={2500} customers={30} products={30} orders={4} />
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