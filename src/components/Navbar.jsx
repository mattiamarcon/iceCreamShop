import React from 'react'
import HeadRoom from "react-headroom"

function Navbar() {
  return (
    <HeadRoom>
        <div className='w-full h-24 bg-blue-400'>
            <div className='w-full lg:w-1/3 h-full flex flex-row items-center justify-evenly'>
                <a href="/"><img src="logo.png" alt="" className='w-16 h-16' /></a> 
                <p className='sm:text-5xl text-4xl text-white'>GELATERIA</p>
            </div>
        </div>
    </HeadRoom>
  )
}

export default Navbar