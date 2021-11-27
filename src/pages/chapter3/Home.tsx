const Chapter3 = () => {
  const links = [
    ['viewCircle', '画面中央に円を描画する'],
    ['fillAndStroke', '塗りとストローク'],
    ['fillAndStroke2', '塗りとストローク その2'],
    ['mousePointer', 'マウス座標を利用する'],
    ['mousePointerClear', '画面のクリア'],
    ['mousePointer2', 'マウス座標を利用する その2'],
    ['mousePointer3', 'マウス座標を利用する その3'],
    ['random', 'ランダムを利用する'],
    ['random2', 'ランダムを利用する その2'],
    ['eclipse', '楕円の描画'],
    ['eclipseExample', '楕円を利用した作例'],
    ['eclipseExample2', '画面中央に円を描画する その2'],
  ]

  const list = links.map((link) => (
    <li>
      <a href={`/chapter3/${link[0]}`}>{link[1]}</a>
    </li>
  ))

  return (
    <main>
      <h1>chapter3:円の描画</h1>
      <ul>{list}</ul>
    </main>
  )
}
export default Chapter3
