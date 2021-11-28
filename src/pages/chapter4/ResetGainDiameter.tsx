import Canvas from 'Canvas'
import p5 from 'p5'

const sketch = (p: p5) => {
  let d: number

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    reset()
  }

  p.draw = () => {
    d += 2

    if (d > 900) {
      reset()
    }

    p.clear()
    p.circle(p.width / 2, p.height / 2, d)
  }

  const reset = () => {
    d = 0
  }

  p.mouseClicked = () => {
    reset()
  }
}

const ResetGainDiameter = () => {
  return (
    <>
      <Canvas sketch={sketch} />
    </>
  )
}
export default ResetGainDiameter
