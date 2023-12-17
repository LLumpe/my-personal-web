import React, { Fragment, useEffect, useRef, useState } from "react";
import "./ThemeButton.css";
export default function ThemeButton() {
  const [darkTheme] = useState("dark-theme");
  const [iconTheme] = useState("ri-sun-line");
  const [translage] = useState("themebutton__cicle-translate");
  const themebutton = useRef(null);
  const themecicle = useRef(null);
  const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
  const getCurrentIcon = () =>
    themebutton.current.classList.contains(iconTheme)
      ? "ri-moon-line"
      : "ri-sun-line";
  const changeTheme = () => {
    document.body.classList.toggle(darkTheme);
    themebutton.current.classList.toggle(iconTheme);
    themecicle.current.classList.toggle(translage);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  };
  return (
    <div className="themebutton__container">
      <i
        ref={themebutton}
        class="ri-moon-line"
        id="theme-button"
        onClick={changeTheme}
      ></i>
      <div className="themebutton__content" onClick={changeTheme}>
        <div className="themebutton__cicle" ref={themecicle}></div>
      </div>
    </div>
  );
}
