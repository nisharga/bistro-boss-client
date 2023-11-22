import { Helmet } from "react-helmet-async"
import useCart from "../../hooks/useCart"
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import CartTable from "./CartTable/CartTable";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart] = useCart();
  // let total = 0;
  let total = 0;
  if (Array.isArray(cart?.data)) {
    total = cart.data.reduce((sum, item) => item.price + sum, 0);
  }

  // console.log(cart?.data, "from my cart page");
  return (
    <div className="py-8 bg-[#f6f6f6]">
         <Helmet>
              <title>Bistro Boss | My Cart</title>
          </Helmet>
          <SectionTitle
            title="WANNA ADD MORE?"
            subtitle="My Cart"
          /> 
          <div className="mx-auto container md:px-16 px-6 text-center">
            <div className="bg-white">
              <div className="cartHeader uppercase flex flex-row justify-between items-center
              p-6">
                <h3 className="text-2xl">Total orders: {cart?.data?.length}</h3>
                <h3 className="text-2xl">total price:{total}</h3>
                <Link className="btn btn-active bg-[#D1A054]" to="/dashboard/payment">Pay</Link>
              </div>
              <div className="cartTable">
                <CartTable cartData={cart.data}/>
              </div>
            </div>
          </div>
    </div>
  )
}

export default MyCart