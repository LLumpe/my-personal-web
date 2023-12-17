import "./Header.css";
import React, { useEffect, useState } from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
export default function Header() {
  const [dom, setDom] = useState(null);
  useEffect(() => {
    const $ = document.querySelector.bind(document);
    setDom({
      searchButton: $("#search-button"),
      searchClose: $("#search-close"),
      searchContent: $("#search-content"),
      loginButton: $("#login-button"),
      loginClose: $("#login-close"),
      loginContent: $("#login-content"),
      themeButton: $("#theme-button"),
    });
  }, []);
  const search = () => {
    dom.searchContent.classList.add("show-search");
  };
  const searchClose = () => {
    dom.searchContent.classList.remove("show-search");
  };
  const login = () => {
    dom.loginContent.classList.add("show-login");
  };
  const loginClose = () => {
    dom.loginContent.classList.remove("show-login");
  };

  return (
    <div>
      {/*<!--==================== HEADER ====================-->*/}
      <header className="header" id="header">
        <nav className="nav nav__container">
          <a href="#" className="nav__logo">
            LLumpe
          </a>
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i class="ri-home-line"></i>
                  <span>Home</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#experience" className="nav__link">
                  <i class="ri-quill-pen-line"></i>
                  <span>Experience</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  <i class="ri-collage-line"></i>
                  <span>Work</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i class="ri-mail-line"></i>
                  <span>About</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__actions">
            {/* search button */}
            <i class="ri-search-line" id="search-button" onClick={search}></i>
            {/* login button */}
            {/* <i class="ri-user-line" id="login-button" onClick={login}></i> */}
            {/* theme button */}
            <ThemeButton></ThemeButton>
          </div>
        </nav>
      </header>

      {/*<!--==================== SEARCH ====================-->*/}
      <div className="search" id="search-content">
        <form action="" className="search__form">
          <i class="ri-search-line search__icon"></i>
          <input
            className="search__input"
            type="search"
            placeholder="what are you searching today"
          />
        </form>
        <i
          class="ri-close-line search__close"
          id="search-close"
          onClick={searchClose}
        ></i>
      </div>
      {/*<!--==================== LOGIN ====================-->*/}
      <div className="login grid" id="login-content">
        <form action="" className="login__form grid">
          <h3 className="login__title">Log In</h3>
          <div className="login__group grid">
            <div>
              <label for="login-email" className="login__label">
                Email
              </label>
              <input
                id="login-email"
                className="login__input"
                type="email"
                placeholder="pls write your email"
              />
            </div>
            <div>
              <label for="login-password" className="login__label">
                Password
              </label>
              <input
                id="login-pass"
                className="login__input"
                type="password"
                placeholder="pls enter your password"
              />
            </div>
            <div>
              <span className="login__signup">
                You do not have an account?<a href="#">Sign Up</a>
              </span>
              <a href="#" className="login__forgot">
                You fogot your password
              </a>
              <button href="#" className="button login__button" type="submit">
                Log In
              </button>
            </div>
          </div>
        </form>
        <i
          class="ri-close-line login__close"
          id="login-close"
          onClick={loginClose}
        ></i>
      </div>
    </div>
  );
}
