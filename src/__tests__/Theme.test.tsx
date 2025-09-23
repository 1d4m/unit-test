import { render, screen } from "@testing-library/react";
import { DemoPage } from "../components/Theme";
import { ThemeContext } from "../App";

describe("ThemeContext", () => {
  it.each([
    { theme: "dark", className: "bg-black" },
    { theme: null, className: "bg-white" },
  ])(
    "themeが $theme のときに背景色 $className が表示されること",
    ({ theme, className }) => {
      render(
        theme ? (
          <ThemeContext value="dark">
            <DemoPage />
          </ThemeContext>
        ) : (
          <DemoPage />
        )
      );

      const container = screen.getByTestId("container");
      expect(container).toHaveClass(className);
    }
  );
});
