import { useContext } from "react";
import { ThemeContext } from "../App";

export const DemoPage = () => {
  return <Comp />;
};

const Comp = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      data-testid="container"
      className={
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }
    >
      <p>Hello</p>
    </div>
  );
};
