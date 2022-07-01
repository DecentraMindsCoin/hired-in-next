import React from 'react'
import { useTheme } from '../../lib/ThemeContext'
import { themes } from '../../lib/ThemeContext'


const UsingContextApi = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }
  return (
    <div className="h-full w-full space-y-5 bg-orange-500 py-16 text-center font-mono ">
      <h1 className="text-xl font-bold uppercase">Using Context Api</h1>
      <div>
        <button
        style={{
            backgroundColor: theme?.background,
            height: 36,
            width: 256
        }}
          onClick={toggleTheme}
        >
          ThemeContext Toggle
        </button>
      </div>
    </div>
  )
}

export default UsingContextApi
