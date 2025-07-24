    // src/components/Skills.jsx
    import React from 'react';

    export default function Skills({ id }) {
      return (
        <section id={id} className="px-4 md:px-24 py-16 bg-[#0f1123] my-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center text-gray-200 max-w-4xl mx-auto">
            <div className="bg-[#1a1d4d] p-5 rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-200 transform hover:scale-105 font-semibold">Python</div>
            <div className="bg-[#1a1d4d] p-5 rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-200 transform hover:scale-105 font-semibold">Django</div>
            <div className="bg-[#1a1d4d] p-5 rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-200 transform hover:scale-105 font-semibold">React.js</div>
            <div className="bg-[#1a1d4d] p-5 rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-200 transform hover:scale-105 font-semibold">JavaScript</div>
            <div className="bg-[#1a1d4d] p-5 rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-200 transform hover:scale-105 font-semibold">SQL</div>
            <div className="bg-[#1a1d4d] p-5 rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-200 transform hover:scale-105 font-semibold">HTML/CSS</div>
            <div className="bg-[#1a1d4d] p-5 rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-200 transform hover:scale-105 font-semibold">Git & GitHub</div>
            <div className="bg-[#1a1d4d] p-5 rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-200 transform hover:scale-105 font-semibold">Tailwind CSS</div>
          </div>
        </section>
      );
    }
    