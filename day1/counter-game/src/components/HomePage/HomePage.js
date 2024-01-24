import React, { useEffect, useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [functionbtn, sethidfunction] = useState(true);
  const [time, getTime] = useState(0);




  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);
  const cps = Math.round(count/time);

  return (
    <div className="home-container">
      <div className="home-timer">timer:{timer}</div>
      <div className="home-count">{count}</div>
      <div className="home-cps">CPS: {cps}</div>
      {(!hidden || timer === 0) &&
      <button
        className="home-btn-start btn"
        onClick={() => {
          setTimer(1);
          getTime(1);
          setCount(0);
          setHidden(true);
        }}
        disabled={timer !== 0}     
      >
        1 sec
      </button>}
      {(!hidden || timer === 0) &&
      <button
        className="home-btn-start btn"
        onClick={() => {
          setTimer(3);
          getTime(3);
          setCount(0);
          setHidden(true);
        }}
        disabled={timer !== 0}     
      >
        3 sec
      </button>}
      {(!hidden || timer === 0) &&
      <button
        className="home-btn-start btn"
        onClick={() => {
          setTimer(5);
          getTime(5);
          setCount(0);
          setHidden(true);
        }}
        disabled={timer !== 0}     
      >
        5 sec
      </button>}
      {(!hidden || timer === 0) &&
      <button
        className="home-btn-start btn"
        onClick={() => {
          setTimer(10);
          getTime(10);
          setCount(0);
          setHidden(true);
        }}
        disabled={timer !== 0}     
      >
        10 sec
      </button>}

      {(!functionbtn || timer !== 0) &&

      <button
        className="home-btn-click btn"
        onClick={() => setCount(count + 1)}
        disabled={timer === 0}
      >
        click me
      </button>
}
      {(!functionbtn || timer !== 0) &&
      <button
        className="home-btn-reset btn"
        onClick={() => {
          setCount(0);
          setTimer(0);
        }}
      >
        reset
      </button>
}
    </div>
  );
}

export default HomePage;