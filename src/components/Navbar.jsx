    // src/components/Navbar.jsx
    import React from 'react';

    // Navbar component receives the scrollToSection function as a prop from App.jsx
    export default function Navbar({ scrollToSection }) {
      return (
        <nav className="bg-[#101244] py-4 px-8 flex flex-col sm:flex-row justify-between items-center shadow-md rounded-b-lg fixed w-full z-10 top-0">
          <h1 className="text-3xl font-extrabold text-white mb-4 sm:mb-0">Ram's Portfolio</h1>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 text-lg font-medium">
            {/* Each list item calls scrollToSection with the ID of the target section */}
            <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200" onClick={() => scrollToSection('home')}>Home</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200" onClick={() => scrollToSection('about')}>About</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200" onClick={() => scrollToSection('skills')}>Skills</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200" onClick={() => scrollToSection('projects')}>Projects</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors duration-200" onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </nav>
      );
    }
    