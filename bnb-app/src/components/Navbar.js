import React from 'react';
import logo from '../assets/images/airbnb.svg';
import { CiGlobe} from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";

const Navbar = () => {
    return ( 
        <>
        <div className="bg-slate-100 h-20 w-full flex justify-between px-8">
            <div className="logo self-center mr-28">
                <img src={logo} alt='logobnb' className='h-9'></img>
            </div>
            <div className="middle flex space-x-8 ">
                <button><span className='font-bold font-Cereal text-xl'>Stays</span></button>
                <button><span className='font-semibold text-lg font-Cereal text-gray-500'>Experiences</span></button>
            </div>
            <div className="last flex space-x-3 self-center">
                <div className='font-semibold font-Cereal'>Airbnb your home</div>
                <div><button><CiGlobe className='h-6 w-6'/></button></div>
                <div><button><RxHamburgerMenu className='h-6 w-6'/></button>
                <button className='pl-2'><FaUserCircle className='h-6 w-6'/></button>
                </div>
            </div>
        </div>
        <div className="bg-slate-50 h-20 w-auto flex justify-center pb-4 border-b-2 border-gray-200">
            <div className="search-bar-wrapper bg-white self-center justify-around border-black flex w-screen mx-60 h-14 rounded-full shadow-lg mt-4 divide-x-2">
                <div className='text-sm self-center pl-5 pr-28 '><span className='font-Cereal'>where<br></br>search destinations</span></div>
                <div className='text-sm self-center pl-2'><span className='font-Cereal'>Check in <br></br>Add dates</span></div>
                <div className='text-sm self-center pl-2'><span className='font-Cereal'>Check out <br></br>Add dates</span></div>
                <div className='text-sm self-center flex pl-2 h-10'>
                    <div className='self-center mr-28'><span className='font-Cereal'>Who<br></br>Add Guests</span></div>
                    <div className="self-center"><IoSearchCircleSharp style={{color:"#ff3859"}} className='h-14 w-14 '/></div>
                </div>
            </div>
        </div>
        <div className="bg-slate-100 h-20 w-full flex justify-between px-8">
            

        </div>
        </>
     );
}
 
export default Navbar;