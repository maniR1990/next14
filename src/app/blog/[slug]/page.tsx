export default function BlogPost({ params }: { params: { slug: string } }) {
  return <h2>Blog Post: {params.slug}</h2>;
}
