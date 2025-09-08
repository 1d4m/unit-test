import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p aria-label="count">{count}</p>
      <button type="button" onClick={handleClick}>
        increment
      </button>
    </>
  );
};
