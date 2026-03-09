/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import { Suspense } from 'react';

async function SlowData() {
  await new Promise(r => setTimeout(r, 2000));
  return <div className="text-green-600 font-medium">✅ Streaming data loaded!</div>;
}

export default async function PostsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } });
  const posts = await res.json();

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <Suspense fallback={<div className="h-6 w-32 bg-zinc-100 animate-pulse rounded" />}>
        <SlowData />
      </Suspense>
      <ul className="mt-8 space-y-4">
        {posts.slice(0, 10).map((post: any) => (
          <li key={post.id} className="p-4 border rounded hover:bg-zinc-50">
            <Link href={`/posts/${post.id}`} className="block">
              <h2 className="font-bold capitalize">{post.title}</h2>
              <p className="text-sm text-zinc-500 line-clamp-1">{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}