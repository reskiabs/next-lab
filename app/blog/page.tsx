type Post = {
  id: number;
  title: string;
};

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts: Post[] = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>

        <div className="space-y-4">
          {posts.slice(0, 5).map((post) => (
            <div
              key={post.id}
              className="p-5 bg-white border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {post.title}
              </h2>

              <p className="text-sm text-gray-500 mt-2">Post ID: {post.id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
