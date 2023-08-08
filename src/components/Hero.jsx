import React from 'react'
import Button from './Button'
import heroimage from '../assets/heroimage.png'

const Hero = () => {
  return (
    <>
        <section className="hero flex justify-around bg-light">
            <div className='flex items-center justify-end pl-10'>
            <div className="workpart w-[80%]">

                <h2 className='w-[50%] text-[2rem] font-bold text-purple pb-5'>Work <span className='text-sky'>Remotely</span> from your home or any other places</h2>
                <p className='text-purple w-[65%] pb-10'>We curate the best digital jobs for those who are  looking to start their career in designing.</p>

                <div className="movebutton mt-4 w-[55%] py-[0.1rem] px-20 rounded-[2.5rem] relative">
                <input className='py-5 w-[22rem] px-5 rounded-[3rem] ml-[-5rem] bg-sky placeholder:text-white placeholder:text-start' type="email" name="email" id="email" placeholder='Enter your email' />

                    <Button style="positionbutton bg-white px-8 py-3 rounded-[2rem] text-purple absolute top-[15%] right-[-1%]" text={"Get Started"}/>
                </div>
            </div>
        </div>

            <div className="heroimage pt-4">
                <img src={heroimage} alt="hero" />
            </div>
        </section>
    </>
    )
}

export default Hero