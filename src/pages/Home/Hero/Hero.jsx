import React from 'react'
import bgImg from '../../../assets/home/banner-1.jpg'
// console.log("Background Image Path:",bgImg);

const Hero = () => {
  return (
    <div className='min-h-screen bg-cover'style={{backgroundImage:`url(${bgImg})`}}>
      <div className='min-h-screen flex justify-start pl-11 items-center text-white bg-black bg-opacity-60'>
        <div>
          <div className='space-y-4'>
            <p className='md:text-4xl text-2xl'>We provide</p>
            <h1 className='md:text-7xl text-4xl font-bold'>Best yoga classes online</h1>
            <div className='md:w-1/2'>
              <p>
              We believe, our purpose in life is to serve the world in ways matching our unique personalities.
              To do this well for a longtime, needs a fit body & mind.
              Everyday for hours, we follow wrong postures for sleeping, sitting, walking. Our mind is stressed for many reasons. Yoga & meditation can counter this damage & prevent problems from getting bigger. 
              We bring you highly qualified trainers from Rishikesh, land of yoga. Take personal or group  classes & make a lifelong habit to be yoga fit.

              </p>
            </div>
            <div className='flex flex-wrap items-center gap-5'>
              <button className='px-7 py-3 rounded-lg bg-secondary font-bold uppercase'>Join today</button>
              <button className='px-7 py-3 rounded-lg border hover:bg-secondary font-bold uppercase'>View courses</button>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Hero