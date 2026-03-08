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

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading articles...
        </p>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>

      <ul className="space-y-4">
        {articles.map((a) => (
          <li
            key={a.id}
            className="p-5 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
          >
            <h2 className="text-lg font-semibold text-gray-800">{a.title}</h2>

            <p className="text-sm text-gray-500 mt-1">Article ID: {a.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
