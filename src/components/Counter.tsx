import { useReducer } from "react";

type Action = { type: "increment" } | { type: "decrement" };

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  const handleClick = (action: "increment" | "decrement") => {
    dispatch({ type: action });
  };

  return (
    <>
      <p aria-label="count">{count}</p>
      <button
        type="button"
        aria-label="increment"
        onClick={() => handleClick("increment")}
      >
        + increment
      </button>
      <button
        type="button"
        aria-label="decrement"
        onClick={() => handleClick("decrement")}
      >
        - decrement
      </button>
    </>
  );
};
