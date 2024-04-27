import React, { useState } from 'react'

function useToggleItems(arr, initialPosition) {
  const [items,setItems] = useState(arr);
  const [position,setPosition] = useState(initialPosition);
  const toggleState = () => {
    setPosition(prevPosition => (prevPosition + 1) % items.length);
  };
  return [items[position], toggleState];
}

export default useToggleItems;