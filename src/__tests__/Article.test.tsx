import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Article } from "../components/Article";

/**
 * ? afterEach()
 * ? vi.unstubAllGlobals()
 * ? vi.stubGlobal()
 */

describe("<Article />", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("データ取得後にリストが描画されること", async () => {
    // fetch を成功にモック
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve([
              { id: "1", author: "a", title: "test" },
              { id: "2", author: "a", title: "test" },
              { id: "3", author: "a", title: "test" },
              { id: "4", author: "a", title: "test" },
            ]),
        })
      )
    );

    render(<Article />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    const items = await screen.findAllByText(/a: test/, {}, { timeout: 6000 });
    expect(items).toHaveLength(4);
  });

  it("API が失敗した場合にエラーが表示されること", async () => {
    // fetch を失敗にモック
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.reject(new Error("Internal Server Error")))
    );

    render(<Article />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    const errorMsg = await screen.findByText(/Internal Server Error/i);
    expect(errorMsg).toBeInTheDocument();
  });
});
