import { createContext } from "react";
import { Counter } from "./components/Counter";
import { LogicComponent } from "./components/Logic";
import { DemoPage } from "./components/Theme";
import { Article } from "./components/Article";

export const ThemeContext = createContext<string | null>(null);

function App() {
  return (
    <>
      <LogicComponent />
      <Counter />
      <DemoPage />
      <Article />
    </>
  );
}

export default App;
