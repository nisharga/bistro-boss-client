import { RxAvatar } from "react-icons/rx";
import { BsGooglePlay } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";

const MobileApp = () => {
    return (
        <div className="px-12 bg-[#f6f6f6] pt-8">
            <div className="md:container mx-auto grid  lg:grid-cols-2 md:grid-cols-2  justify-center items-center">
                <div className="mt-6">
                    <h2 className="font-bold text-[#D99904]">
                        BEST APP FOR FOODS ORDERING
                    </h2>
                    <h1 className="lg:text-4xl font-bold text-black mt-2 mb-2">
                        Manage Your Restaurant <br /> Anytime! Anywhere!
                    </h1>
                    <div className="mt-6">
                        <div className="flex  gap-2 items-center">
                            <RxAvatar className="text-[#D1A054] "></RxAvatar>
                            <p>Higher Reach - Minimal Effort</p>
                        </div>
                        <div className="flex  gap-2 items-center">
                            <RxAvatar className="text-[#D1A054]"></RxAvatar>
                            <p>Showcase your Brand</p>
                        </div>
                        <div className="flex  gap-2 items-center">
                            <RxAvatar className="text-[#D1A054]"></RxAvatar>
                            <p>Exclusive offers & discounts</p>
                        </div>
                    </div>

                    <div className="flex-none md:flex gap-2 mt-6">
                        <div className=" flex justify-center items-center gap-2 bg-[#E8E8E8] rounded-xl shadow-xl p-4 mt-2 mb-5">
                            <BsGooglePlay className="text-3xl"></BsGooglePlay>
                            <div className="">
                                <p>Download From</p>
                                <h2>play Store</h2>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center gap-2 bg-black text-white rounded-xl p-4 shadow-xl mt-2 mb-5">
                            <AiFillApple className="text-3xl"></AiFillApple>
                            <div className="">
                                <p>Download From</p>
                                <h2>play Store</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid justify-center md:order-last order-first">
                    <img
                        src="https://fooddy.ancorathemes.com/wp-content/uploads/2017/02/phone_img.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default MobileApp;