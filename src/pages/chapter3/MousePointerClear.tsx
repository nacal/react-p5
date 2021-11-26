import Canvas from 'Canvas'
import p5 from 'p5'

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = () => {
    p.clear()
    p.circle(p.mouseX, p.mouseY, 100)
  }
}

const MousePointerClear = () => {
  return (
    <>
      <Canvas sketch={sketch} />
    </>
  )
}
export default MousePointerClear
