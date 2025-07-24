    // src/components/About.jsx
    import React from 'react';

    export default function About({ id }) {
      return (
        <section id={id} className="px-4 md:px-24 py-16 bg-[#101244] rounded-lg shadow-inner my-8">
          <h2 className="text-3xl font-bold mb-6 text-center items-center">About Me</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-center md:text-left">
            I'm Ramnivas, a Python Developer with a strong interest in backend development and building full-stack applications.
            I completed my MCA from Galgotias College of Engineering and Technology and currently interning at Brainwave Matrix Solutions.
            I'm passionate about solving problems through code and constantly learning new technologies. My experience includes developing robust e-commerce solutions and hotel management systems, utilizing technologies like Django, React.js, and SQL databases.
          </p>
        </section>
      );
    }
    