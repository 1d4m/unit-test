type Props = {
  onSubmit: () => void;
};

export const Form = ({ onSubmit }: Props) => {
  return (
    <form role="form" onSubmit={onSubmit}>
      <input value="1" />
      <button type="submit">submit</button>
    </form>
  );
};
