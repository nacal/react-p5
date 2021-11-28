import Canvas from 'Canvas'
import p5 from 'p5'

const sketch = (p: p5) => {
  let d: number

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)

    d = 0
  }

  p.draw = () => {
    d++

    p.circle(p.width / 2, p.height / 2, d)
  }
}

const GainDiameter = () => {
  return (
    <>
      <Canvas sketch={sketch} />
    </>
  )
}
export default GainDiameter
