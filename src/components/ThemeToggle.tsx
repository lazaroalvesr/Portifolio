'use client';

import { useEffect, useState } from "react";
import { FaMoon } from 'react-icons/fa';
import { IoSunnySharp } from "react-icons/io5";

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === "dark") setDarkMode(true)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-8 h-8 flex items-center -left-20 -top-8 lg:-top-0 lg:-left-0
    dark:bg-gray-900 bg-gray-200 justify-center cursor-pointer rounded-full p-1
    "
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <FaMoon className="text-white " size={18} /> : <IoSunnySharp className="text-gray-900" size={18} />}
    </div>
  )
} 