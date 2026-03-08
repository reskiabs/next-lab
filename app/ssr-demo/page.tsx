type Article = {
  id: number;
  title: string;
};

export default async function Page() {
  console.log("SSR FETCH");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  const posts = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">SSR Demo</h1>

        <div className="space-y-4">
          {posts.slice(0, 5).map((post: Article) => (
            <div
              key={post.id}
              className="p-5 bg-white border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {post.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Article ID: {post.id}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
