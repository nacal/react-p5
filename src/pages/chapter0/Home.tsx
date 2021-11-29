const Home = () => {
  const links = [['path', 'name']]

  const list = links.map((link) => (
    <li>
      <a href={`/chapter/${link[0]}`}>{link[1]}</a>
    </li>
  ))

  return (
    <main>
      <h1>chapter:</h1>
      <ul>{list}</ul>
    </main>
  )
}
export default Home
