import Canvas from 'Canvas'
import p5 from 'p5'

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.noFill()
  }

  p.draw = () => {
    p.stroke(p.random(255))
    p.ellipse(p.random(p.width), p.height / 2, p.random(300), p.random(300))
  }
}

const EclipseExample2 = () => {
  return (
    <>
      <Canvas sketch={sketch} />
    </>
  )
}
export default EclipseExample2
