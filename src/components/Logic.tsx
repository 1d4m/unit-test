import { useState } from "react";
import { sum } from "../util/sum";
import { isEven } from "../util/isEven";
import { formatDate } from "../util/formatDate";

export const LogicComponent = () => {
  return (
    <>
      <Case1 />
      <Case2 />
      <Case3 />
    </>
  );
};

const Case1 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const result = sum(num1, num2);

  return (
    <>
      <h2>testcase: function sum</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <p>sum: {result}</p>
    </>
  );
};
const Case2 = () => {
  const [num1, setNum1] = useState(0);
  const result = isEven(num1);

  return (
    <>
      <h2>testcase2</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <p>is even: {result ? "偶数" : "奇数"}</p>
    </>
  );
};

const Case3 = () => {
  const dateObject = new Date();
  const result1 = formatDate(dateObject);
  const result2 = formatDate("2025/12/1");

  return (
    <>
      <h2>testcase3</h2>
      <p>
        {dateObject.toString()} → {result1}
        2025/12/1 → {result2}
      </p>
    </>
  );
};
