import React from 'react'
import LOGO from "@/assets/icon.png"
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import "./style.css"

const Navbar: React.FC = () => {
  return (
    <motion.nav
        className='tw-absolute tw-w-full tw-flex tw-items-center tw-justify-between tw-px-8 tw-py-4 tw-font-dm-sans tw-text-xl'
        animate={{
            y: 0,
            opacity: 1
        }}
        initial={{
            y: -90,
            opacity: 0
        }}
        transition={{
            duration: 1
         }}
    >
        <div>
            <img src={LOGO} alt="Innoxr Logo" width={60} height={60} />
        </div>
        <div className='tw-flex tw-gap-12'>
            <Link className='nav' to='service' smooth={true} >Service</Link>
            <Link className='nav' to='pricing' smooth={true} >Pricing</Link>
            <Link className='nav' to='about' smooth={true} >About</Link>
            <Link className='nav' to='contact' smooth={true} >Contact</Link>
            <Link className='nav' to='login' smooth={true} >Login</Link>
        </div>
    </motion.nav>
  )
}

export default Navbar