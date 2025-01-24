import React from 'react';
import logo from '../assets/images/airbnb.svg';

const Navbar = () => {
    return ( 
        <>
        <div className="bg-slate-100 h-20 w-full flex justify-between px-8">
            <div className="logo self-center mr-28">
                <img src={logo} alt='logobnb' className='h-9'></img>
            </div>
            <div className="middle flex space-x-8 ">
                <button><span className='font-bold text-xl'>Stays</span></button>
                <button><span className='font-semibold text-lg text-gray-500'>Experiences</span></button>
            </div>
            <div className="last flex space-x-3 self-center">
                <div className='font-semibold'>Airbnb your home</div>
                <div>LnR</div>
                <div><button>ham</button>
                <button className='pl-2'>pfp</button>
                </div>
            </div>
        </div>
        <div className="bg-slate-50 h-20 w-auto flex justify-center pb-4 border-b-2 border-gray-200">
            <div className="search-bar-wrapper bg-white self-center justify-around border-2 border-black flex w-screen mx-60 h-14 rounded-full">
                <div className='text-sm self-center pl-5 pr-28'>where<br></br>search destinations</div>
                <div className='text-sm self-center'>check in <br></br>Add dates</div>
                <div className='text-sm self-center'>check out <br></br>Add dates</div>
                <div className='text-sm self-center flex'>
                    <div className='pr-28'>
                    Who <br></br>Add Guests
                    </div>
                    <div className="self-center">search</div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;