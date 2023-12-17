import React, { useEffect, useRef, useState } from "react";
import "./GptWords.css";
export default function GptWords(props) {
  const [delay, setDelay] = useState("auto");
  const [cursor, setCursor] = useState("true");
  const textRef = useRef(null);
  const [timeout, settimeout] = useState("");
  const [interval, setinterval] = useState("");
  useEffect(() => {
    const { delay } = props;
    setDelay(delay ? delay : "1000");
    init(delay);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
  const init = (delay) => {
    const timeoutId = setTimeout(() => {
      const { text } = props;
      const wordList = Array.from(text);
      textRef.current.innerHTML = "";
      const intervalId = setInterval(() => {
        generate(wordList);
      }, 30);
      setinterval(intervalId);
    }, delay);
    settimeout(timeoutId);
  };
  const generate = (wordList) => {
    if (wordList.length > 0) {
      let word = wordList.shift();
      textRef.current.innerHTML += word;
    } else {
      setCursor("false");
    }
  };
  return <h1 className="gptwords__data" ref={textRef} show={cursor}></h1>;
}
