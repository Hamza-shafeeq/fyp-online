import Style from "./NavBar.module.css";
import { useEffect, useState } from "react";
import style from './TogglerSwitch.module.css';

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem("isDarkModeEnabled");
    setIsDarkMode(JSON.parse(isDarkModeEnabled));
  }, []);

  const handleToggle = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem("isDarkModeEnabled", newIsDarkMode);
    applyTheme(newIsDarkMode);
  };

  const applyTheme = (isDarkMode) => {
    const root = window.document.documentElement;
    root.classList.remove(isDarkMode ? "light" : "dark");
    root.classList.add(isDarkMode ? "dark" : "light");
  };

  return (
    <label className={Style.switch}>
      <input type="checkbox" onClick={handleToggle}/>
      <span className ={`${style.slider} ${style.round}`}>
        {/* {isDarkMode ? "Light Mode" : "Dark Mode"} */}
      </span>
    </label>
  );
};

export default Toggle;
