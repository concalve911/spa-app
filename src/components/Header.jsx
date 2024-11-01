import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import "./header.scss";

export default ({ toggleTheme, isDarkMode }) => {
  return (
    <header>
      <div>
        <nav className="header__inner">
          <ul className="header__list">
            <li>
              <NavLink to="/">Main</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Me</NavLink>
            </li>
          </ul>

          <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </nav>
      </div>
    </header>
  );
};
