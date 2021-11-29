import Canvas from 'Canvas'
import p5 from 'p5'

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.colorMode(p.HSB, p.width, 100, 100)
  }

  p.draw = () => {
    p.fill(p.mouseX, 100, 100)
    p.circle(p.mouseX, p.mouseY, 100)
  }
}

const MouseRainbow = () => {
  return (
    <>
      <Canvas sketch={sketch} />
    </>
  )
}
export default MouseRainbow
