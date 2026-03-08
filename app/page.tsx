"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-xl font-semibold">Next Tech Lab</h1>

        <div className="flex gap-6">
          <Link href="/ssr-demo" className="hover:underline">
            SSR Demo
          </Link>

          <Link href="/blog" className="hover:underline">
            Blog
          </Link>

          <Link href="/articles" className="hover:underline">
            Articles
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">Welcome to Next Tech Lab</h2>

        <p className="text-gray-600 max-w-xl">
          This project is a playground to explore important technologies in
          Next.js such as Server Components, Server Actions, TanStack Query,
          caching strategies, and modern frontend architecture.
        </p>
      </main>
    </div>
  );
}
