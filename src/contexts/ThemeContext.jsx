import React, { createContext, useState } from 'react'

const ThemeContext = createContext();

function ThemeProviderWrapper(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            console.log("change to dark")
        } else {
            setTheme("light");
            console.log("change to light")
        }
    };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext, ThemeProviderWrapper};