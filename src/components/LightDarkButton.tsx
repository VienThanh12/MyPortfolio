"use client";

import { useEffect, useState } from 'react';

export default function LightDarkButton() {
  const [isDark, setIsDark] = useState(false); // default state

  const toggleDarkMode = () => {
    if (isDark) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    }
  };

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode');
    const prefersDarkMode =
      typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if ((darkMode && darkMode === 'enabled') || (!darkMode && prefersDarkMode)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggleDarkMode}
      className="relative inline-flex items-center h-10 w-20 rounded-full p-1 bg-gray-200 dark:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-300 hover:bg-gray-300 dark:hover:bg-gray-500"

  >
      {/* Knob */}
      <span
        className={`absolute left-1 top-1 h-8 w-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center transition-transform duration-300 ${
          isDark ? 'translate-x-10' : ''
        }`}
      >
        {isDark ? (
          // Moon icon
          <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          // Sun icon
          <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 
               4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 
               1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 
               0 011.414 0zM17 11a1 1 0 
               100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 
               011 1v1a1 1 0 11-2 0v-1a1 
               1 0 011-1zM5.05 6.464A1 
               1 0 106.465 5.05l-.708-.707a1 
               1 0 00-1.414 1.414l.707.707zm1.414 
               8.486l-.707.707a1 1 0 
               01-1.414-1.414l.707-.707a1 
               1 0 011.414 1.414zM4 
               11a1 1 0 100-2H3a1 1 0 
               000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>
    </button>
  );
}
