import React from 'react'
import Footer from '../Components/Footer'
import Figma from "../../public/images/Figma.png"
import html from "../../public/images/HTML.png"
import css from "../../public/images/CSS.png"
import tailwind from "../../public/images/TailwindCss.png"
import javascript from "../../public/images/Javascript.png"
import react from "../../public/images/React.png"


const Skills = () => {
  return (

<div className='bg-black'>
<div className="py-10 px-4 sm:px-8">
        <h2 className="text-white text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="bg-[#1e1e1e] text-white border border-gray-600 rounded-xl p-6 max-w-[600px] mx-auto flex flex-wrap justify-center gap-8">
          {[
            { name: "HTML", img: html },
            { name: "CSS", img: css },
            { name: "Figma", img: Figma },
            { name: "Tailwind CSS", img: tailwind  },
            { name: "JavaScript", img: javascript },
            { name: "React", img: react },
          ].map((skill, i) => (
            <div key={i} className="flex flex-col items-center w-24">
              <img className="w-12 h-12 mb-2 hover:scale-110 transition-transform" src={skill.img} alt={skill.name} />
              <h5 className="text-sm text-center">{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>

      <Footer />

</div>


  )
}

export default Skills
