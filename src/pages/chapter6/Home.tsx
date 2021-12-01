const Home = () => {
  const links = [
    ['linearInterpolation', '線形補間を利用した作例'],
    ['mapExample', 'マップの利用例'],
    ['mapExample2', 'マップの利用例 その2'],
  ]

  const list = links.map((link) => (
    <li>
      <a href={`/chapter6/${link[0]}`}>{link[1]}</a>
    </li>
  ))

  return (
    <main>
      <h1>chapter6:正規化・線形補間・マップ</h1>
      <ul>{list}</ul>
    </main>
  )
}
export default Home
