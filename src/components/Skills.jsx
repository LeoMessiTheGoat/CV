import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import GITHUB from '../assets/github.png'
import REACT from '../assets/react.png'
import JAVASCRIPT from '../assets/javascript.png'
import TAILWIND from '../assets/Tailwind CSS.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#2a1b3d] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          {/* HTML DIV */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className= 'w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          {/* CSS DIV */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className= 'w-20 mx-auto' src={CSS} alt="CSS icon" />
            <p className='my-4'>CSS</p>
          </div>
          {/* GITHUB DIV */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className= 'w-20 mx-auto' src={GITHUB} alt="GITHUB icon" />
            <p className='my-4'>GITHUB</p>
          </div>
          {/* REACT DIV */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className= 'w-20 mx-auto' src={REACT} alt="REACT icon" />
            <p className='my-4'>REACT</p>
          </div>
          {/* JAVASCRIPT DIV */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className= 'w-20 mx-auto' src={JAVASCRIPT} alt="JAVASCRIPT icon" />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          {/* TAILWIND DIV */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className= 'w-20 mx-auto my-5' src={TAILWIND} alt="TAILWIND icon" />
            <p className='my-4'>TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills