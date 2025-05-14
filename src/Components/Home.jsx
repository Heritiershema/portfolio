
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import Footer from './Footer';
import css from "../../public/images/CSS.png"
import Zoro from "../../public/images/Zoro.png";
import keyboard from "../../public/images/keyboard.png"
import Html from "../../public/images/HTML.png";
import Figma from "../../public/images/Figma.png";

import TailwindCss from "../../public/images/TailwindCss.png";
import Javascript from "../../public/images/Javascript.png";
import ReactImg from "../../public/images/React.png";



const Home = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_eux81gd', 'template_zdd8qyj', form.current, {
        publicKey: 'PDgVY8zQXzI4jXAcs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="min-h-screen  bg-black ">

      <h2 className="text-2xl font-bold text-center pt-20 mb-10 text-white">ABOUT ME</h2>
      <div className="flex flex-col sm:flex-row gap-10 border border-gray-600 rounded-xl bg-[#1e1e1e] m-6 p-6 sm:p-10">
        <div className="flex flex-col items-center sm:items-start sm:w-1/2">
          <img
            src={Zoro}
            alt="Heritier Shema"
            className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-full object-cover mb-6"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-white text-2xl sm:text-3xl font-bold mb-6">Heritier SHEMA</h1>
            <h2 className="text-white text-lg font-semibold mb-3">My Journey:</h2>
            <p className="text-white text-sm sm:text-base border border-gray-600 rounded-lg p-4 leading-relaxed">
              I studied coding for about a year and I am now a professional frontend developer.
              I've been working with passion and dedication. Feel free to explore more about me above.
              <br />Thank you for your support!
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center sm:w-1/2">
          <img
            src={keyboard}
            alt="Keyboard"
            className="w-full max-w-[500px] rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="py-10 px-4 sm:px-8">
        <h2 className="text-white text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="bg-[#1e1e1e] text-white border border-gray-600 rounded-xl p-6 max-w-[600px] mx-auto flex flex-wrap justify-center gap-8">
          {[
            { name: "HTML", img: Html },
            { name: "CSS", img: css },
            { name: "Figma", img: Figma },
            { name: "Tailwind CSS", img: TailwindCss },
            { name: "JavaScript", img: Javascript },
            { name: "React", img: ReactImg },
          ].map((skill, i) => (
            <div key={i} className="flex flex-col items-center w-24">
              <img className="w-12 h-12 mb-2 hover:scale-110 transition-transform" src={skill.img} alt={skill.name} />
              <h5 className="text-sm text-center">{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>


      <div className="py-10 px-4 sm:px-8">
        <h2 className="text-white text-3xl font-bold text-center mt-5">Objectives</h2>
        <div className="flex justify-center p-6">
          <div className="bg-[#1e1e1e] border border-gray-600 rounded-lg p-6 max-w-sm">
            <p className="text-white text-sm lg:text-base">
              I learned to make websites by learning and doing it with passion, which is why I never give up until I achieve my dreams. I wish the world would be filled with developers so our world could become a better place.
            </p>
          </div>
        </div>
      </div>


      <div className="bg-[#1e1e1e] border border-[dodgerblue] rounded-xl mx-4 lg:mx-20 my-6 px-4 sm:px-8 py-10">
        <h2 className=" text-white text-3xl font-bold text-center mb-12">Contact Me:</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">


          <div className="bg-black text-[dodgerblue] font-bold p-6 border-2 border-[dodgerblue] rounded-md shadow-md space-y-4 w-full max-w-md">
            <div className="flex items-center gap-4"><FaPhoneVolume /> <span>+250780762771</span></div>
            <div className="flex items-center gap-4"><FaPhoneVolume /> <span>+250739901149</span></div>
            <div className="flex items-center gap-4"><MdOutlineAttachEmail /><span>shema8642@gmail.com</span></div>
            <div className="flex items-center gap-4"><FaLinkedin /> <span>Heritier Shema</span></div>
            <div className="flex items-center gap-4"><FaLocationDot /> <span>Kigali-City, Rwanda</span></div>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-[dodgerblue] font-bold text-center">TEXT HERE</h3>
            <MdSubdirectoryArrowRight className="text-[dodgerblue] text-9xl" />
          </div>



          <form ref={form} onSubmit={sendEmail} className="w-full bg-black p-6 border-2 border-[dodgerblue] rounded-md shadow-md">
            <h2 className="text-white text-2xl font-bold mb-4">Contact Form</h2>

            <label className="block mb-3">
              <span className="text-[dodgerblue] font-medium">Names</span>
              <input type="text" name="user_name" required className="mt-1 block w-full rounded-md border border-[dodgerblue] p-2 " />
            </label>

            <label className="block mb-3">
              <span className="text-[dodgerblue] font-medium">Email</span>
              <input type="email" name="user_email"  required className="mt-1 block w-full rounded-md border border-[dodgerblue] p-2 " />
            </label>

            <label className="block mb-4">
              <span className="text-[dodgerblue] font-medium">Message</span>
              <textarea name="message" rows="4" required className="mt-1  block w-full rounded-md border border-[dodgerblue] p-2 "></textarea>
            </label>

            <div className="flex justify-center">
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
