import { render, screen } from "@testing-library/react";
import { Hello } from "../components/Hello";

/**
 * describe("対象")
 * it("〜できること")
 * it("〜したときに△△になること")
 */

describe("<Hello />", () => {
  it("name propsに「john」を渡した際に、「Hello, john」を表示すること", () => {
    render(<Hello name="john" />);
    expect(screen.getByText("Hello, john")).toBeInTheDocument();
  });

  it("name propsに「kevin」を渡した際に、「Hello, kevin」を表示すること", () => {
    render(<Hello name="kevin" />);
    expect(screen.getByText("Hello, kevin")).toBeInTheDocument();
  });
});
