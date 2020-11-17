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
      let tempArrowRight = x + 5;
      setX(tempArrowRight);
      setBallPosition({
        left: tempArrowRight,
        top: y,
      });
    } else if (event.key === "ArrowLeft") {
      let tempArrowLeft = x - 5;
      setX(tempArrowLeft);
      setBallPosition({
        left: tempArrowLeft,
        top: y,
      });
    } else if (event.key === "ArrowDown") {
      let tempArrowDown = y + 5;
      setY(tempArrowDown);
      setBallPosition({
        left: x,
        top: tempArrowDown,
      });
    } else if (event.key === "ArrowUp") {
      let tempArrowUp = y - 5;
      setY(tempArrowUp);
      setBallPosition({
        left: x,
        top: tempArrowUp,
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
