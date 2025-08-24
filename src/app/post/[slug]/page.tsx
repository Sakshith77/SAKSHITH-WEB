import { client } from '@/lib/sanity'
import { notFound } from 'next/navigation'

// Pre-generate slugs for static paths
export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post"].slug.current`)
  return slugs.map((slug: string) => ({ slug }))
}

// Optional: Generate SEO metadata
export async function generateMetadata({ params }: any) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug: params.slug }
  )
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt || 'Post from my blog',
  }
}

// The page itself
export default async function Page({ params }: any) {
  const post = await client.fetch(
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
