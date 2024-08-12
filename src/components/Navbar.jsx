import React from 'react'
import HeadRoom from "react-headroom"

function Navbar() {
  return (
    <HeadRoom>
        <div className='w-full h-24 lg:h-36 bg-blue-400'>
            <div className='w-full lg:w-1/3 h-full flex flex-row items-center justify-evenly'>
                <a href="/"><img src="logo.png" alt="" className='w-16 lg:w-24' /></a> 
                <p className='text-5xl lg:text-7xl text-white'>GELATERIA</p>
            </div>
        </div>
    </HeadRoom>
  )
}

export default Navbar