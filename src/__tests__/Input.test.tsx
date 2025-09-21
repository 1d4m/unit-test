import { render, screen } from "@testing-library/react";
import { Input } from "../components/Input";
import userEvent from "@testing-library/user-event";

describe("<Input />", () => {
  it("文字を入力すると state が更新されること", async () => {
    // Inputをレンダー
    render(<Input />);
    // レンダーしたコンポーネントに対して入力操作
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "hello");
    // Inputの持っているvalueをチェック
    expect(input).toHaveValue("hello");
  });
});
