    // src/components/Projects.jsx
    import React from 'react';

    export default function Projects({ id }) {
      return (
        <section id={id} className="px-4 md:px-24 py-16 bg-[#101244] rounded-lg shadow-inner my-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#0f1123] p-6 rounded-lg shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-103">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">E-commerce Website</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">Developed a robust e-commerce platform utilizing React.js for a dynamic frontend and Django for a scalable backend. Features include secure user authentication, comprehensive product listings, efficient cart management, and seamless order placement.</p>
              <a className="text-blue-400 hover:underline font-medium flex items-center gap-2" href="#" target="_blank" rel="noopener noreferrer">
                View Project <span className="text-sm">→</span>
              </a>
            </div>
            <div className="bg-[#0f1123] p-6 rounded-lg shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-103">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Hotel Management System</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">Created a full-featured Hotel Management System using HTML, CSS, JavaScript, and React.js. This project involved designing intuitive user interfaces, implementing booking functionalities, and ensuring efficient data handling for hotel operations.</p>
              <a className="text-blue-400 hover:underline font-medium flex items-center gap-2" href="#" target="_blank" rel="noopener noreferrer">
                View Project <span className="text-sm">→</span>
              </a>
            </div>
          </div>
        </section>
      );
    }
    