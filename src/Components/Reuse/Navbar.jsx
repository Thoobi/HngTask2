import {Link, NavLink} from 'react-router-dom'
import '../Reuse/Navbar.css'
import logo from '../../assets/storeLogo1.png'
import { AiOutlineShoppingCart, AiOutlineUser,AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"
import { useState } from 'react';

const Navbar = () =>{
    const [open, SetOpen] = useState(false)

    return(
        <div  className="h-[170px] max-lg:h-[100px] bg-[#FFE1DB] w-full font-inika">
            <div className="w-[90%] mx-auto my-0 flex justify-between flex-col">
                <div className=" flex justify-center items-center max-lg:justify-between max-lg:items-center">
                    {/* Project Logo */}
                    <div className='w-[100px] h-[110px] max-lg:w-[70px] max-lg:h-[80px]'>
                        <img src={logo} className='w-full h-full'   />
                    </div>

                    <div className='max-lg:flex max-lg:flex-row max-lg:justify-between max-lg:w-[15%] max-md:w-[25%]'>
                        <div className='lg:hidden flex flex-row'><Link to="/Checkout"><AiOutlineShoppingCart className='size-[30px] cursor-pointer'  /></Link><span className='w-[10px] h-[10px] bg-red-600 rounded-full ml-[-5px]'></span>
                    </div>
                        {/* Hamburger Logo */}
                        <div className='text-[30px] lg:hidden' >
                        {open ? <RxCross2 onClick={()=>(
                            SetOpen(false)
                        )} />  : <GiHamburgerMenu onClick={()=>(
                            SetOpen(true)
                        )}/>}
                    </div>
                    {open ?
                        <div className='w-[60%] absolute right-0 h-[200px] bg-green-300 top-[105px] ' >

                        </div>
                        : null
                    }
                    </div>
                    
                </div>
                
                <div className='flex flex-row justify-between items-center p-3 max-lg:hidden'>

                    <nav className=" w-[10%] flex flex-row justify-between font-semibold ">
                        <ul className='navbar w-full flex flex-row justify-between font-semibold mx-auto my-0'>

                            <li className='list-none'>
                                <NavLink to="/" className='text-[20px] cursor-pointer border-black hover:border-b-[3px]'>Home</NavLink>
                            </li>

                            <li className='list-none'>
                                <NavLink to="/Cart" className='text-[20px] cursor-pointer border-black  hover:border-b-[3px]'>Shop</NavLink>
                            </li>
                        </ul>
                        
                        

                    </nav>

                    <div className="w-[60%] flex flex-row justify-end">
                        <div className='flex flex-row justify-between w-[20%]'>
                            <AiOutlineSearch className='size-[30px] cursor-pointer'/>
                            <div className='flex flex-row'><Link to="/Checkout"><AiOutlineShoppingCart className='size-[30px] cursor-pointer'  /></Link><span className='w-[10px] h-[10px] bg-red-600 rounded-full ml-[-5px]'></span>
                            </div>
                            <AiOutlineUser className='size-[30px] cursor-pointer'/>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>  
    )
}

export default Navbar;