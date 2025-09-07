import { formatDate } from "../util/formatDate";
import { isEven } from "../util/isEven";
import { sum } from "../util/sum";

// ロジック関数のテスト
describe("ロジックコンポーネント", () => {
  it("sum関数", () => {
    const total = sum(1, 2); // 期待値は3
    expect(total).toBe(3);
  });

  it("isEven関数", () => {
    expect(isEven(1)).toBe(false); // 1は偶数ではない
    expect(isEven(2)).toBe(true); // 2は偶数である
  });

  it("formatDate関数", () => {
    expect(formatDate(new Date(2025, 8, 7))).toBe("2025/09/07"); // Dateインスタンスが渡った場合
    expect(formatDate("2025-12-01")).toBe("2025/12/01");
  });
});
