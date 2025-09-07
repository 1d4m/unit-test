import { format, parseISO } from "date-fns";

/**
 * 与えられた日付をyyyy/MM/dd形式にフォーマットする関数
 * @param input string | Date
 * @returns string
 */
export const formatDate = (input: string | Date): string => {
  const date = typeof input === "string" ? parseISO(input) : input;
  return format(date, "yyyy/MM/dd");
};
