import { render, screen } from "@testing-library/react";
import { Form } from "../components/Form";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("<Form />", () => {
  it("Enter キーを押すと送信関数が呼ばれること", async () => {
    const callback = vi.fn();
    render(<Form onSubmit={callback} />);

    const input = screen.getByRole("textbox");
    await userEvent.type(input, "{Enter}");

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
