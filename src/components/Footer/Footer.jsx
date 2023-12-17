import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div>
          <a href="#home" className="footer__logo">
            <i class="ri-code-s-slash-line"></i>LLumpe
          </a>
          <p className="footer__description">
            Thank you for seeing here
            <br />
            <br />
            keep coding
            <br />
            <br />
            keep sharing
          </p>
        </div>
        <div className="footer__data grid">
          <div>
            <h3 className="footer__title">HomePage</h3>
            <ul className="footer__links">
              <li>
                <a href="#home" className="footer__link">
                  <i class="ri-home-line"></i>&nbsp;Home
                </a>
              </li>
              <li>
                <a href="#Experience" className="footer__link">
                  <i class="ri-quill-pen-line"></i>&nbsp;Experience
                </a>
              </li>
              <li>
                <a href="#Work" className="footer__link">
                  <i class="ri-collage-line"></i>&nbsp;Work
                </a>
              </li>
              <li>
                <a href="#About" className="footer__link">
                  <i class="ri-mail-line"></i>&nbsp;About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer__title">School</h3>
            <ul className="footer__links">
              <li>
                <a
                  href="https://www.ecust.edu.cn/"
                  target="noreferrer"
                  className="footer__link"
                >
                  <i class="ri-graduation-cap-line"></i>&nbsp; ECUST
                </a>
              </li>
              <li>
                <a
                  href="https://www.hutb.edu.cn/p222/index.html"
                  target="noreferrer"
                  className="footer__link"
                >
                  <i class="ri-school-line"></i>&nbsp; HUTB
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer__title">Contact</h3>
            <ul className="footer__links">
              <li>
                <address className="footer__info">
                  <i class="ri-contacts-line"></i> &nbsp;LLumpe
                </address>
              </li>
              <li>
                <address className="footer__info">LLumpe@163.com</address>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer__title">Social</h3>
            <div className="footer__social">
              <a
                href="https://github.com/LLumpe"
                className="footer__social-link"
                target="noreferrer"
              >
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
        </div>
        <span className="footer__copy ">
          <i class="ri-copyright-line"></i>ALL Rights Reserved By LLumpe
        </span>
        <span className="footer__copy">
          <a href="#home">
            cd.. &nbsp;<i class="ri-arrow-up-line"></i>
          </a>
        </span>
      </div>
    </footer>
  );
}
