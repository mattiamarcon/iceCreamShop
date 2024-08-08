import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer bg-blue-400 text-neutral-content p-10 text-xl">
    <aside>
        <img src="footer.png" alt="" className='w-16 h-16' />
        <p>Gelateria</p>
        <a href='https://maps.app.goo.gl/XZZqa5VqLJTS4vVv5' target='_blank'>Via Tonin 5, Azzano decimo(PN)</a>
    </aside>
    <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
        <FaInstagram className='w-8 h-8'/>
        <FaFacebookF className='w-8 h-8'/>
        <FaGoogle className='w-8 h-8' />
        </div>
    </nav>
    </footer>
  )
}

export default Footer

