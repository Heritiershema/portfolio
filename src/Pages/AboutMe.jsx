import React from 'react';
import Footer from '../Components/Footer';
import zoro from "../../public/images/Zoro.png"

const AboutMe = () => {
  return (
    <div className="bg-black text-white pt-10 min-h-screen">
      <div className="flex justify-center font-extrabold text-3xl mb-8">
        <h1>About Me</h1>
      </div>

 
      <div className="flex justify-center mt-10 mb-2">
        <img
          className="rounded-full w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 object-cover"
          src={zoro}
          alt="Heritier Shema"
        />
      </div>
      <h2 className="flex justify-center font-bold text-xl sm:text-2xl mb-6">Heritier SHEMA</h2>

   
      <div className="flex justify-center px-4 sm:px-6">
        <div className="bg-[#1e1e1e] border border-blue-600 rounded-lg max-w-3xl w-full mb-20">
          <p className="p-5 text-sm sm:text-base leading-relaxed">
            I’m <span className="text-blue-400 font-semibold">Heritier Shema</span>, a passionate frontend developer
            dedicated to building clean, responsive, and user-friendly websites.
            After a year of self-driven learning and hands-on practice, I’ve developed strong skills in 
            <span className="text-blue-400 font-medium"> HTML</span>, 
            <span className="text-blue-400 font-medium"> CSS</span>, 
            <span className="text-blue-400 font-medium"> JavaScript</span>, 
            <span className="text-blue-400 font-medium"> Tailwind CSS</span>, and 
            <span className="text-blue-400 font-medium"> React</span>.
            <br /><br />
            I love turning ideas into beautiful, functional web experiences.
            Every line of code is written with focus, creativity, and a desire to grow.
          </p>
        </div>
      </div>

      {/* Footer (no side padding) */}
      <Footer />
    </div>
  );
};

export default AboutMe;

