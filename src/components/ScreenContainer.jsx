import React from 'react'
import { useState } from 'react';
import Button from './Button';

const ScreenContainer = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };


  return (
    <div>
      <div className={`p-4 border w-[400px] ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} rounded`}>
      <h1 className="text-2xl mb-4"> Theme mode</h1>
      <p className="mb-2">asksdfkasjd</p>
      <p className="mb-4">dkasjfkldsa</p>
      <Button toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </div>
    </div>
  )
}

export default ScreenContainer
