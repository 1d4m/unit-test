type User = {
  id: string;
  name: string;
};

type Props = {
  users: User[];
};

export const UserList = ({ users }: Props) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
