import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Navbar from "../Components/Reuse/Navbar";
import Footer from "../Components/Reuse/Footer";
import box2 from '../assets/box2.jpg'
import boxit1 from '../assets/boxit1.jpg'
import boxit2 from '../assets/boxit2.jpg'
import { MdStarRate } from "react-icons/md";
import { AiOutlinePlusSquare, AiOutlinePlus, AiOutlineMinusSquare,AiOutlineDelete, AiOutlineArrowLeft } from "react-icons/ai";
import { TbCurrencyNaira } from "react-icons/tb";

const Cart = () =>{
    return(
        <div>
            <Navbar />
            <div className="mt-[30px] max-lg:mt-[20px] font-inika max-lg:flex-col">
                <div className="max-lg:w-[90%] max-lg:mx-auto max-lg:mb-3 lg:hidden">
                    <Link to="/">
                        <AiOutlineArrowLeft className="max-lg:size-[30px] max-md:size-[25px]" />
                    </Link>
                </div>

                <div className="flex flex-row justify-start items-center w-[90%] mx-auto my-10 max-lg:my-7">
                    <Link to="/">
                        <h3 className="max-lg:text-[24px] max-md:text-[18px] text-[20px] font-semibold">Shop All</h3> 
                    </Link>
                    <AiOutlineRight className="max-lg:size-[20px] max-md:size-[18px] w-[25px] h-[20px]" />
                    <Link to="/">
                        <h3 className=" max-lg:text-[24px] max-md:text-[18px] text-[20px] font-medium">Plain Belgian</h3> 
                    </Link>
                    <AiOutlineRight className="max-lg:size-[20px] max-md:size-[18px] w-[25px] h-[20px]" /> 
                    <Link>
                        <h3 className="max-lg:text-[24px] max-md:text-[18px] text-[20px] font-medium">Cart</h3>
                    </Link>
                </div>

                {/* holds the cart image and notes and descriptions */}
                <div className="flex flex-row justify-between w-[90%] mx-auto my-[20px]">
                    {/* hold the cart image and notes */}
                    <div className=" flex flex-col justify-between items-center w-[40%] max-lg:w-[45%] max-lg:h-[520px] max-md:h-[280px]">
                            <img src={box2} alt="" className="max-lg:w-full w-full h-[50%] max-lg:h-auto" />
                            <div className="flex flex-row justify-between items-center w-full max-lg:w-full">
                                <img src={boxit1} alt="An image of a waffel" className="w-[48%]" />
                                <img src={boxit2} alt="An image of a waffel" className="w-[48%]" />
                            </div>
                            <div className="w-full font-inika max-lg:hidden">
                                <h4 className="max-lg:text-lg font-semibold text-xl py-3 max-lg:py-1">
                                    Order Notes
                                </h4>
                                <textarea name="" id="" className="w-[80%] max-lg:w-full h-[80px] max-lg:h-[70px] border-2 border-black outline-none p-3 "></textarea>
                            </div>
                    </div>

                    {/* hold the item description */}
                    <div className="w-[50%] flex flex-col justify-between">
                        <div className="w-full flex flex-col justify-between items-start">
                            <h1 className="max-lg:text-[26px] max-md:text-[20px] text-[40px] font-semibold">Plain Belgian</h1>
                            <ul className="max-lg:mt-2 max-lg:mb-0 flex flex-row justify-between items-center w-[15%]max-lg:mb-2 mt-2 mb-3">
                                <li><MdStarRate className="max-lg:size-[20px] max-md:size-[18px] size-[20px]" /></li>
                                <li><MdStarRate className="max-lg:size-[20px] max-md:size-[18px] size-[20px]" /></li>
                                <li><MdStarRate className="max-lg:size-[20px] max-md:size-[18px] size-[20px]" /></li>
                                <li><MdStarRate className="max-lg:size-[20px] max-md:size-[18px] size-[20px]" /></li>
                                <li><MdStarRate className="max-lg:size-[20px] max-md:size-[18px] size-[20px]" /></li>
                            </ul>
                            <div className="mb-2 font-semibold">
                                <h2>Reviews <span>(169)</span></h2>
                            </div>
                            
                            <div className="flex flex-row justify-between w-[30%] max-lg:w-[60%] max-md:w-[80%] max-lg:my-1 items-center mb-2">
                                <AiOutlineMinusSquare className="max-lg:size-[30px] size-[40px] cursor-pointer" />
                                <span className="max-lg:text-2xl text-3xl font-semibold">2</span>
                                <AiOutlinePlusSquare className=" max-lg:size-[30px] size-[40px] cursor-pointer" />
                                <AiOutlineDelete className=" max-lg:size-[25px] size-[30px] cursor-pointer" />
                            </div>

                            <div className="flex flex-row justify-between items-center w-[13%] max-lg:w-[40%] max-md:my-1 mb-3 mt-2">
                                <h5 className="max-lg:text-xl max-md:text-lg text-xl font-semibold">Total:</h5> 
                                <p className="flex flex-row justify-center items-center"><TbCurrencyNaira className='size-[28px] max-lg:size-[25px] max-md:size-[20px]' />
                                    <span className="max-lg:text-[24px] max-md:text-[18px] text-2xl font-semibold">20,000</span>
                                </p>
                            </div>

                            <p className="text-lg font-medium max-lg:text-[20px] max-md:text-base"><Link to="" className="border-b-black border-b-2 font-semibold">Shipping</Link> calculated at Checkout
                            </p>

                            <div className="mt-3 flex flex-col justify-between w-[80%] max-lg:w-[90%] max-md:w-full">
                                <h2 className="text-[32px] font-semibold max-lg:text-[24px] max-md:text-[18px]">Description</h2>
                                <p className="w-[50%] max-lg:w-full max-lg:mt-1 mt-2 font-medium text-[18px] max-lg:text-[18px] max-md:text-[15px]">Belgian Waffle made with butter, milk, and eggs, and pearl sugar imported from Belgium
                                </p>
                            </div>

                            <div className="flex flex-row justify-between items-center w-[60%] max-lg:w-[90%] max-md:w-full mt-5 max-md:flex-row max-md:flex max-md:h-30 max-md:gap-2 max-md:flex-wrap">
                                <button className="max-md:text-base max-md:w-[80px] max-md:h-[40px] max-lg:text-md max-lg:w-[100px] max-lg:h-[45px] w-[124px] h-[54px] bg-white border-[1px] border-black focus:bg-black focus:text-white rounded-2xl text-xl font-medium hover:bg-black hover:text-white">Box of 4</button>
                                <button className="max-md:text-base max-md:w-[80px] max-md:h-[40px] max-lg:text-md max-lg:w-[100px] max-lg:h-[45px] w-[124px] h-[54px] bg-white border-[1px] border-black rounded-2xl text-xl font-medium focus:bg-black focus:text-white hover:bg-black hover:text-white">Box of 6</button>
                                <button className="max-md:text-base max-md:w-[80px] max-md:h-[40px] max-lg:text-md max-lg:w-[100px] max-lg:h-[45px] w-[124px] h-[54px] bg-white border-[1px] border-black rounded-2xl text-xl font-medium focus:bg-black focus:text-white hover:bg-black hover:text-white">Box of 12</button>
                            </div>

                            <div className="flex flex-row justify-between items-center w-[45%] gap-2 mt-8 max-md:mt-5 max-lg:w-[80%] max-md:w-full max-md:flex-wrap max-md:flex-row max-md:gap-2">
                                <button className="w-[180px] h-[55px] bg-[#FFE1DB] rounded-2xl text-xl font-medium border-[1px] shadow-xl focus:bg-[#FFE1DB] hover:bg-[#FFE1DB] transition duration-300 ease-in-out transform hover:scale-105 max-md:w-[120px] max-md:h-[45px] max-md:text-base ">Save for later</button>
                                <Link to="/Checkout">
                                    <button className="w-[120px] h-[55px] bg-[#FFE1DB] rounded-2xl text-xl font-medium  focus:bg-[#FFE1DB] hover:bg-[#FFE1DB] shadow-xl transition duration-300 ease-in-out transform hover:scale-105 border-[1px] max-md:w-[120px] max-md:h-[45px] max-md:text-base">Checkout</button>
                                </Link>
                            </div>
                            {/* Storage holder */}
                            <div className="w-[45%] mt-20 max-lg:hidden">
                                <div className="flex flex-col h-40">
                                    <h2 className="text-xl font-semibold border-b-[1px] mb-5 border-black">STORAGE</h2>
                                    <ul className="flex flex-col justify-between gap-3 mb-3">
                                        <li className="text-[18px]">Waffles contain no preservatives</li>
                                        <li className="text-[18px]">Store for up to 1 week in an air tight container in a fridge or freezer</li>
                                    </ul>
                                </div>

                                <div className="flex flex-col">
                                    <h2 className="text-xl font-semibold border-b-[1px] mb-5 border-black">DELIVERY INFORMATION</h2>
                                    <p className="text-[18px]">
                                    Our deliveries are made two (2) working days after order placement. Delivery occurs between 8AM - 6PM
                                    </p>
                                </div>

                                <div className="flex flex-col justify-between items-start mt-5 w-full">
                                    <div className="flex flex-row justify-between items-center border-b-2 border-black w-full">
                                        <h2 className="text-lg font-semibold">REHEATING INSTRUCTIONS</h2>
                                        <AiOutlinePlus className="align-middle size-[20px]"/>
                                    </div>
                                    <div className="flex flex-row justify-between items-center border-b-2 border-black w-full mt-10">
                                        <h2 className="text-lg font-semibold">ALLERGENS</h2>
                                        <AiOutlinePlus  className="align-middle size-[20px]"/>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <Link to="/">
                                        <button className="w-48 bg-[#FFE1DB] border-[1px] border-black rounded-lg h-14 text-lg max-lg:text-base font-[600]">Continue shopping</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Storage for tablet and small*/}
                <div className="w-[45%] mt-20 max-lg:mt-10 max-lg:justify-center max-lg:items-center max-lg:w-[90%] max-lg:mx-auto lg:hidden max-lg:bg-[#F6F5F5] max-lg:p-5 rounded-[20px]">
                                <div className="flex flex-col h-40 max-lg:w-full">
                                    <h2 className="text-xl font-semibold border-b-[1px] mb-5 border-black max-lg:text-center max-lg:text-xl max-md:text-lg">STORAGE</h2>
                                    <ul className="flex flex-col justify-between gap-3 mb-3 max-lg:justify-center max-lg:items-center max-lg:w-full max-lg:gap-2">
                                        <li className="text-[18px] max-md:text-[14px] max-lg:text-base">Waffles contain no preservatives</li>
                                        <li className="text-[18px] max-md:text-[14px] max-lg:text-base">Store for up to 1 week in an air tight container in a fridge or freezer</li>
                                    </ul>
                                </div>

                                <div className="flex flex-col">
                                    <h2 className="text-xl font-semibold border-b-[1px] mb-5 max-lg:mb-2 border-black max-lg:text-xl max-md:text-lg max-lg:text-center">DELIVERY INFORMATION</h2>
                                    <p className="text-[18px] max-md:text-[14px] max-lg:text-base">
                                    Our deliveries are made two (2) working days after order placement. Delivery occurs between 8AM - 6PM
                                    </p>
                                </div>

                                <div className="flex flex-col justify-between items-start mt-5 w-full">
                                    <div className="flex flex-row justify-between items-center border-b-2 border-black w-full">
                                        <h2 className="text-lg font-semibold max-lg:text-base">REHEATING INSTRUCTIONS</h2>
                                        <AiOutlinePlus className="align-middle size-[20px]"/>
                                    </div>
                                    <div className="flex flex-row justify-between items-center border-b-2 border-black w-full mt-10">
                                        <h2 className="text-lg font-semibold max-lg:text-base">ALLERGENS</h2>
                                        <AiOutlinePlus  className="align-middle size-[20px]"/>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 max-lg lg:hidden max-lg:flex max-lg:justify-center max-lg:items-center max-lg:mb-5">
                                    <Link to="/">
                                        <button className="max-lg:w-44 max-lg:p-2 w-52 bg-[#FFE1DB] border-[1px] border-black rounded-lg h-14 text-lg font-[600]">Continue shopping</button>
                                    </Link>
                                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Cart;