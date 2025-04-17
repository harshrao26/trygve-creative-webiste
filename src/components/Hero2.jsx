import React from 'react'
import AnimatedBackground from './AnimatedBackground'
import HeroContactForm from './HeroContactForm'

const Hero2 = () => {
  return (
    <div className='h-screen mx-auto relative overflow-hidden font-great-vibes '>
      <AnimatedBackground className="absolute" />
      <div className=' relative px-12 z-20 text-white max-w-8xl mx-auto  font-bold flex items-center justify-center h-screen'>
       <div className='w-[60%] flex flex-col gap-8 justify-baseline'>
       <p className='font-great-vibes text-8xl '>
        Bold ideas into impactful products
        </p>
        <p className='text-xl font-medium capitalize'>
        A trusted B2B marketing partner for professional services firms and SaaS seeking growth by unleashing their website's potential.


        </p>

        <p className='bg-black p-3  w-60 flex justify-center font-great-vibes'>
            Let's Build A Website
        </p>
       </div>
       <div className='w-[40%]'>

       <HeroContactForm />

       </div>
      </div>
    </div>
  )
}

export default Hero2
