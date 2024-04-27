import React, { useState } from "react";
import useToggleItems from "../hooks/useToggleItems";

function Toggle() {
  let arr = ["A", "B", "C", "D"];
  let position = 0;
  const [state, toggleState] = useToggleItems(arr, position);

  return (
    <>
      <p>Toggled item: {state}</p>
      <button onClick={toggleState}>Toggle</button>
    </>
  );
}

export default Toggle;
