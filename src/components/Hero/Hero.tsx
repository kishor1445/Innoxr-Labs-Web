import React, { useState } from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import Image from '@/assets/building.jpeg'
import Navbar from '../Navbar/Navbar'
import BImage from '@/assets/s_building.jpeg'
import NextImage from '@/assets/s_chatbot.jpeg'

import Project0 from '@/assets/building.jpeg'
import SelectBar from '@/components/SelectBar/SelectBar'

type HeroProps = {
    current: number,
    setCurrent: Function
}

const Hero: React.FC = () => {
    const title = [
        "Building AR/VR",
        "Influencer Chatbot",
        "Interior AR",
        "College VR",
        "Speech to viedo"
    ]
    const btn_color = [
        "#C6621A",
        "#A81AF0",
        "#95380D",
        "#E50622",
        "#2C1296"
    ]
    const [BG, setBG] = useState([

    ])
    const [about, setAbout] = useState<String[]>([
        "About 1",
        "About 2",
        "About 3",
        "About 4",
        "About 5"
    ])
    const [current, setCurrent] = useState<number>(0);

    const current_inc = () => {
        if (current >= 4) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }

    const current_dec = () => {
        if (current <= 0) {
            setCurrent(4)
        } else {
            setCurrent(current - 1)
        }
    }

    const temp = "#50d71e"

  return (
    <div className='tw-relative'>
    <Navbar />
    <div className="tw-w-full tw-h-screen tw-bg-cover" style={{backgroundImage: `url(${Image})`}}>
        <motion.div
            initial={{
                opacity: 0
             }}
             animate={{
                opacity: 1
             }}
             transition={{
                duration: 2,
                delay: 1
             }}
            className='tw-absolute tw-flex tw-flex-col tw-bottom-96 tw-mx-20 tw-gap-8 tw-w-5/12'>
            <h1 className='tw-text-6xl tw-font-donegal-one'>{title[current]}</h1>
            <p className='tw-text-xl'>AR: Architects can overlay 3D models onto physical spaces to visualize the final product within the real-world context. This allows for real-time adjustments and better client presentations.</p>
            <div>
                <Button className={`tw-bg-project_${current}`}>Explore Now</Button>
            </div>
        </motion.div>
        <motion.div
            initial={{
                x: 100,
                opacity: 0
             }}
             animate={{
                x: 0,
                opacity: 1
             }}
             transition={{
                duration: 1,
                delay: 1
             }}
            className='tw-absolute tw-flex tw-bottom-28 tw-right-0 tw-mx-12 tw-gap-8'
            >
            <div className='tw-w-96 tw-border-white tw-border-4 tw-rounded-3xl'>
                <img className='tw-rounded-3xl tw-h-full' src={BImage} />
            </div>
            <div className='tw-w-1/3'>
                <div className='tw-w-80 tw-h-96 tw-mt-16'>
                    <img className='tw-rounded-3xl tw-h-full tw-cursor-pointer' src={NextImage} onClick={current_inc} />
                </div>
            </div>
        </motion.div>
        <motion.div
            initial={{
                opacity: 0
             }}
             animate={{
                opacity: 1
             }}
             transition={{
                duration: 2,
                delay: 1
             }}
            className='tw-absolute tw-bottom-5 tw-w-full tw-h-8 tw-flex tw-items-center tw-justify-center'>
            <SelectBar I={current} max={5} func={setCurrent} />
        </motion.div>
    </div>
    </div>
  )
}

export default Hero