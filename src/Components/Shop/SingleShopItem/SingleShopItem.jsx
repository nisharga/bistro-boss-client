/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";

const SingleShopItem = ({ data }) => {
    // user get from auth
    const { user } = useContext(AuthContext)
    // refetch get from useCart 
    const [cart, refetch] = useCart()

    const handleAddToCart = (id, name, price) => {
        const cartItem = { id, name, price, image: data.image, email: user?.email }
        fetch('http://localhost:5000/api/v1/order/create', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(cartItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire(
                        'Product Added',
                        'success'
                    )
                    // refech for featching the data
                    refetch()
                }
                
            })

    }
    return (
        <>
            <div className="card card-compact bg-[#F3F3F3] shadow-xl">
                <figure className="relative">
                    <img src={data?.image}
                        alt={data?.name}
                        className="h-[300px] object-cover w-full" />
                    <div className="absolute right-8 top-8 bg-[#111827] text-white px-5 py-2">
                        ${data?.price}
                    </div>
                </figure>
                <div className="card-body text-center">
                    <h2 className="text-[20px] font-bold text-center mt-2">{data?.name}</h2>
                    <p className="text-md">{data?.recipe}</p>
                    <div className="card-actions justify-center">
                        <button
                            className="text-[#BB8506] font-bold uppercase border-b-900 border-b rounded-bl rounded-br border-[#BB8506] pb-3 mt-5 bg-[#E8E8E8] py-2 px-4 hover:bg-[#09090a]"
                            // product add to database
                            onClick={() => handleAddToCart(data._id, data.name, data.price)}
                        >Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleShopItem