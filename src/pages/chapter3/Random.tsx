import Canvas from 'Canvas'
import p5 from 'p5'

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = () => {
    p.circle(p.mouseX, p.mouseY, p.random(100))
  }
}

const Random = () => {
  return (
    <>
      <Canvas sketch={sketch} />
    </>
  )
}
export default Random
