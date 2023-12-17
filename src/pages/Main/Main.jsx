import React, { useEffect, useRef } from "react";
import "./Main.css";
import lottie from "lottie-web";
import animationData from "./welcome.json";
export default function Main() {
  const animationRef = useRef(null);
  useEffect(() => {
    initAnimation();
  }, []);
  const initAnimation = () => {
    const anim = lottie.loadAnimation({
      container: animationRef.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationData, // the data to the animation json
    });
    anim.setSpeed(0.5);
    anim.addEventListener("enterFrame", () => {
      if (anim.currentFrame > 65) {
        animationRef.current.style.transform = "translateY(-100vh)";
        setTimeout(() => {
          anim.destroy();
          animationRef.current.remove();
        }, 1000);
      }
    });
  };
  return (
    <main class="main">
      <section class="home section" id="home">
        <div className="home__container grid">
          <h1 className="home__title">LLumpe Yang</h1>
          {/* <h1>你好 这是我的主页&nbsp;LLumpe.me</h1> */}
          {/* <GptWords
            text="hello this is my homePage   LLumpe.me"
            delay={800}
          ></GptWords> */}
          {/* <GptWords text="你好 这是我的主页   LLumpe.me" delay={800}></GptWords> */}
          <article className="home__data grid">
            <article className="home__data-item-1 grid home__data-gap">
              <p>
                Hi. I'm LLumpe and I'm a graduate student who loves front-end
                development.
              </p>
              <p>嗨，我是LLumpe，是一个热爱前端开发的研究生。</p>
            </article>
            <article className="home__data-item-2 grid home__data-gap">
              <p>
                Dreaming up ideas and making them come true is where my passion
                lies. You can find my work in my webpage. I also do some
                generative-art, compform, interactivity experiments.
              </p>
              <p>
                我的激情就在于畅想想法并将其变为现实。你可以在我的网页上找到我的作品。我也会做一些生成艺术、组合和互动实验。
              </p>
            </article>
            <article className="home__data-item-3 grid home__data-gap">
              <p>
                Besides programming, I like traveling and swimming. I want to
                travel around China before I graduate from graduate school.
                Aren't the great rivers and mountains in China beautiful?
                Welcome to share code together.
              </p>
              <p>
                编程之余，我喜欢旅游和游泳。我想在研究生毕业之前，把国内游玩，国内的大好河山很漂亮不是吗
                ? 欢迎一起代码一起分享。
              </p>
              <hr />
            </article>
          </article>
        </div>
      </section>
      <div className="home__animation" ref={animationRef}></div>
    </main>
  );
}
