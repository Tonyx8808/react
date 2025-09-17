import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
//button increment
  const handleIncrement = () => {
    setCount((_count) => _count + 1);
  };
//button decrement
  const handleDecrement = () => {
    setCount((_count) => _count - 1);
  };
  //button reset

  const handleReset = () => {
    setCount(0);
  };
  //registrare ogni volta che count cambia
useEffect(() => {
console.log("useEffect")
}, [count]);



  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
