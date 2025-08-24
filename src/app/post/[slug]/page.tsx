// src/app/post/[slug]/page.tsx

import { client } from '@/lib/sanity' // adjust path if needed
import { notFound } from 'next/navigation'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(`*[_type == "post"].slug.current`)
  return slugs.map(slug => ({ slug }))
}

export default async function PostPage({ params }: Props) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug: params.slug }
  )

  if (!post) return notFound()

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
