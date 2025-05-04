import { FaPhoneVolume, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import Html from "../../public/images/HTML.png";
import Figma from "../../public/images/Figma.png";
import TailwindCss from "../../public/images/TailwindCss.png";
import Javascript from "../../public/images/Javascript.png";
import ReactImg from "../../public/images/React.png";
import zoro from "../../public/images/Zoro.png"



const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

       
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-3 text-blue-600 font-medium text-sm">
              <div className="flex items-center gap-2">
                <FaPhoneVolume className="text-base" />
                <span>+250 780 762 771</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneVolume className="text-base" />
                <span>+250 739 901 149</span>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineAttachEmail className="text-base" />
                <span>shema8642@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin className="text-base" />
                <span>Heritier Shema</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-base" />
                <span>Kigali City, Rwanda</span>
              </div>
            </div>
          </div>

       
          <div>
            <h2 className="text-xl font-semibold mb-4">Services I Provide</h2>
            <ul className="list-disc list-inside text-sm text-gray-800">
              <li>Web Development</li>
            </ul>
          </div>

         
          <div>
            <h2 className="text-xl font-semibold mb-4">About</h2> port-folio
            <p className="text-sm text-gray-800">
              This portfolio contains some of the courses I have taken and tools that improve my design skills.
            </p>
            <h3 className="text-lg font-semibold mt-4">Privacy Policy</h3>
            <p className="text-sm text-gray-800">
              If you’d like to collaborate, visit me on GitHub or reach out directly. Thank you!
            </p>
          </div>

       
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold mb-2">Status</h2>
            <div className="w-14 h-14 border border-black rounded-md mb-3 overflow-hidden">
              <img src={zoro} alt="Status" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-blue-600 font-bold">Frontend Developer</h3>
            <p className="text-blue-600 font-medium text-sm">I do coding and I love it.</p>
          </div>
        </div>

     
        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
          <div className="flex gap-4 text-sm font-medium">
            <span>KINYARWANDA</span>
            <span>ENGLISH</span>
          </div>
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Heritier Shema. All rights reserved.
          </p>
        </div>

<div className="flex justify-center gap-6 sm:gap-8 mt-8 flex-wrap">
  {[
    { name: "HTML", img: Html },
    { name: "Figma", img: Figma },
    { name: "Tailwind CSS", img: TailwindCss },
    { name: "JavaScript", img: Javascript },
    { name: "React", img: ReactImg },
  ].map(({ name, img }) => (
    <img
      key={name}
      src={img}
      alt={name}
      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
    />
  ))}
</div>

      </div>
    </footer>
  );
};

export default Footer;



