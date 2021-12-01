import Canvas from 'Canvas'
import p5 from 'p5'

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = () => {
    p.clear()

    const max = p.dist(0, 0, p.width / 2, p.height / 2)
    const d = p.dist(p.width / 2, p.height / 2, p.mouseX, p.mouseY)
    const r = p.map(d, 0, max, max, 0)

    p.circle(p.mouseX, p.mouseY, r)
  }
}

const MapExample2 = () => {
  return (
    <>
      <Canvas sketch={sketch} />
    </>
  )
}
export default MapExample2
