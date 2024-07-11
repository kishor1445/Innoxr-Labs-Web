import React from 'react'
import { Button } from '@/components/ui/button'

const About: React.FC = () => {
  return (
    <div className="tw-bg-black/60 tw-backdrop-blur-sm tw-mx-80 tw-py-14 tw-rounded-3xl tw-mt-64" id='about'>
        <h1 className='tw-text-center tw-font-dm-sans tw-text-3xl tw-font-bold'>About</h1>
        <p className='tw-my-11 tw-text-xl tw-px-10'>INNOXR is at the forefront of Augmented Reality (AR), Virtual Reality (VR), Extended Reality (XR), and Generative AI technologies. We create trailblazing solutions that blend the digital and physical worlds, unlocking new realms of possibilities. Our AR/VR real estate platform enables builders to showcase properties with unprecedented realism. Prospective buyers can explore every corner of a building, both inside and out, through immersive virtual experiences. We empower influencers with personalized chatbots that engage their followers authentically, fostering deeper connections through conversational AI. In the realm of education, our VR environments transport students to virtual classrooms, labs, and moot courts, transcending geographical boundaries and delivering unparalleled learning experiences. Our AR interior design app revolutionizes home decor by scanning rooms and recommending products tailored to the unique dimensions and aesthetics of each space. Moreover, our voice-to-video technology seamlessly transforms spoken words into captivating visual content, unleashing new frontiers in storytelling and content creation. At INNOXR, we are driven by a passion for innovation, combining cutting-edge AR, VR, XR, and Generative AI to create transformative, intuitive, and immersive experience that redefine industries and elevate everyday life.</p>
        <div className='tw-flex tw-items-center tw-justify-center'>
          <Button className="">Explore Now</Button>
        </div>
    </div>
  )
}

export default About