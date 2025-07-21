import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineNightsStay } from "react-icons/md";



const Navbar = () => {
  return (
    <header className='fixed top-6 left-1/2 transform -translate-x-1/2 z-[1054] backdrop-blur-md transition-all durantion-500 ease-in-out w-[95%] md:w-[1100px] rounded-2xl'>
        <nav className='flex items-center  justify-between px-6 py-3  border shadow-xl rounded-full bg-white text-black  border-black/10 w-full'>
        <a>
            <div className='flex items-center space-x-2 cursor-pointer'>
                <span className='font-medium text-sm'>Xenotix Tech</span>
            </div>
        </a>
        <div className='hidden md:flex items-center space-x-6 text-sm font-medium'>
            <a className='hover: text-gray-700'>Home</a>
            <a className='hover: text-gray-700'>Tech Stack</a>
            <a className='hover: text-gray-700'>Services</a>
            <a className='hover: text-gray-700'>Portfolio</a>
            <a className='hover: text-gray-700'>Articles</a>
        </div>
        <div className='flex items-center space-x-4'>
            <button><MdOutlineNightsStay size={21} />
</button>
            <a className='text-sm font-medium px-4 py-1.5 rounded-full transition bg-black text-white hover:bg-gray-800 flex items-center gap-2'>Contact Now <span><FaLongArrowAltRight /></span></a>
        </div>
        </nav>
    </header>

  );
};

export default Navbar;
