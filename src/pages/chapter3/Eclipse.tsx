import Canvas from 'Canvas'
import p5 from 'p5'

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = () => {
    p.ellipse(p.width / 2, p.height / 2, p.width, p.height)
  }
}

const Eclipse = () => {
  return (
    <>
      <Canvas sketch={sketch} />
    </>
  )
}
export default Eclipse
