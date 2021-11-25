import { Canvas } from 'components'
import p5 from 'p5'

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.strokeWeight(10)
    p.stroke(240)
    p.noFill() // 塗りなし
    // 幅 / 4なので、横25%の位置に円を表示する
    p.circle(p.width / 4, p.height / 2, 100)

    p.noStroke() // ストロークなし
    p.fill(240)
    // 幅 / 4 * 3なので、横75%の位置に円を表示する
    p.circle((p.width / 4) * 3, p.height / 2, 100)
  }
}

const FillAndStroke2 = () => {
  return (
    <>
      <Canvas sketch={sketch} />
    </>
  )
}
export default FillAndStroke2
