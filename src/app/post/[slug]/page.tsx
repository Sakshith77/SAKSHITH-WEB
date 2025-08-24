// src/app/post/[slug]/page.tsx

import { client } from '@/lib/sanity'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(`*[_type == "post"].slug.current`)
  return slugs.map((slug) => ({ slug }))
}

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
    <div>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  )
}
