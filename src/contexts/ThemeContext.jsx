import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

function ThemeProviderWrapper({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      console.log("change to dark");
    } else {
      setTheme("light");
      console.log("change to light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//PropTypes validation
ThemeProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext, ThemeProviderWrapper };
