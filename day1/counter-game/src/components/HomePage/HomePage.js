import React, { useEffect, useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [hidden, setHidden] = useState(false);


  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className="home-container">
      <div className="home-timer">timer:{timer}</div>
      <div className="home-count">{count}</div>
      {(!hidden || timer === 0) &&
      <button
        className="home-btn-start btn"
        onClick={() => {
          setTimer(3);
          setCount(0);
          setHidden(true);
        }}
        disabled={timer !== 0}     
      >
        start
      </button>}
      <button
        className="home-btn-click btn"
        onClick={() => setCount(count + 1)}
        disabled={timer === 0}
      >
        click me
      </button>
      <button
        className="home-btn-reset btn"
        onClick={() => {
          setCount(0);
          setTimer(0);
        }}
      >
        reset
      </button>
    </div>
  );
}

export default HomePage;