"use client"
import React from 'react'
import Image from 'next/image'
import hero from '@/assets/hero-image.png'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";


export default function HeroSection() {
  return (
    <>
    <section className="lg:py-16">
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='col-span-8 place-self-center text-center sm:text-left justify-self-start' >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>Hello, I&apos;m{" "}</span> 
                <br />
                <TypeAnimation
                    sequence={[
                        'Anoma Sahar',
                        1000, 
                        'Web Developer',
                        1000,
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                    />
            </h1>
            <p className='text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl'>
            Full Stack Developer proficient in Next.js, TypeScript, Python, FastAPI, Docker, and Tailwind CSS. 
            Experienced in building web applications with a strong front-end and back-end foundation. 
            Eager to contribute to innovative projects.
            </p>
            <div>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
                {/* <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                </button> */}
            </div>
            </motion.div>
            <motion.div className='col-span-4 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image src={hero} alt='' 
                    width={300} 
                    height={300} 
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' />
                </div>
            </motion.div>
        </div>
    </section>
    </>
  )
}
