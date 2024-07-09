import {Link} from 'react-router-dom'
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";

const Footer = () =>{
    return(
        <div className="w-full pt-[15px] bg-[#FFE1DB] max-lg:bg-white font-inika flex flex-row justify-center items-center">

            <div className="w-[90%] max-lg:w-full mx-auto my-0 bg-[#FFE1DB] max-lg:bg-white flex flex-row justify-between items-start max-lg:items-center max-lg:justify-between max-lg:flex-col gap-3 py-10">

                <div className='w-[30%] max-lg:w-full max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:bg-[#FFE1DB] max-lg:px-4 max-lg:py-2'>
                    <h2 className='font-bold text-xl'>About</h2>
                    <p className='max-lg:text-center max-lg:w-full'>More Than Wafels is a company that specializes in 
                    Delicious, Artisan Belgian Waffles & Brunch treats</p>
                </div>

                <div className='w-[20%] max-lg:w-full max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center flex flex-col max-lg:bg-[#FFE1DB] max-lg:px-4 max-lg:py-2'>
                    <h2 className='font-bold text-xl '>Customer service</h2>
                    <Link to="" className='hover:cursor-pointer text-base'>
                        Shipping information
                    </Link>
                    <Link to="" className='hover:cursor-pointer'>
                        Terms and Condition
                    </Link>
                </div>
                    
                <div className='max-lg:w-full max-lg:justify-center max-lg:items-center flex flex-col justify-between w-[20%] max-lg:px-4 max-lg:py-2 max-lg:bg-[#FFE1DB]'>
                    <h2 className='font-bold text-xl '>Contact</h2>
                    <div className='w-[85%] flex flex-col justify-between items-start'>
                        <div className='max-lg:w-[80%] max-lg:mx-auto max-lg:justify-between flex justify-start flex-row'>
                            <AiOutlineMail className='align-bottom  size-[24px]' />
                            <Link className='underline text-base'>morethanwafels@gmail.com</Link>
                        </div>
                        
                        <div className='max-lg:w-[45%] max-lg:mx-auto max-lg:justify-between flex justify-start flex-row font-medium max-lg:mt-2'>
                            <MdPhone className='scale-y-[-1px] align-middle size-[24px]' /><p className='text-base'>+2348176754434</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row justify-between max-lg:w-full max-lg:justify-center items-center h-[50%] my-auto mx-0 max-lg:px-4 max-lg:py-7 max-lg:bg-[#FFE1DB]'>
                    <FaInstagram className='size-[30px] max-lg:size-[25px]' />
                    <FaXTwitter className='size-[30px] max-lg:size-[25px]' />
                </div>

            </div>
            
        </div>
    )
}

export default Footer;