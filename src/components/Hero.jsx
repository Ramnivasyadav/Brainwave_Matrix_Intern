    // src/components/Hero.jsx
    import React from 'react';
    import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
    import { Typewriter } from 'react-simple-typewriter';

    export default function Hero({ id }) {
      
      const developerIllustrationSrc = "/banner.png";

      return (
        <section id={id} className="w-full flex flex-col md:flex-row justify-center items-center px-4 md:px-24 py-16 text-center md:text-left">
          <div className="text-left max-w-xl mx-auto md:mx-0 md:mr-12 lg:mr-24">
            <h2 className="text-3xl md:text-4xl font-light leading-snug mb-2">
              Hi, My name is <span className="text-blue-300 font-semibold">Ram</span>
              <br />And I am a passionate
            </h2>
            <h3 className="text-2xl mt-2 text-blue-400 font-bold">
              <Typewriter
                words={["Python Developer", "React Developer", "Backend Enthusiast"]}
                loop={0} // Loop indefinitely
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h3>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-6 mt-6 text-3xl text-white">
              <a href="https://github.com/Ramnivasyadav" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200" title="GitHub Profile">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ramnivas-yadav-0827741ab/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200" title="LinkedIn Profile">
                <FaLinkedin />
              </a>
              <a href="mailto:ryadav805716@gmail.com" className="hover:text-blue-400 transition-colors duration-200" title="Email Me">
                <FaEnvelope />
              </a>
            </div>

            {/* Resume Button */}
            <a href="https://drive.google.com/file/d/1dTeMttyjYt_Lccz5BmmuSEiAZQHHGqgn/view?usp=drivesdk" target='_blank' rel="noopener noreferrer">
              <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105">
                Download Resume
              </button>
            </a>
          </div>

          {/* Developer Illustration Image */}
          <img
            src= "banner.png"
            alt="Developer Illustration"
            className="w-64 md:w-80 mt-12 md:mt-0 mx-auto shadow-xl"
            // Fallback for image loading errors
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/320x320/0f1123/FFFFFF?text=Image+Not+Found"; }}
          />
        </section>
      );
    }



    
    