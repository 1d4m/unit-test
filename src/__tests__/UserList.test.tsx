import { render, screen } from "@testing-library/react";
import { UserList } from "../components/UserList";

const users = [
  { id: "1", name: "john" },
  { id: "2", name: "kevin" },
  { id: "3", name: "bob" },
];

describe("<UserList />", () => {
  it("users.lengthが3のとき、<li>が3つ表示されていること", () => {
    render(<UserList users={users} />);

    const items = screen.getAllByRole("listitem"); // NOTE: <ul>や<li>は自動的にrole="listitem"が付与される
    expect(items).toHaveLength(3);
  });
});
