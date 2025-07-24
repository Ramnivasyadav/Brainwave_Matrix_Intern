    // src/components/Footer.jsx
    import React from 'react';

    export default function Footer() {
      return (
        <footer className="bg-[#101244] py-6 text-center text-gray-400 text-sm rounded-t-lg shadow-md">
          <p>&copy; {new Date().getFullYear()} Ramnivas Yadav. All rights reserved.</p>
        </footer>
      );
    }
    