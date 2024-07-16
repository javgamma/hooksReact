import React from 'react'

const Button = ({ toggleTheme, isDarkMode }) => {
  return (
    <button
    onClick={toggleTheme}
      className={`px-4 py-2 rounded ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} border`}
    >
      {isDarkMode ? 'Modo Claro ☀️' : 'Modo Oscuro 🌙'}
    </button>
  )
}

export default Button
