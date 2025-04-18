import React, { useState } from 'react'
import AnimatedBackground from './AnimatedBackground'
import HeroContactForm from './HeroContactForm'
import PopupContactForm from './PopupContactForm'

const Hero2 = () => {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className='h-screen mx-auto relative overflow-hidden font-great-vibes'>
      <AnimatedBackground className="absolute" />

      <div className='relative px-6 md:px-12 z-20 text-white max-w-8xl mx-auto font-bold flex flex-col md:flex-row items-center justify-center h-screen'>

        {/* Left Section */}
        <div className='w-full md:w-[60%] flex flex-col gap-6 justify-baseline text-center md:text-left'>
          <p className='font-great-vibes text-5xl md:text-8xl'>
            Bold ideas into impactful products
          </p>
          <p className='text-base md:text-xl font-medium capitalize'>
            A trusted B2B marketing partner for professional services firms and SaaS seeking growth by unleashing their website's potential.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className='bg-black p-3 w-52 md:w-60 mx-auto md:mx-0 flex justify-center font-great-vibes'
          >
            Let's Build A Website
          </button>
        </div>

        {/* Right Section - Hidden on Mobile */}
        <div className='hidden md:block w-full md:w-[40%]'>
          <HeroContactForm />
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && <PopupContactForm onClose={() => setShowPopup(false)} />}
    </div>
  )
}

export default Hero2
