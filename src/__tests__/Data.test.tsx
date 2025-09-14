import { render, screen } from "@testing-library/react";
import { Data } from "../components/Data";

describe("<Data />", () => {
  it("isLoadingがtrueの場合、「Loading...」が表示されること", () => {
    render(<Data isLoading={true} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("isLoadingがfalseの場合、データが表示されること", () => {
    render(<Data isLoading={false} />);
    expect(screen.getByText("data")).toBeInTheDocument();
  });
});
