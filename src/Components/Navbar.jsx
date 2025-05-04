import React, { useState } from 'react'
import { Link } from 'react-router'
import icon from "../../public/images/Icon.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-black p-5">
     
      <div className="flex justify-center">
        <div className="text-[dodgerblue] font-extrabold text-3xl rounded-md border border-gray-600 m-3 w-[300px] text-center">
          <h1>MY PORTFOLIO</h1>
        </div>
      </div>
      port-folio
    
      <div className="border rounded-full bg-gray-300 text-black w-full max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
         
          <div className="flex items-center pl-4">
            <img className="w-20 h-20 mr-1" src={icon} alt="Logo" />
            <h1 className="text-black text-2xl font-bold">Coding</h1>
          </div>
          <div className="flex justify-end md:hidden px-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div
            className={`${isMenuOpen ? 'flex' : 'hidden'
              } flex-col md:flex md:flex-row items-center gap-6 md:gap-10 px-4 md:px-0`}
          > 
          
            <Link to="">
              <h1 className="text-black font-bold">Home</h1>
            </Link>
            <Link to="aboutme">
              <h2 className="text-black font-bold">About Me</h2>
            </Link>
            <Link to="skills">
              <h4 className="text-black font-bold">Skills</h4>
            </Link>
            <Link to="objectives">
              <h5 className="text-black font-bold">Objectives</h5>
            </Link>
            <Link to="contactme">
              <h3 className="text-black font-bold">Contact Me</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
