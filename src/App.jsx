import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import ErrorBoundary from "./pages/ErrorBoundary";
import { useState } from "react";

export default () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ErrorBoundary>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className={isDarkMode ? "dark" : "light"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
};
