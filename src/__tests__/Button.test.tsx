import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../components/Button";
import { vi } from "vitest";

describe("<Button />", () => {
  it("クリック時にコールバック関数が呼ばれること", () => {
    // const callback = () => console.log(1); ← jest.fn()を使用すること
    const callback = vi.fn();

    render(<Button onClick={callback} />);

    fireEvent.click(screen.getByText("click me")); // jestdom内のButtonをクリックする

    expect(callback).toHaveBeenCalledTimes(1); // コールバック関数が呼ばれた回数を比較する
  });
});
