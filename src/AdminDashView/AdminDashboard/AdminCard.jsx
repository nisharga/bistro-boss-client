import { IoWalletOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

const AdminCard = ({revenue, customers, products, orders}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 lg:mt-8">
                <div className="bg-gradient-to-br from-purple-600 to-pink-100 py-6 px-20 rounded-lg flex space-x-4 items-center justify-center">
                    <div className="text-5xl text-white"><IoWalletOutline/></div>
                    <div className="">
                    <div className="text-4xl text-white font-bold">${revenue | 0}</div>
                    <div className="text-xl text-white font-semibold">Revenue</div>
                    </div>
                </div> 
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-200 py-6 px-20 rounded-lg flex space-x-4 items-center justify-center">
                    <div className="text-5xl text-white"><FaRegUser/></div>
                    <div className="">
                    <div className="text-4xl text-white font-bold">{customers | 0}</div>
                    <div className="text-xl text-white font-semibold">Customers</div>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-pink-500 to-pink-100 py-6 px-20 rounded-lg flex space-x-4 items-center justify-center">
                    <div className="text-5xl text-white"><CiShop/></div>
                    <div className="">
                    <div className="text-4xl text-white font-bold">{products | 0}</div>
                    <div className="text-xl text-white font-semibold">Products</div>
                    </div>
                </div>
                 <div className="bg-gradient-to-br from-pink-500 to-pink-100 py-6 px-20 rounded-lg flex space-x-4 items-center justify-center">
                    <div className="text-5xl text-white"><FaTruck/></div>
                    <div className="">
                    <div className="text-4xl text-white font-bold">{orders | 0}</div>
                    <div className="text-xl text-white font-semibold">Orders</div>
                    </div>
                </div>
            </div>
    );
};

export default AdminCard;