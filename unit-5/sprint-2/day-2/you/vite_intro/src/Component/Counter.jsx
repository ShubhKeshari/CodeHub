import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prev=>prev+1);
  }

  function decrement() {
    setCount(prev=>prev-1);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export { Counter};