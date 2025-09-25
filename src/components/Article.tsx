import { useEffect, useState } from "react";

type Response = {
  id: string;
  author: string;
  title: string;
};

export const Article = () => {
  const [posts, setPosts] = useState<Response[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPostsData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/articles`);

        if (!res.ok) {
          // HTTPエラーの場合は throw する
          const errorData = await res.json();
          throw new Error(errorData.message || "Something went wrong");
        }

        const data = await res.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getPostsData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {posts.map((p) => (
        <div key={p.id}>
          {p.author}: {p.title}
        </div>
      ))}
    </div>
  );
};
