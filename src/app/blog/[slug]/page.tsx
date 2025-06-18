
export async function generateStaticParams() {
  return [
    { slug: 'post-1' },
    { slug: 'post-2' }
  ];
}
export default function BlogPost({ params }: { params: { slug: string } }) {
  return <h2>Blog Post: {params.slug}</h2>;
}
