import { client } from "@/lib/sanity";


type Post = {
  title: string;
  content: string;
};

export default function PostPage({ post }: { post: Post }) {
  if (!post) return <h1>Not Found</h1>;
  return (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][]{
      "params": {"slug": slug.current}
    }`
  );
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug: params.slug }
  );
  return { props: { post }, revalidate: 10 };
}
