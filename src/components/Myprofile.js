import React from 'react'
import ReactTyped from 'react-typed'

function Myprofile() {
  return (
    <div className='text-white'>
        <div className='flex justify-center'>
            
                <img src=''></img>
           
           
                <h1>Mao Mercado                          </h1>  
            
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