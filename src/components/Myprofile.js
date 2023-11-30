import React from 'react'
import ReactTyped from 'react-typed'
import myImage from '../img/IMG_8129-removebg-previewv2.png'

function Myprofile() {
  return (
    <div className='text-white'>
        <div className='p-40 flex flex-col text-center items-center'>
            <img className='object-contain h-48 w-96'src={myImage}/>
            <span className="font-bold">&lt;/Airman<span className='text-red-900' id="coder">Coder</span>&gt;</span>
            <div className=' '> 
                <ReactTyped 
                className=''
                strings={['Aircraft Mechanic','Front-end dev','Aircraft Enrollment Analyst','Video Editor']} typeSpeed={40} backSpeed={50} loop/>
            </div>
        </div>
    </div>
  )
}

export default Myprofile