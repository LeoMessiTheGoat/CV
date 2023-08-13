import React from 'react'
import StreetFighter from '../assets/street-fighter.png'
import SuperHero from '../assets/Superhero.png'
import TipCalculator from '../assets/calculator.png'
import OnlineStore from '../assets/Online-store.png'
import PetStore from '../assets/petstore.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#2a1b3d]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

          {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
          {/* Calculator */}
          <div style={{backgroundImage: `url(${TipCalculator})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Tip Calculator APP
                </span>
                <div className='pt-8 text-center'>
                  <a target='_blank' href="https://polite-entremet-7437d5.netlify.app">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a target='_blank' href="https://github.com/LeoMessiTheGoat/TipCalculator">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code </button>
                  </a>
                </div>
            </div>
          </div>
          {/* Hero */}
          <div style={{backgroundImage: `url(${SuperHero})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  SuperHero App
                </span>
                <div className='pt-8 text-center'>
                  <a target='_blank' href="https://beautiful-froyo-7e50a5.netlify.app">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a target='_blank' href="https://github.com/LeoMessiTheGoat/SuperHeroApp">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code </button>
                  </a>
                </div>
            </div>
          </div>
          {/* Street fighter */}
        <div style={{backgroundImage: `url(${StreetFighter})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Street Fighter Game
                </span>
                <div className='pt-8 text-center'>
                  <a target='_blank' href="https://harmonious-alfajores-e919d1.netlify.app">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a target='_blank' href="https://github.com/LeoMessiTheGoat/Street-Fighter-Game">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code </button>
                  </a>
                </div>
            </div>
          </div>
          {/* Online Store */}
          <div style={{backgroundImage: `url(${OnlineStore})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Online Clothing Store
                </span>
                <div className='pt-8 text-center'>
                  <a target='_blank' href="https://funny-naiad-86c67c.netlify.app">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a target='_blank' href="https://github.com/LeoMessiTheGoat/Online-store">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code </button>
                  </a>
                </div>
            </div>
          </div>

          {/* Pet Store */}
          <div style={{backgroundImage: `url(${PetStore})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Pet Store
                </span>
                <div className='pt-8 text-center'>
                  <a target='_blank' href="https://fantastic-cannoli-62bb56.netlify.app">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a target='_blank' href="https://github.com/LeoMessiTheGoat/next-js-petstore">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code </button>
                  </a>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Work