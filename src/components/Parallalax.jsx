import React from 'react'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";
import {useGSAP} from "@gsap/react"

function Parallalax() {

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".pElements",{
      scrollTrigger:{
        trigger: ".pElements",
      },
      y:0,
      stagger:1,
      delay:0.5,
      duration:1,
      opacity:1,
      ease:"back"
    })
  },[]);

  return (
    <section id='parallax' className='flex max-lg:flex-col justify-center items-center'>
      <video muted autoPlay loop={true} className='w-52 lg:w-96  pointer-events-none '>
        <source src='animation.mp4' type='video/mp4'  />
      </video>
      <div id='parallaxText' className='opacity-1 flex flex-col items-center justify-center text-5xl lg:text-7xl w-fit'>
        <p className='pElements p1'>GUSTOSO</p>
        <p className='pElements p2'>RINFRESCANTE</p>
        <p className='pElements p3'>DOLCE</p>
        <p></p>
      </div>
    </section>
    
  )
}

export default Parallalax