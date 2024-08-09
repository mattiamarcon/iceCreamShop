import React from 'react'
import gsap from "gsap"
import {useGSAP} from "@gsap/react"

function Hero() {

    useGSAP(()=>{
        gsap.to("#heroElements",{opacity:1,delay:1,duration:2,y:0})
    },[]);

  return (
    <section className='my-2 w-full relative flex items-center justify-center'>
        <img src="banco.jpg" alt="" className='saturate-50 opacity-85 w-full h-lvh  object-cover mx-auto ' />
        <div id='heroElements' className='absolute flex flex-col items-center text-center gap-10 opacity-0 translate-y-20 p-5 '>
            <p className='text-white text-6xl lg:text-9xl tracking-wider'>Bontà e tradizione dal 1989</p>
            <a href='#parallax' className='w-fit p-5 bg-blue-400 hover:bg-blue-500 rounded-md border-black text-white text-3xl border-2'>SCOPRI DI PIU'</a>
        </div>
        
    </section>
  )
}

export default Hero