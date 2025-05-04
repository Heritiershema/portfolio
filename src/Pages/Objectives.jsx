import React from 'react';
import Footer from '../Components/Footer';

const Objectives = () => {
  return (
    <div className="bg-black pt-1">
      <div className="flex justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-8 sm:py-10 text-gray-400">
        <div className="w-full max-w-6xl bg-[#1e1e1e] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-2xl shadow-2xl">
          
          <h2 className="text-gray-300 mb-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-relaxed">
            As a software developer, I can have different goals depending on what I want to achieve. Here are some of the goals I have set for myself:
          </h2>

          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl space-y-6">
            {/* Goal 1 */}
            <div>
              <h3 className="text-[dodgerblue] font-semibold mb-2">1. Expand my knowledge:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Become proficient in a specific language (Python, Java, PHP, etc.).</li>
                <li>Learn frameworks like Node.js, Django, Spring Boot, or Laravel.</li>
                <li>Understand databases (MySQL, PostgreSQL, MongoDB).</li>
              </ul>
            </div>

            {/* Goal 2 */}
            <div>
              <h3 className="text-[dodgerblue] font-semibold mb-2">2. Gain experience in projects:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Create personal projects (website, application, API).</li>
                <li>Contribute to Open Source projects.</li>
                <li>Work in a team to improve collaboration skills.</li>
              </ul>
            </div>

            {/* Goal 3 */}
            <div>
              <h3 className="text-[dodgerblue] font-semibold mb-2">3. Find a job or start a business:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Enhance my portfolio with completed projects.</li>
                <li>Gain expertise in Git & GitHub.</li>
                <li>Find clients and start freelancing.</li>
              </ul>
            </div>

            {/* Goal 4 */}
            <div>
              <h3 className="text-[dodgerblue] font-semibold mb-2">4. Improve software architecture skills:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Learn about scalability, security, and performance.</li>
                <li>Explore DevOps tools (Docker, Kubernetes, CI/CD).</li>
                <li>Develop leadership skills in software engineering.</li>
              </ul>
            </div>

            {/* Goal 5 */}
            <div>
              <h3 className="text-[dodgerblue] font-semibold mb-2">5. Continue learning and growing:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Take online courses (Coursera, Udemy, freeCodeCamp).</li>
                <li>Join technical communities (Meetups, Discord, LinkedIn).</li>
                <li>Create blogs or tutorials to share knowledge.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Objectives;
