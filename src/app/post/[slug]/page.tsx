// src/app/post/[slug]/page.tsx
import { client } from '@/lib/sanity' // or your sanity client
import { notFound } from 'next/navigation'

type Params = {
  params: {
    slug: string
  }
}

// Data fetching in app router
export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post"].slug.current`)
  return slugs.map((slug: string) => ({ slug }))
}

export default async function PostPage({ params }: Params) {
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
