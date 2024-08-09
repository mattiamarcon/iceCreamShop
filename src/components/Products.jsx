import React from 'react'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";
import {useGSAP} from "@gsap/react"

const Card=({img,text})=>{

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".card",{
            scrollTrigger:{
                trigger: ".card",
            },
            y:0,
            stagger:1.5,
            delay:0.5,
            duration:1,
            opacity:1,
            ease:"back"
        })
      },[]);

    return(
        <div className='bg-blue-400 flex flex-col items-center w-2/3 lg:w-1/4 gap-12 p-5 text-white card opacity-0 translate-y-20'>
            <img src={img} alt="" className='w-3/5' />
            <h1 className='text-5xl md:text-6xl xl:text-7xl'>{text}</h1>
        </div> 
    )
}

function Products() {

  return (
    <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:justify-evenly my-12 a'>
        <Card img={"gelatoCard.png"} text={"GELATI"}  />
        <Card img={"cake.png"} text={"TORTE"}  />
        <Card img={"caffe.png"} text={"BAR"}  />
    </div>
        
 
  )
}

export default Products
