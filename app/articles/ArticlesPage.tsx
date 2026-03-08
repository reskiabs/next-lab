"use client";

import { useEffect, useState } from "react";

type Article = {
  id: number;
  title: string;
};

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      setArticles(data.slice(0, 5));
      setLoading(false);
    }

    fetchArticles();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((a) => (
          <li key={a.id}>{a.title}</li>
        ))}
      </ul>
    </div>
  );
}
