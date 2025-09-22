type Props = {
  message?: string;
};

export const Greeting = ({ message = "default" }: Props) => {
  return <p>{message}</p>;
};
