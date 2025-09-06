import { render, screen } from "@testing-library/react";
import { Counter } from "./components/Counter";

describe("カウンター", () => {
  it("初期値をチェック", () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
