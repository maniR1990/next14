export async function generateStaticParams() {
  return [
    { slug: [] }, // matches /blog
    { slug: ['nested', 'example'] },
    { slug: ['deep', 'path', 'post'] }
  ];
}

export default function CatchAll({ params }: { params: { slug?: string[] } }) {
  return <pre>{JSON.stringify(params, null, 2)}</pre>;
}
