const Home = () => {
  const links = [
    ['gainDiameter', '直径の増加'],
    ['resetGainDiameter', '円が画面全体を覆ったらリセットする'],
  ]

  const list = links.map((link) => (
    <li>
      <a href={`/chapter4/${link[0]}`}>{link[1]}</a>
    </li>
  ))

  return (
    <main>
      <h1>chapter4:等速の変化</h1>
      <ul>{list}</ul>
    </main>
  )
}
export default Home
