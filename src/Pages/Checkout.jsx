import { Link } from "react-router-dom";
import { AiOutlineRight, AiOutlineArrowLeft } from "react-icons/ai";
import Navbar from "../Components/Reuse/Navbar";
import Footer from "../Components/Reuse/Footer";
import box2 from '../assets/box2.jpg'
import States from '../Components/Block/States'
import Cities from '../Components/Block/CitiesInLagos'
import { TbCurrencyNaira } from "react-icons/tb";
import { useState } from "react";
import Lottie from 'lottie-react'
import checked from '../assets/payment-animate.json'


const Notification = ({ message, onClose }) => {
    return (
    <div className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 max-lg:top-[50%] max-lg:right-2 right-5 max-lg:w-[90%] w-[60%] border border-black h-[400px] bg-[#FFE1DB] text-black text-center p-2 font-inika">
        
        <div className='flex flex-col justify-between h-full items-center w-full'>
            <div className='flex flex-row justify-center items-center max-lg:w-[60%] w-[50%] my-2'>
                <h1 className="text-lg font-semibold">Order Processed</h1>
            </div> 
            <div className="w-[50%] max-lg:w-full ">
                <Lottie animationData={checked} className="max-lg:size-[full]"/>
            </div>
            <div className='flex flex-row justify-end'>
                <button className="w-[110px] bg-white h-[45px] text-base font-semibold text-black rounded-[20px] shadow-xl" onClick={onClose}>
                    Done
                </button>
            </div>   
        </div> 
    </div>
    );
};

const Checkout = () =>{
    const [notification, setNotification] = useState({ show: false, message: null });

    const notify = (item) => {
    setNotification({ show: true, message: item });
    };
    return(
        <div>
            <Navbar />
            {notification.show && <Notification message={notification.message} onClose={() => setNotification({ show: false, message: null })} />}
            <div className="mt-10 w-full font-inika w-full h-full flex flex-col justify-between items-start">
                <div className="max-lg:w-[90%] max-lg:mx-auto max-lg:mb-3 lg:hidden">
                    <Link to="/Cart">
                        <AiOutlineArrowLeft className="max-lg:size-[30px] max-md:size-[25px]" />
                    </Link>
                </div>
                {/* nav tab */}
                <div className="flex flex-row justify-start items-center w-[90%] max-lg:w-[90%] mx-auto my-2">
                    <Link to="/">
                        <h3 className="text-[20px] font-semibold max-lg:text-base">Shop All</h3>
                    </Link>
                    <AiOutlineRight className="w-[25px] h-[20px] max-lg:size-[20px]" /> 
                    <Link to="/Cart">
                        <h3 className="text-[20px] font-medium max-lg:text-base">Plain Belgian</h3>
                    </Link>
                    <AiOutlineRight className="w-[25px] h-[20px] max-lg:size-[20px]" />
                    <Link to="/Cart">
                        <h3 className="text-[20px] font-medium max-lg:text-base">Cart</h3>
                    </Link>
                    <AiOutlineRight className="w-[25px] h-[20px] max-lg:size-[20px]" /> 
                    <Link to="/Checkout">
                        <h3 className="text-[20px] font-medium max-lg:text-base">Checkout</h3>
                    </Link>
                </div>

                <div className="lg:hidden w-full h-[50px] flex justify-center items-center bg-[#FFE1DB] my-3">
                    <h2 className="text-[20px] font-semibold text-center">Checkout</h2>
                </div>

                {/* holds the cart image and notes and descriptions */}
                <div className="flex flex-row max-lg:flex-col max-lg:w-full justify-between w-[90%] mx-auto max-lg:my-0 my-10">
                    
                    <div className="w-[35%] max-lg:w-full max-lg:h-[650px] h-[850px] flex flex-col">
                        <h1 className="text-4xl font-bold max-lg:hidden">Checkout</h1>
                        <div className="w-full h-[80px] flex flex-row bg-[#FFE1DB] justify-between items-center pl-5 pr-5 max-lg:mt-0 mt-10 max-lg:hidden">
                                <h3 className="text-lg font-semibold">Product</h3>
                                <h3 className="text-lg font-semibold">Quantity</h3>
                            </div>
                            <div className="m-3 mt-10 flex flex-row justify-between items-center w-[90%]">
                                <img src={box2} alt="An image of a waffel" width={170} height={182} />
                                <h3 className="text-lg font-semibold">Plain Belgian</h3>
                                <span className="py-2 px-4 border border-black">
                                    <h3 className="text-lg max-lg:text-[20px] font-semibold">2</h3>
                                </span>
                            </div>

                            <div className="border-t-[2px] lg:hidden my-2 border-slate-200">

                            </div>

                            <div className="max-lg:mt-0 mt-10 pt-10 flex flex-col justify-between items-center h-[20%] max-lg:w-[95%]">
                                <span className="flex flex-row justify-end items-center w-full h-[6%] font-semibold"><h3>Sub-total: </h3><TbCurrencyNaira className='size-[20px]' /><h3 className="text-[18px]">20,000</h3></span>

                                <span className="flex flex-row justify-end items-center w-full h-[6%] font-semibold"><h3>Shipping: </h3><TbCurrencyNaira className='size-[20px]' /><h3 className="text-[18px]">5,000</h3></span>

                                <span className="flex flex-row justify-end items-center w-full h-[6%] font-semibold"><h3>Total: </h3><TbCurrencyNaira className='size-[20px]' /><h3 className="text-[18px]">25,000</h3></span>
                            </div>

                            <div className="mt-10 border border-slate-300 rounded-tr-lg rounded-br-lg flex flex-row self-end w-[60%] max-lg:self-end max-lg:mx-auto max-lg:w-[90%] max-lg:justify-between">
                                <input type="text" placeholder="Discount or promo code" className="outline-none border-none p-3" />
                                <button className="bg-slate-300 p-3 w-[40%] rounded-br-lg text-base font-medium">Apply</button>
                            </div>
                            <div className="bg-[#FFE1DB] max-lg:mt-5 mt-10 w-full h-[150px] flex flex-col justify-between px-[30px] py-[10px] max-lg:py-2">
                                <h3 className="font-semibold max-lg:text-center text-[20px]">**Delivery</h3>
                                <p className="font-medium max-lg:text-lg max-lg:p-3">Our deliveries are made two (2) working days after order placement. Delivery occurs between 8AM - 6PM</p>
                            </div>
                    </div>

                    <div className="lg:hidden w-full h-[50px] flex justify-center items-center bg-[#FFE1DB] my-3">
                        <h2 className="text-[20px] font-semibold text-center">Guest Details</h2>
                    </div>

                    {/* shipping details holder */}
                    <div className="max-lg:w-full w-[50%] h-[1000px] border-l-[3px] max-lg:border-none border-l-black  flex flex-col justify-start items-center px-10">
                        <div className="h-[80%] w-full mx-auto justify-start items-center">
                        <h1 className="text-4xl font-bold max-lg:hidden">Shipping details</h1>
                        <div className="flex flex-col mt-8 max-lg:mt-3 w-full mx-auto">
                            <label htmlFor="Email" className="font-semibold text-xl">Email Address</label>
                            <input type="text" placeholder="Enter your email" className="w-full mx-auto h-[50px] border-black border-2 p-4" />
                        </div>
                        <div className="flex flex-col justify-between mt-8 h-[45%] w-full mx-auto">
                            <h1 className="text-xl font-semibold">Delivery information</h1>
                            <form className="flex flex-col justify-between h-full mt-5">
                                <input type="text" placeholder="Enter your fullname" className="w-full mx-auto h-[50px] border-black border-2 p-4"/>
                                <input type="text" placeholder="Enter your address" className="w-full mx-auto h-[50px] border-black border-2 p-4"/>
                                <input type="text" placeholder="Enter your phone Number" className="w-full mx-auto h-[50px] border-black border-2 p-4"/>

                                <div className="flex flex-row justify-between w-full">
                                    <States />
                                    <Cities />
                                </div>
                            </form>
                        </div>
                        
                        {/* payment holder */}
                            <form className="flex flex-col justify-between items-center h-[40%] mt-10 p-3 bg-slate-100 w-full mx-auto rounded-2xl">
                                <h2 className="text-2xl font-semibold">Payment</h2>
                                <div className="w-full flex flex-row justify-center items-center">
                                    <div className="flex flex-row justify-center items-center w-[40%]">
                                        <label className="flex justify-center items-center space-x-2">
                                            <input type="radio" name="radio" className="hidden peer" />
                                            <span className="w-3 h-3 border-2 border-black rounded-full peer-checked:bg-black"></span>
                                            <span>Card</span>
                                        </label>
                                    </div>

                                    <div className="flex flex-row justify-center items-center w-[60%]">
                                        <label className="flex justify-center items-center space-x-2">
                                            <input type="radio" name="radio" className="hidden peer" />
                                            <span className="w-3 h-3 border-2 bg-white border-black rounded-full peer-checked:bg-black peer-checked:border-[1px]  p-1"></span>
                                            <span>Bank Transfer</span>
                                        </label>
                                    </div>
                                    
                                </div>
                                
                                <input type="text" placeholder="Name of card holder" className="w-full h-[50px] border-black border-2 p-4" />
                                <input type="text" placeholder="Enter your card number" className="w-full h-[50px] border-black border-2 p-4" />
                                <div className="flex flex-row justify-between items-center w-full">
                                    <input type="text" placeholder="Expiration date (mm/yy)"   className="w-[60%] h-[50px] border-black border-2     p-2" />
                                    <input type="text" placeholder="Enter CVV"   className="w-[30%] h-[50px] border-black border-2     p-2" />
                                </div>
                            </form>
                            
                            <div className="mt-5 max-lg:mt-5 flex justify-center items-center">
                                <button className="mt-5 w-[190px] h-[50px] bg-[#FFE1DB] text-lg font-semibold rounded-md"onClick={()=>{
                            notify()
                            }}>
                                PayNow
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div> 
            </div>
            <Footer />
        </div>
    )
}
export default Checkout;