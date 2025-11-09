import { render } from "@testing-library/react";
import { Effect } from "../components/Effect";
import { vi } from "vitest";

describe("<Effect />", () => {
  it("初回レンダリング時にfetchDataが呼ばれること", () => {
    const fetchData = vi.fn();
    vi.useFakeTimers();
    render(<Effect fetchData={fetchData} />);
    expect(fetchData).toHaveBeenCalledTimes(1);
  });

  it("アンマウント時にsetIntervalが解除されること", () => {
    const fetchData = vi.fn();

    vi.useFakeTimers();

    const { unmount } = render(<Effect fetchData={fetchData} />);

    // 初回呼ばれる
    expect(fetchData).toHaveBeenCalledTimes(1);

    // 1秒経過
    vi.advanceTimersByTime(1000);
    expect(fetchData).toHaveBeenCalledTimes(2);

    // アンマウント
    unmount();

    // アンマウント後に 3秒経過
    vi.advanceTimersByTime(3000);

    // ✅ 呼び出し回数は増えない → cleanup 成功
    expect(fetchData).toHaveBeenCalledTimes(1);
  });
});
