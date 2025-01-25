import React from 'react';
import logo from '../assets/images/airbnb.svg';
import useFetch from './useFetch';
import Lists from './Lists';
import { CiGlobe} from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";

const Navbar = () => {
    const {data:item, isPending, error}=useFetch('http://localhost:8000/item')
    console.log("Fetched data: ", item);
   
    return ( 
        <>
        <div className="bg-slate-50 h-20 w-full flex justify-between px-8">
            <div className="logo self-center mr-28">
                <a href='/'><img src={logo} alt='logobnb' className='h-9'></img></a>
            </div>
            <div className="middle flex space-x-8 ">
                <button ><span className='font-bold font-Cereal text-xl'>Stays</span></button>
                <button ><span className='font-semibold text-lg font-Cereal text-gray-500'>Experiences</span></button>
            </div>
            <div className="last flex space-x-3 self-center">
                <div className='font-semibold font-Cereal'>Airbnb your home</div>
                <div><button><CiGlobe className='h-6 w-6'/></button></div>
                <div><button><RxHamburgerMenu className='h-6 w-6'/></button>
                <button className='pl-2'><FaUserCircle className='h-6 w-6'/></button>
                </div>
            </div>
        </div>
        <div className="bg-slate-50 h-24 w-auto flex justify-center pb-4 border-b-2 border-gray-200">
            <div className="search-bar-wrapper bg-white self-center justify-around border-black flex w-screen mx-60 h-16 rounded-full shadow-md mt-4 divide-x-2">
                <div className='text-xs self-center pl-5 pr-28 '><span className='font-Cereal'>Where<br></br></span><span className='font-Cereal font-light text-gray-400'>Search destinations</span></div>
                <div className='text-xs self-center pl-2'><span className='font-Cereal'>Check in <br></br></span><span className='font-Cereal font-light text-gray-400'>Add dates</span></div>
                <div className='text-xs self-center pl-2'><span className='font-Cereal'>Check out <br></br></span><span className='font-Cereal font-light text-gray-400'>Add dates</span></div>
                <div className='text-xs self-center flex pl-2 h-9'>
                    <div className='self-center mr-28'><span className='font-Cereal'>Who<br></br></span><span className='font-Cereal font-light text-gray-400'>Add Guests</span></div>
                    <div className="self-center"><button><IoSearchCircleSharp style={{color:"#ff3859"}} className='h-14 w-14 '/></button></div>
                </div>
            </div>
        </div>
        <div className="bg-slate-100 h-20 w-full px-8">
                {error && <div className="error">{error}</div>}
                {isPending && <div className="loading">Loading...</div>}
                {item && <Lists items={item} />}
        </div>
        </>
     );
}
 
export default Navbar;