import React from 'react'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";
import {useGSAP} from "@gsap/react"

function Parallalax() {

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);

    // gsap.to("#parallaxText",{
    //   scrollTrigger:{
    //     trigger:"#parallaxText",
    //   },
    //   opacity:1,
    //   y:0,
    //   delay:1,
    // })

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
    <section id='parallax' className='flex max-lg:flex-col'>
      <div className='w-full h-96'>

      </div>
      <video muted autoPlay loop={true} className='w-36 lg:w-60 mx-auto'>
        <source src='animation.mp4' type='video/mp4'  />
      </video>
      <div id='parallaxText' className='opacity-1 flex flex-col items-center justify-center w-full text-4xl'>
        <p className='pElements p1'>GUSTOSO</p>
        <p className='pElements p2'>RINFRESCANTE</p>
        <p className='pElements p3'>DOLCEZZA</p>
        <p></p>
      </div>
    </section>
    
  )
}

export default Parallalax