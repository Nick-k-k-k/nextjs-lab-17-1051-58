/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import { Suspense } from 'react';

async function DataStatus() {
  await new Promise(res => setTimeout(res, 2500));
  return <div className="text-xs font-mono bg-black text-green-400 p-2 inline-block">STREAM_SYNC_COMPLETE</div>;
}

export default async function Archive() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } });
  const data = await res.json();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end border-b-4 border-black pb-4">
        <h1 className="text-4xl font-black uppercase">Post Archive</h1>
        <Suspense fallback={<div className="text-xs animate-pulse">CONNECTING...</div>}>
          <DataStatus />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.slice(0, 10).map((post: any) => (
          <Link key={post.id} href={`/posts/${post.id}`} className="p-4 border-2 border-black hover:bg-accent hover:text-white transition group">
            <span className="text-xs font-mono font-bold">#00{post.id}</span>
            <h2 className="text-xl font-bold uppercase mt-1 leading-tight">{post.title}</h2>
            <p className="mt-2 text-sm line-clamp-2 opacity-70">{post.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}