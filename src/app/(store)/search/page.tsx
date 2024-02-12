export default async function Search() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return <p>Search</p>
}
