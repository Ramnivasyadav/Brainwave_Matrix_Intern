    // src/components/Contact.jsx
    import React from 'react';
    import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

    export default function Contact({ id }) {
      return (
        <section id={id} className="px-4 md:px-24 py-16 bg-[#0f1123] my-8 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
          <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto leading-relaxed">
            I'm always open to new opportunities and collaborations. Feel free to reach out via email or connect with me on LinkedIn and GitHub!
          </p>
          <div className="flex justify-center gap-8 text-4xl">
            <a href="mailto:ryadav805716@gmail.com" className="hover:text-blue-400 transition-colors duration-200" title="Email Me">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/ramnivas-yadav-0827741ab/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200" title="LinkedIn Profile">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Ramnivasyadav" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200" title="GitHub Profile">
              <FaGithub />
            </a>
          </div>
        </section>
      );
    }
    