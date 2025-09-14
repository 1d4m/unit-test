type Props = {
  isLoading: boolean;
};

export const Data = ({ isLoading }: Props) => {
  return <>{isLoading ? <p>Loading...</p> : <p>data</p>}</>;
};
