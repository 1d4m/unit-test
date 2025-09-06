import { useState } from "react";

export const Counter = () => {
  const [count] = useState(0);

  return <p>{count}</p>;
};
