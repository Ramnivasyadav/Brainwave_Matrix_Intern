    // src/App.jsx
    import React from 'react';
    // Import all your separate section components
    import Navbar from './components/Navbar';
    import Hero from './components/Hero';
    import About from './components/About';
    import Skills from './components/Skills';
    import Projects from './components/Projects';
    import Contact from './components/Contact';
    import Footer from './components/Footer';

    export default function App() {
      // This function handles smooth scrolling to different sections of the page.
      // It's passed down to the Navbar component so it can trigger scrolls.
      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      return (
        // Main container for the entire portfolio, applying global background and text styles
        <div className="min-h-screen bg-gradient-to-b from-[#0f1123] to-[#0f1123] text-white font-sans">
          {/* Navbar component: It's fixed at the top and receives the scrollToSection function as a prop */}
          <Navbar scrollToSection={scrollToSection} />

          {/* This div adds top padding to the content to prevent it from being hidden
              behind the fixed navbar. Adjust 'pt-20' if your navbar's height changes. */}
          <div className="pt-20">
            {/* Each section component is rendered here.
                The 'id' prop is crucial for the smooth scrolling functionality,
                matching the IDs used in the Navbar's onClick handlers. */}
            <Hero id="home" />
            <About id="about" />
            <Skills id="skills" />
            <Projects id="projects" />
            <Contact id="contact" />
            {/* Footer component is typically rendered at the very bottom */}
            <Footer />
          </div>
        </div>
      );
    }
    