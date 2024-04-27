import React, { useState } from "react";
import useTimer from "../hooks/useTimer";

function Timer() {
  let initialValue = { minutes: 2, seconds: 30, isRunning: false };
  const { timer, startTimer, stopTimer, resetTimer } = useTimer(initialValue);
  const displayTime = `${timer.minutes.toString().padStart(2, "0")}:${timer.seconds.toString().padStart(2, "0")}`;

  return (
    <>
      <div>Timer: {displayTime}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  );
}

export default Timer;
