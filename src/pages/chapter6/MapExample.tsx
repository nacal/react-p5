import Canvas from 'Canvas'
import p5 from 'p5'

const sketch = (p: p5) => {
  let x: number, y: number

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    x = 0
    y = p.height / 2
  }

  p.draw = () => {
    x++
    x %= p.width

    p.clear()

    p.strokeWeight(1)
    p.stroke('#f0f0f0')
    p.noFill()

    p.line(0, y, p.width, y)
    p.line(x, y - 10, x, y + 10)

    const r = p.map(x, 0, p.width, 300, 0)
    p.strokeWeight(6)
    p.stroke('#f0f0f0')
    p.noFill()
    p.circle(x, y, r)
  }
}

const MapExample = () => {
  return (
    <>
      <Canvas sketch={sketch} />
    </>
  )
}
export default MapExample
