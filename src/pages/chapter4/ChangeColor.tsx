import Canvas from 'Canvas'
import p5, { Color } from 'p5'

const sketch = (p: p5) => {
  let d: number, bgColor: Color, circleColor: Color

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    circleColor = p.color(p.random(255), p.random(255), p.random(255))
    p.noStroke()
    reset()
  }

  p.draw = () => {
    d += 10

    if (d / 2 > p.dist(0, 0, p.width / 2, p.height / 2)) {
      reset()
    }

    p.background(bgColor)
    p.fill(circleColor)
    p.circle(p.width / 2, p.height / 2, d)
  }

  const reset = () => {
    d = 0
    bgColor = circleColor
    circleColor = p.color(p.random(255), p.random(255), p.random(255))
  }
}

const ChangeColor = () => {
  return (
    <>
      <Canvas sketch={sketch} />
    </>
  )
}
export default ChangeColor
