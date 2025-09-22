import { render, screen } from "@testing-library/react";
import { Greeting } from "../components/Greeting";

describe("<Greeting />", () => {
  it("propsにmessage渡すとmessageが表示されること", () => {
    render(<Greeting message="Hi" />);
    expect(screen.getByText("Hi")).toBeInTheDocument();
  });
  it("message propsに値を渡さなかった場合、defaultが表示されること", () => {
    render(<Greeting />);
    expect(screen.getByText("default")).toBeInTheDocument();
  });
});
