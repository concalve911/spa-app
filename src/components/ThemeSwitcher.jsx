import { useState, useEffect } from "react";
import "./theme-switch.scss";

export default () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button className="theme-switch__btn" onClick={toggleTheme}>
      {isDarkMode ? "Light mode" : "Dark Mode"}
    </button>
  );
};
