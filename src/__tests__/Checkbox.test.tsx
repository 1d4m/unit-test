import { render, screen } from "@testing-library/react";
import { Checkbox } from "../components/Checkbox";
import userEvent from "@testing-library/user-event";

describe("<Checkbox />", () => {
  it("チェックボックスを切り替えたときに状態が正しく変わること", async () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");

    // 初期値をチェック
    expect(checkbox).not.toBeChecked();

    // チェック
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    // チェックを外す
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
