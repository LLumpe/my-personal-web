import React, { Fragment, useEffect, lazy } from "react";
import Header from "../components/Header/Header";
import Main from "../pages/Main/Main";
import Footer from "../components/Footer/Footer";
import ScrollReveal from "scrollreveal";
export default function Layout() {
  useEffect(() => {
    initTheme();
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 1700,
      delay: 200,
    });
    sr.reveal(".footer,.gptwords__container");
    sr.reveal(".home__data-item-1", { delay: 2000 });
    sr.reveal(".home__data-item-2", { delay: 2200 });
    sr.reveal(".home__data-item-3", { delay: 2400 });
  }, []);
  const initTheme = () => {
    const currentHours = new Date().getHours();
    localStorage.setItem(
      "selected-theme",
      currentHours >= 13 && currentHours <= 24 ? "dark" : "light"
    );
    localStorage.setItem(
      "selected-icon",
      currentHours >= 0 && currentHours < 13 ? "ri-moon-line" : "ri-sun-line"
    );
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");
    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        "dark-theme"
      );
      document
        .querySelector("#theme-button")
        .classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
          "ri-sun-line"
        );
    }
  };
  return (
    <Fragment>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Fragment>
  );
}
