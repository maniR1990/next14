// app/about/page.tsx

export default async function AboutPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();

  return (
    <div>
      <h2>About Page</h2>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}
