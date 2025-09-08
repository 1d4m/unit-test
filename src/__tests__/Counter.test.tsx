import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Counter } from "../components/Counter";

describe("Counter", () => {
  it("初期値の確認", () => {
    render(<Counter />);
    expect(screen.getByText(0)).toBeInTheDocument();
  });

  // it("インクリメント", async () => {
  //   render(<Counter />);
  //   const button = screen.getByRole("button");
  //   const count = screen.getByLabelText("count");

  //   // クリック1回目
  //   await userEvent.click(button);
  //   expect(count).toHaveTextContent("1");

  //   // クリック2回目
  //   await userEvent.click(button);
  //   expect(count).toHaveTextContent("2");
  // });

  it("インクリメントアクション", async () => {
    render(<Counter />);
    const incrementButton = screen.getByLabelText("increment");
    const count = screen.getByLabelText("count");

    await userEvent.click(incrementButton);
    expect(count).toHaveTextContent("1");

    await userEvent.click(incrementButton);
    expect(count).toHaveTextContent("2");
  });

  it("デクリメントアクション", async () => {
    render(<Counter />);
    const decrementButton = screen.getByLabelText("decrement");
    const count = screen.getByLabelText("count");

    await userEvent.click(decrementButton);
    expect(count).toHaveTextContent("-1");

    await userEvent.click(decrementButton);
    expect(count).toHaveTextContent("-2");
  });
});
