// src/app/post/[slug]/page.tsx

import { client } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import { type Metadata } from 'next'

// ✅ Use official PageProps type
import type { InferGetStaticPropsType } from 'next'

// This tells Next.js what pages to statically generate
export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(`*[_type == "post"].slug.current`)
  return slugs.map((slug) => ({ slug }))
}

// ✅ Use the correct inline typing here
export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug: params.slug }
  )

  if (!post) return notFound()

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </main>
  )
}
