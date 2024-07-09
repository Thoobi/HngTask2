import Navbar from '../Components/Reuse/Navbar'
import Footer from "../Components/Reuse/Footer";
import { TbCurrencyNaira } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";
import backgroundImage from '../assets/banner.png'
import "react-toastify/dist/ReactToastify.css";
import { MdClear,MdSort } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';
import { data } from "../Data/Db.jsx"
import { useState } from 'react';
import '../styles/Home.css'

const Notification = ({ message, onClose }) => {
    return (
    <div className="fixed top-10 max-lg:top-2 max-lg:right-2 right-5 max-lg:w-[300px] w-[340px] border border-black h-[340px] bg-[#FFE1DB] text-black text-center p-2 font-inika">
        <div className='flex flex-row justify-end'>
            <button className="ml-10 text-black" onClick={onClose}><MdClear className='size-[24px]' /></button>
        </div>
        <div className='flex flex-col justify-between items-center w-full'>
            <div className='flex flex-row justify-between items-center max-lg:w-[60%] w-[50%] my-2'>
                <GiCheckMark className='text-black'/>
                <h3 className='text-base font-semibold text-center text-black'> Item added to Cart</h3>
            </div>
            <div className='flex flex-row justify-around items-center w-[85%]'>
                <img src={message.image} className='w-[100px] h-[100px] rounded-lg'/>
                <h3 className='font-semibold text-base text-start'>{message.title}</h3>
            </div>

            <div className='flex flex-row mt-3'>
                <TbCurrencyNaira className='size-[20px]' /><h3 className='text-center text-base font-semibold'>{message.price}</h3>
            </div>
            <Link to="/Cart">
                <button className='w-[200px] max-lg:w-[200px] h-[50px] bg-white border border-black mt-3 rounded-[18px] font-semibold hover:border-none'>View Cart</button>
            </Link>
            <Link to="/">
            <h3 className='underline mt-3 font-semibold'>Continue Shopping</h3>
            </Link>
        </div>
        
    </div>
    );
};

const Home = () =>{
    const [notification, setNotification] = useState({ show: false, message: null });

    const notify = (item) => {
    setNotification({ show: true, message: item });
    setTimeout(() => {
        setNotification({ show: false, message: null });
      }, 5000); // Hide notification after 3 seconds
    };

    return(
        <div>
            <Navbar />
                {/* hold the div in the center with shop button */}
                {notification.show && <Notification message={notification.message} onClose={() => setNotification({ show: false, message: null })} />}

                <div className='bg-cover max-lg:my-1 h-[345px] max-lg:h-[150px] w-full flex flex-col justify-center max-lg:justify-end items-center my-[30px]' style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="w-[40%] max-lg:h-[50px] max-lg:w-full h-[190px] bg-[#FFE1DB] mx-auto flex flex-col max-lg:flex-row justify-center max-lg:justify-evenly items-center font-inika rounded-sm max-lg:shadow-none shadow-xl ">
                        <p className="text-xl font-semibold max-lg:text-base">Get 10% off your first order</p>
                        <button className="h-[45px] max-lg:h-[35px] w-[140px] max-lg:w-[90px] bg-white  max-lg:text-base text-lg font-semibold font-inika rounded-[30px] max-lg:rounded-md max-lg:shadow-lg mt-10 max-lg:mt-0 shadow-xl">Shop Now
                        </button>
                    </div>
                </div>

                {/* filter holder */}
                <div className='lg:hidden max-lg:flex max-lg:flex-col max-lg:justify-between max-lg:items-center max-lg:w-full max-lg:mt-5 max-lg:font-inika'>
                    <div className='max-lg:w-[90%] max-lg:mx-auto max-lg:flex max-lg:justify-end '>
                        <MdSort className='size-[30px]' />
                    </div>
                    <div className='navbar max-lg:w-full max-lg:flex max-lg:flex-col max-lg:justify-between'>
                        <div className='max-lg:w-full max-lg:flex max-lg:justify-start max-lg:my-2'>
                            <h2 className='max-lg:text-[18px] max-lg:w-[90%] max-lg:font-medium max-lg:mx-auto'>Browse by</h2>
                        </div>
                        <ul className='max-lg:w-[90%] max-lg:mx-auto text-[18px] max-lg:flex max-lg:flex-row max-lg:justify-between max-lg:font-medium max-lg:my-2 max-lg:items-center'>
                            <li>
                                <NavLink to="/">
                                    All
                                </NavLink>
                            </li>
                            
                            <li>
                                <Link>
                                    Pre-packaged
                                </Link>
                            </li>

                            <li>
                                <Link>
                                    Savoury
                                </Link>
                            </li>

                            <li>
                                <Link>
                                    Sweet
                                </Link>
                            </li>

                            <li>
                                <Link>
                                        <AiOutlineRight className="size-[20px]" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='max-lg:text-2xl max-lg:font-semibold max-lg:mt-3'>Products</h1>
                    </div>
                    
                </div>
                
                {/* hold the product listing and filter */}
                <div className='flex flex-row justify-between max-lg:justify-center w-[90%] max-lg:w-full max-lg:mx-0 mx-auto my-10 font-inika font-bold'>

                    {/* hold the filter container */}
                    <div className='flex flex-col justify-center items-center h-[40%] max-lg:hidden'>
                        <div>
                            <h2 className='text-[18px]'>Browse Category</h2>
                            <h2 className='mt-4 mb-2 text-[18px]'>All</h2>
                            <ul className='font-medium text-[18px]'>
                                <li>Pre-packaged</li>
                                <li>Savoury</li>
                                <li>Sweet</li>
                                <li>Premium</li>
                            </ul>
                        </div>

                        <div className='mx-0 w-full mt-10'>
                            <h2 className='text-[18px]'>Filter by price</h2>
                            <ul className='font-medium flex flex-col justify-between mt-4 text-[18px]'>
                                <li className='flex flex-row justify-start items-center'><TbCurrencyNaira className='size-[20px]' />2500 - 4000
                                </li>
                                <li className='flex flex-row justify-start items-center'><TbCurrencyNaira className='size-[20px]' /> 4000 - 6000
                                </li>
                                <li className='flex flex-row justify-start items-center'><TbCurrencyNaira className='size-[20px]' />6000 - 8000
                                </li>
                                <li className='flex flex-row justify-start items-center'><TbCurrencyNaira className='size-[20px]' />8000 - 10000
                                </li>
                                <li className='flex flex-row justify-start items-center'><TbCurrencyNaira className='size-[20px]' /> 10000+
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* product Listing holder */}
                    <div className='w-[70%] max-lg:w-[90%] max-lg:mx-auto flex flex-row max-lg:justify-between justify-between items-center flex-wrap max-lg:gap-5 gap-5'>
                    {data.map((items)=>(
                    <div key={items.id} className='flex flex-col w-[30%] max-md:w-[43%] max-lg:w-[20%]'>
                        {/* Image */}
                        <div className='w-full max-lg:w-full max-lg:h-[150px] h-[250px] bg-[#ffe1db88] flex justify-center items-center'>
                            <img src={items.image} className='w-[95%] h-[95%] object-cover'/>
                        </div>

                        <div className='w-full h-[20%] flex max-lg:justify-start justify-start items-center'>
                            <h3 className='w-full h-full text-lg text-center max-lg:text-base max-lg:text-left'>{items.title}</h3>
                        </div>

                        <div className=' w-full flex max-lg:justify-start justify-center items-center'>
                        <h6 className='text-[12px]'>from</h6><TbCurrencyNaira className='size-[16px]' /><h3 className='text-center text-[16px]'>{items.price}</h3>
                        </div>

                        <div className='w-full flex justify-center items-center max-lg:justify-start'>
                            <button className=' bg-[#FFE1DB] font-bold text-[14] px-[10px] py-[5px] max-lg:p-[10px] max-lg:text-[14px]' onClick={()=>{
                            notify(items)
                            }}>Add to Cart</button>
                        </div>
                    </div>
                ))}
                    </div>
                </div>
            <Footer />
        </div>
    )
}
export default Home; 