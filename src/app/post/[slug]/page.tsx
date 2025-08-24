import { client } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Define the Post type (so TypeScript knows what fields exist)
type Post = {
  title: string
  content?: string
  excerpt?: string
  slug: { current: string }
}

// Generate static paths
export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(`*[_type == "post"].slug.current`)
  return slugs.map((slug) => ({ slug }))
}

// Generate SEO metadata for each post
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post: Post | null = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug: params.slug }
  )
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt || 'Post from my blog',
  }
}

// The actual page
export default async function Page({
  params,
}: {
  params: { slug: string }
}) {
  const post: Post | null = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug: params.slug }
  )

  if (!post) return notFound()

  return (
    <article className="prose mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      {post.content && <p className="mt-4">{post.content}</p>}
    </article>
  )
}
