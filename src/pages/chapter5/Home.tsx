const Home = () => {
  const links = [['mouseRainbow', '色の指定を利用した作例']]

  const list = links.map((link) => (
    <li>
      <a href={`/chapter5/${link[0]}`}>{link[1]}</a>
    </li>
  ))

  return (
    <main>
      <h1>chapter5:色の指定</h1>
      <ul>{list}</ul>
    </main>
  )
}
export default Home
