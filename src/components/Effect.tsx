import { useEffect } from "react";

export const Effect = ({ fetchData }: { fetchData: () => void }) => {
  useEffect(() => {
    fetchData();

    const id = setInterval(() => {
      fetchData();
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [fetchData]);

  return <div>effect</div>;
};
