import {Link} from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [manage,setManage]=useState(false);

    const handleOutsideClick=()=>{
        setManage(false);
    }
  return (
    <div className="relative left-0 z-50 w-screen h-10 bg-gradient-to-b from-gray-700 to-gray-900 ">
        <ul className="flex justify-around sm:justify-evenly p-1">
            <li className="cursor-pointer capitalize font-medium text-lg sm:text-2xl text-gray-500 hover:scale-105 duration-200">
                <Link to='/' smooth duration={500}>
                    <i className="fa-solid fa-home animate-bounce sm:inline-block"/>
                    Home
                </Link>
            </li>
            <li className="cursor-pointer capitalize font-medium text-lg sm:text-2xl text-gray-500 hover:scale-105 duration-200">
                <a href="https://www.smvdu.ac.in/" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-globe animate-bounce sm:inline-block"/>
                    About</a>
            </li>
            <li onClick={(()=>{setManage(!manage)})} className="cursor-pointer capitalize font-medium text-lg sm:text-2xl text-gray-500 hover:scale-105 duration-200"> 
                <i className="fa-solid fa-user animate-bounce sm:inline-block"/>
                Manage 
            </li>
            <li className="cursor-pointer capitalize font-medium text-lg sm:text-2xl text-gray-500 hover:scale-105 duration-200">
                <Link to='/' smooth duration={500}>
                    <i className="fa-solid fa-sign-out animate-bounce sm:inline-block"/>
                    Sign out
                </Link>
            </li>
        </ul>
        {manage && 
        <>
        <div className="fixed top-0 right-0 left-0 bottom-0" onClick={handleOutsideClick}></div>
        <div className='absolute bg-gradient-to-b from-gray-300 to-gray-500 border border-black h-20 sz:h-24 w-48 sm:w-52 xl:w-52 sz:w-60 mt-1 sm:mt-0 xl:mt-0 ml-40 sm:ml-[21rem]  md:ml-[26rem] lg:ml-[35rem] xl:ml-[55rem] sz:ml-[69rem] p-2 sz:p-3 font-serif font-medium sm:font-semibold text-xl flex flex-col justify-between'>
                <Link to="/add" onClick={()=>setManage(false)}>
                    <span className=' border-black'>Add employee</span>
                </Link>
                <Link to="/remove" onClick={()=>setManage(false)}>
                    <span className=' border-black'>Remove employee</span>
                </Link>
        </div>
        </>
        }  
        </div>
        )
}

export default Navbar;