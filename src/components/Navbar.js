import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-emerald-400' href="#">
            MAO
        </h1>
        <ul className='hidden md:flex'>
                <li className='p-4'>HOME</li>
                <li className='p-4'>ABOUT</li>   
                <li className='p-4'>PROJECTS</li>
                <li className='p-4'>CONTACT</li> 
        </ul>    
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 block md:hidden' : 'fixed left-[-100%]'}>
            {/* <h1 className='m-4 w-full text-3xl font-bold text-emerald-400' href="#">
            MAO
            </h1> */}
            <ul className='pt-24 '>
                <li className='p-4 border-b border-gray-600'>HOME</li>
                <li className='p-4 border-b border-gray-600'>ABOUT</li>   
                <li className='p-4 border-b border-gray-600'>PROJECTS</li>
                <li className='p-4 border-b border-gray-600'>CONTACT</li> 
            </ul>   
        </div>
    </div>
  )
}

export default Navbar