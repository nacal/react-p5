import Canvas from 'Canvas'
import p5 from 'p5'

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.noFill()
  }

  p.draw = () => {
    p.strokeWeight(p.random(1, 5))
    p.stroke(p.random(180, 255))
    p.circle(p.width / 2, p.height / 2, p.random(50, 300))
  }
}

const Random2 = () => {
  return (
    <>
      <Canvas sketch={sketch} />
    </>
  )
}
export default Random2
