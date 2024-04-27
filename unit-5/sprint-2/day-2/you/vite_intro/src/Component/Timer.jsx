import { useEffect, useState, useRef } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const cleanup = () => {
      stopTimer();
    };
    return cleanup;
  }, []);

  const startTimer = () => {
    if (intervalRef.current !== null) {
      console.log(`timer is already running`);
      return;
    }
    intervalRef.current = setInterval(() => {
      console.log(`timer running`, Date.now());
      setCount((prev) => prev+1);
    }, 1000);
  };

  const stopTimer = () => {
    console.log(`timer stopped`);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };

  return (
    <div>
      <h2>Timer: {count} </h2>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}

export { Timer } ;