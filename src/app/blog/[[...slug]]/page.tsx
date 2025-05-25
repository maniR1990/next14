export default function CatchAll({ params }: { params: { slug?: string[] } }) {
  return <pre>{JSON.stringify(params, null, 2)}</pre>;
}
