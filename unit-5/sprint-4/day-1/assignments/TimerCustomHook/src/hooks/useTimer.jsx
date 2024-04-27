import React, { useRef, useState } from 'react';

function useTimer(initialValue) {
  const [timer, setTimer] = useState(initialValue);
  const intervalIdRef = useRef(null);

  const startTimer = () => {
    if (!timer.isRunning) {
      intervalIdRef.current = setInterval(() => {
        setTimer(prevTimer => {
          let { minutes, seconds } = prevTimer;
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(intervalIdRef.current);
              return { ...prevTimer, isRunning: false };
            } else {
              minutes--;
              seconds = 59;
            }
          } else {
            seconds--;
          }
          return { ...prevTimer, minutes, seconds };
        });
      }, 1000);
      setTimer(prevTimer => ({ ...prevTimer, isRunning: true }));
    }
  };

  const stopTimer = () => {
    clearInterval(intervalIdRef.current);
    setTimer(prevTimer => ({ ...prevTimer, isRunning: false }));
  };

  const resetTimer = () => {
    clearInterval(intervalIdRef.current);
    setTimer(initialValue);
  };
  return { timer, startTimer, stopTimer, resetTimer };
}

export default useTimer;
