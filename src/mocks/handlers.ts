import { http, HttpResponse } from "msw";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const handlers = [
  http.get(`/articles`, async () => {
    await sleep(5000);

    return HttpResponse.json([
      {
        id: "1",
        author: "a",
        title: "test",
      },
      {
        id: "2",
        author: "a",
        title: "test",
      },
      {
        id: "3",
        author: "a",
        title: "test",
      },
      {
        id: "4",
        author: "a",
        title: "test",
      },
    ]);
  }),
];
