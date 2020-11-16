import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({
      left: "0px",
      top: "0px",
    });
  };
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else {
      return (
        <button onClick={ballHandler} className="start">
          Start
        </button>
      );
    }
  };
  const moveBall = (event) => {
    if (event.key === "ArrowRight") {
      setX(x + 5);
      setBallPosition({
        left: x,
        top: y,
      });
    } else if (event.key === "ArrowLeft") {
      setX(x - 5);
      setBallPosition({
        left: x,
        top: y,
      });
    } else if (event.key === "ArrowDown") {
      setY(y + 5);
      setBallPosition({
        left: x,
        top: y,
      });
    } else if (event.key === "ArrowUp") {
      setY(y - 5);
      setBallPosition({
        left: x,
        top: y,
      });
    }
  };
  const ballHandler = () => {
    setRenderBall(true);
  };
  useEffect(() => {
    window.addEventListener("keydown", moveBall);
    return () => {
      window.removeEventListener("keydown", moveBall);
    };
  });

  return (
    <div className="playground" onKeyDown={moveBall}>
      <button onClick={reset} className="reset">
        Reset
      </button>

      {renderChoice()}
    </div>
  );
};

export default App;
