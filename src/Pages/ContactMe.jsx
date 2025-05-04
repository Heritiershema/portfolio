import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import Footer from '../Components/Footer';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_w21i0ou',
      'template_zdd8qyj',
      form.current,
      '7lmvJ7DjysSiDLI1H'
    ).then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send the message. Please try again later.', error.text);
    });
  };

  return (
    <div className="bg-black pt-1">
      <div className="bg-[#1e1e1e] border border-[dodgerblue] rounded-xl mx-4 sm:mx-6 lg:mx-20 my-6 px-4 sm:px-8 py-10">
        <h2 className="text-white text-3xl font-bold text-center mb-12">Contact Me:</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center justify-center">


          <div className="bg-black text-[dodgerblue] font-bold p-6 border-2 border-[dodgerblue] rounded-md shadow-md space-y-4 w-full">
            <div className="flex items-center gap-4"><FaPhoneVolume /> <span>+250780762771</span></div>
            <div className="flex items-center gap-4"><FaPhoneVolume /> <span>+250739901149</span></div>
            <div className="flex items-center gap-4"><MdOutlineAttachEmail /><span>shema8642@gmail.com</span></div>
            <div className="flex items-center gap-4"><FaLinkedin /> <span>Heritier Shema</span></div>
            <div className="flex items-center gap-4"><FaLocationDot /> <span>Kigali-City, Rwanda</span></div>
          </div>


          <div className="hidden lg:flex flex-col items-center justify-center">
            <h3 className="text-[dodgerblue] font-bold text-center mb-2">TEXT HERE</h3>
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
              <input type="email" name="user_email" required className="mt-1 block w-full rounded-md border border-[dodgerblue] p-2 " />
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

export default ContactMe;
