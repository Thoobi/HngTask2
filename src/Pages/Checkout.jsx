import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Navbar from "../Components/Reuse/Navbar";
import Footer from "../Components/Reuse/Footer";
import box2 from '../assets/box2.jpg'
import States from '../Components/Block/States'
import Cities from '../Components/Block/CitiesInLagos'
import { TbCurrencyNaira } from "react-icons/tb";

const Checkout = () =>{
    return(
        <div>
            <Navbar />
            <div className="mt-10 font-inika w-full h-full flex flex-col justify-between items-start">
                {/* nav tab */}
                <div className="flex flex-row justify-start items-center w-[90%] mx-auto my-0">
                    <Link to="/">
                        <h3 className="text-[20px] font-semibold">Shop All</h3>
                    </Link>
                    <AiOutlineRight className="w-[25px] h-[20px]" /> 
                    <Link to="/Cart">
                        <h3 className="text-[20px] font-medium">Plain Belgian</h3>
                    </Link>
                    <AiOutlineRight className="w-[25px] h-[20px]" />
                    <Link to="/Cart">
                        <h3 className="text-[20px] font-medium">Cart</h3>
                    </Link>
                    <AiOutlineRight className="w-[25px] h-[20px]" /> 
                    <Link to="/Checkout">
                        <h3 className="text-[20px] font-medium">Checkout</h3>
                    </Link>
                </div>

                {/* holds the cart image and notes and descriptions */}
                <div className="flex flex-row justify-between w-[90%] mx-auto my-10">
                    
                    <div className="w-[35%] h-[850px] flex flex-col">
                        <h1 className="text-4xl font-bold">Checkout</h1>
                        <div className="w-full h-[80px] flex flex-row bg-[#FFE1DB] justify-between items-center pl-5 pr-5 mt-10">
                                <h3 className="text-lg font-semibold">Product</h3>
                                <h3 className="text-lg font-semibold">Quantity</h3>
                            </div>
                            <div className="m-3 mt-10 flex flex-row justify-between items-center w-[90%]">
                                <img src={box2} alt="" width={170} height={182} />
                                <h3 className="text-lg font-semibold">Plain Belgian</h3>
                                <span className="py-2 px-4 border border-black">
                                    <h3 className="text-lg font-semibold">2</h3>
                                </span>
                            </div>

                            <div className="border-t-[2px] border-slate-200 mt-10 pt-10 flex flex-col justify-between items-center h-[20%]">
                                <span className="flex flex-row justify-end items-center w-full h-[6%] font-semibold"><h3>Sub-total: </h3><TbCurrencyNaira className='size-[20px]' /><h3 className="text-[18px]">20,000</h3></span>

                                <span className="flex flex-row justify-end items-center w-full h-[6%] font-semibold"><h3>Shipping: </h3><TbCurrencyNaira className='size-[20px]' /><h3 className="text-[18px]">5,000</h3></span>

                                <span className="flex flex-row justify-end items-center w-full h-[6%] font-semibold"><h3>Total: </h3><TbCurrencyNaira className='size-[20px]' /><h3 className="text-[18px]">25,000</h3></span>
                            </div>

                            <div className="mt-10 border border-slate-300 rounded-tr-lg rounded-br-lg flex flex-row self-end w-[60%]">
                                <input type="text" placeholder="Discount or promo code" className="outline-none border-none p-3" />
                                <button className="bg-slate-300 p-3 w-[40%] rounded-br-lg text-base font-medium">Apply</button>
                            </div>
                            <div className="bg-[#FFE1DB] mt-10 w-full h-[120px] flex flex-col justify-between px-[30px] py-[10px]">
                                <h3 className="font-semibold text-[20px]">**Delivery</h3>
                                <p className="font-medium">Our deliveries are made two (2) working days after order placement. Delivery occurs between 8AM - 6PM</p>
                            </div>
                    </div>

                    {/* shipping details holder */}
                    <div className=" w-[50%] h-[1000px] border-l-[3px] border-l-black  flex flex-col justify-start items-center px-10">
                        <div className="h-[80%] w-full mx-auto ustify-start items-center">
                        <h1 className="text-4xl font-bold">Shipping details</h1>
                        <div className="flex flex-col mt-8 w-full mx-auto">
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
                            <form className="flex flex-col justify-between items-center h-[40%] mt-10 p-5 bg-slate-100 w-full mx-auto">
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
                            <div className="mt-5 flex justify-center items-center">
                                <button className="mt-5 w-[190px] h-[50px] bg-[#FFE1DB] text-lg font-semibold rounded-md">
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