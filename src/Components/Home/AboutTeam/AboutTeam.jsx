import { BsFacebook, BsFillPhoneVibrateFill, BsLinkedin } from 'react-icons/bs';
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle"
const AboutTeam = () => {
    return (
        <div className="container mx-auto pt-10 overflow-hidden">
             <SectionTitle
                title="OUR POPULAR CHEFS"
                subtitle="Check it out"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex justify-center ">
                    <div className="group h-96 w-80 [perspective:1000px] border-2 border-[#e5e7eb]-500 rounded-xl">
                        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] p-4">
                            <div className="absolute inset-0">
                                <img
                                    className="h-full w-full rounded-xl object-cover shadow-xl "
                                    src=" 	https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/img-1.webp"
                                    alt=""
                                />
                            </div>
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className="flex min-h-full flex-col items-center justify-center">
                                    <h1 className="text-3xl font-bold">Joken</h1>
                                    <p className="text-lg">Photographer & Art</p>
                                    <p className="text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </p>
                                    <div className="flex gap-4 text-2xl mt-6 justify-center items-center">
                                        <BsFacebook />
                                        <BsLinkedin />
                                        <BsFillPhoneVibrateFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <div className="group h-96 w-80 [perspective:1000px] border-2 border-[#e5e7eb]-500 rounded-xl">
                        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] p-4">
                            <div className="absolute inset-0">
                                <img
                                    className="h-full w-full rounded-xl object-cover shadow-xl "
                                    src=" 	https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/img-3.webp"
                                    alt=""
                                />
                            </div>
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className="flex min-h-full flex-col items-center justify-center">
                                    <h1 className="text-3xl font-bold">Gordon Ramshay</h1>
                                    <p className="text-lg">Photographer & Art</p>
                                    <p className="text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </p>
                                    <div className="flex gap-4 text-2xl mt-6 justify-center items-center">
                                        <BsFacebook />
                                        <BsLinkedin />
                                        <BsFillPhoneVibrateFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center  ">
                    <div className="group h-96 w-80 [perspective:1000px] border-2 border-[#e5e7eb]-500 rounded-xl">
                        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] p-4">
                            <div className="absolute inset-0">
                                <img
                                    className="h-full w-full rounded-xl object-cover shadow-xl "
                                    src=" https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/img-5.webp"
                                    alt=""
                                />
                            </div>
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className="flex min-h-full flex-col items-center justify-center">
                                    <h1 className="text-3xl font-bold">Joken</h1>
                                    <p className="text-lg">Photographer & Art</p>
                                    <p className="text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </p>
                                    <div className="flex gap-4 text-2xl mt-6 justify-center items-center">
                                        <BsFacebook />
                                        <BsLinkedin />
                                        <BsFillPhoneVibrateFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center  ">
                    <div className="group h-96 w-80 [perspective:1000px] border-2 border-[#e5e7eb]-500 rounded-xl">
                        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] p-4">
                            <div className="absolute inset-0">
                                <img
                                    className="h-full w-full rounded-xl object-cover shadow-xl "
                                    src=" https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/img-2.webp"
                                    alt=""
                                />
                            </div>
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className="flex min-h-full flex-col items-center justify-center">
                                    <h1 className="text-3xl font-bold">Anindra</h1>
                                    <p className="text-lg">Photographer & Art</p>
                                    <p className="text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </p>
                                    <div className="flex gap-4 text-2xl mt-6 justify-center items-center">
                                        <BsFacebook />
                                        <BsLinkedin />
                                        <BsFillPhoneVibrateFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTeam;