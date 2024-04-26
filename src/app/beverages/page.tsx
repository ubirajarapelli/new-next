export default async function Beverages() {
  const response = await fetch(`${process.env.API_URL}/09094-050`)

  return <h1>Beverages</h1>
}
