    // src/main.jsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App.jsx'; // Import your main App component
    import './index.css'; // Import your global CSS (contains Tailwind directives)

    // Render your React application into the DOM
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App /> {/* The App component is the root of your portfolio */}
      </React.StrictMode>,
    );
    